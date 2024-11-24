import fs from 'node:fs';
import path from 'node:path';

const GITHUB_API_URL = 'https://api.github.com';
const USERNAME = 'jupegarnica';
const TOKEN = Deno.env.get('GITHUB_TOKEN');  // Use environment variables for security

async function fetchProjects() {
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

interface Project {
    name: string;
    description: string;
    html_url: string;
}

function saveProjectsToFile(projects: Project[]) {
    const dir = path.join(import.meta.dirname || '.', '..', 'data');
    const filePath = path.join(dir, 'projects.json');
    fs.writeFileSync(filePath, JSON.stringify(projects, null, 2));
    console.log(`Projects saved to ${filePath}`);
}

async function main() {
    try {
        const projects = await fetchProjects();
        await saveProjectsToFile(projects);
    } catch (error) {
        console.error(error);
    }
}

main();
