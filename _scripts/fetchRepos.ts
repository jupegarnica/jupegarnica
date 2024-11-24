import fs from 'node:fs';
import path from 'node:path';
import { Project, ProjectRaw } from "../Project.type.ts";

const GITHUB_API_URL = 'https://api.github.com';
const USERNAME = 'jupegarnica';
const TOKEN = Deno.env.get('GITHUB_TOKEN');  // Use environment variables for security

async function fetchProjects(): Promise<ProjectRaw[]> {
    const response = await fetch(`${GITHUB_API_URL}/users/${USERNAME}/repos`, {
        headers: {
            'Authorization': `token ${TOKEN}`
        }
    });

    if (!response.ok) {
        throw new Error(`Error fetching projects: ${response.statusText}`);
    }

    const projects = await response.json();
    return projects;
}



function saveProjectsToFile(projects: Project[]) {
    const dir = path.join(import.meta.dirname || '.','..', '_data');
    const filePath = path.join(dir, 'repos.json');
    fs.writeFileSync(filePath, JSON.stringify(projects, null, 2));
    console.log(`Projects saved to ${filePath}`);
}

async function main() {
    try {
        let projects: ProjectRaw[] = await fetchProjects();
        const repos: Project[] = projects.map((project: any) => ({
            title: project.name,
            description: project.description || '',
            url: project.homepage || project.html_url,
            created_at: new Date(project.created_at),
            updated_at: new Date(project.updated_at)
        }));
        saveProjectsToFile(repos);
    } catch (error) {
        console.error(error);
    }
}

main();
