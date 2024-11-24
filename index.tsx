import data from './_data/repos.json' with { type: "json" };
export const layout = 'layout.tsx';
import type { Project } from "./project.type.ts";



const projects: Project[] = data
  .map((project) => ({
    title: project.title,
    description: project.description,
    url: project.url,
    created_at: new Date(project.created_at),
    updated_at: new Date(project.updated_at),
  }))
  .sort((a: any, b: any) => (b.created_at).getTime() - (a.created_at).getTime())



export default function Portfolio() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto max-w-3xl" style={{ maxWidth: '920px' }}>
        <header>
          <h1 className="text-4xl font-bold my-10">Juan Garnica</h1>
        </header>
        <div className="grid grid-cols-1 gap-4">
          {projects.map((project) => (
            <div key={project.title} className="relative p-2 grid grid-cols-[10ch_1fr_35ch] group project">
              <div className="text-sm border-r pr-4 flex items-center">
                <span className="font-bold text-gray-400">{project.created_at.getFullYear()}</span>
                <span className="mx-1 text-gray-500">-</span>
                <span className="text-gray-400 text-xs" style={{ fontSize: '0.8em' }}>{project.updated_at.getFullYear()}</span>
              </div>
              <div className="border-r px-2">
                <h2 className="title text-xl font-bold">{project.title}</h2>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
              <a href={project.url} className="text-xs self-center pl-2 hover:text-blue-500">{project.url}</a>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-screen transition-all duration-500 group-hover:h-96" style={{
                top: '100%',
                zIndex: 100,
                backgroundColor: 'white',
                height: '0',
                overflow: 'hidden'
              }}>
                <iframe
                  data-src={project.url}
                  className="w-full border-0 transition-all duration-500"
                  style={{ height: '100%' }}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}