import fs from 'node:fs';
import path from 'node:path';
import type { Project, Repo } from "../project.type.ts";

const GITHUB_API_URL = 'https://api.github.com';
const USERNAME = 'jupegarnica';
const TOKEN = Deno.env.get('GITHUB_TOKEN');  // Use environment variables for security

async function fetchProjects(): Promise<Repo[]> {
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



function saveToFile(projects: unknown[], filename: string) {
    const dir = path.join(import.meta.dirname || '.','..', '_data');
    const filePath = path.join(dir, filename);
    fs.writeFileSync(filePath, JSON.stringify(projects, null, 2));
    console.log(`saved to ${filePath}`);
}

async function main() {
    try {
        const projects: Repo[] = await fetchProjects();
        console.log(projects.length);

        const repos: Project[] = projects.map((project: any) => ({
            title: project.name,
            description: project.description || '',
            url: project.homepage || project.html_url,
            created_at: new Date(project.created_at),
            updated_at: new Date(project.updated_at)
        }));
        saveToFile(projects, 'projects.json');
        saveToFile(repos, 'repos.json');
    } catch (error) {
        console.error(error);
    }
}

main();
