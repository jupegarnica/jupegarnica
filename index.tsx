import data from './_data/repos.json' with { type: "json" };
import type { Project } from "./Project.type.ts";
export const layout = 'layout.tsx';


const projects: Project[] = data.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).map((project: Project) => ({
  title: project.title,
  description: project.description,
  url: project.url,
  created_at: new Date(project.created_at),
  updated_at: new Date(project.updated_at),
}));


export default function Portfolio() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto max-w-3xl" style={{ maxWidth: '920px' }}>
        <h1 className="text-4xl font-bold text-center my-10">Portfolio</h1>
        <div className="grid grid-cols-1 gap-4">
          {projects.map((project) => (
            <div key={project.title} className="relative p-2 grid grid-cols-[10ch_1fr_35ch] group">
              <div className="text-gray-500 text-xs border-r pr-2">
                <span>{project.created_at.getFullYear()}</span>
                <span className="mx-1">-</span>
                <span className="text-gray-400">{project.updated_at.getFullYear()}</span>
              </div>
              <div className="border-r px-2">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
              <a href={project.url} className="text-blue-500 text-xs self-center pl-2">{project.url}</a>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-screen hidden group-hover:block" style={{
                top: '100%',
                zIndex: 100,
                backgroundColor: 'white',
                border: '1px solid #ccc'
              }}>
                <iframe
                  src={project.url}
                  className="w-full h-[600px] border-0"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}