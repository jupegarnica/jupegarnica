import fs from "node:fs";
import path from "node:path";
import type { Project, Repo } from "../project.type.ts";

const GITHUB_API_URL = "https://api.github.com";
const USERNAME = "jupegarnica";
const TOKEN = Deno.env.get("GITHUB_TOKEN"); // Use environment variables for security

async function fetchProjects(): Promise<Repo[]> {
  const response = await fetch(`${GITHUB_API_URL}/users/${USERNAME}/repos`, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching projects: ${response.statusText}`);
  }

  const projects = await response.json();
  return projects;
}

function saveToFile(projects: unknown[], filename: string) {
  const dir = path.join(import.meta.dirname || ".", "..", "_data");
  const filePath = path.join(dir, filename);

  let existingProjects: any[] = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    existingProjects = JSON.parse(fileContent);
  }

  const updatedProjects = projects.map((project: any) => {
    const existingProject = existingProjects.find(
      (p: any) => p.title === project.title
    );
    if (existingProject) {
      project.created_at = existingProject.created_at;
    }
    return project;
  });

  fs.writeFileSync(filePath, JSON.stringify(updatedProjects, null, 2));
  console.log(`saved to ${filePath}`);
}

async function main() {
  try {
    const projects: Repo[] = await fetchProjects();
    const repos: Project[] = projects
      .map((project: any) => ({
        title: project.name,
        description: project.description || "",
        url: project.homepage || project.html_url,
        created_at: new Date(project.created_at),
        updated_at: new Date(project.updated_at),
      }))
      .toSorted(
        (a: any, b: any) => b.created_at.getTime() - a.created_at.getTime()
      );
    saveToFile(projects, "projects.json");
    saveToFile(repos, "repos.json");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch projects");
  }
}

if (import.meta.main) {
  await main();
}
