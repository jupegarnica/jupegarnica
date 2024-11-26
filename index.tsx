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

function ProjectDates({ created_at, updated_at }: { created_at: Date, updated_at: Date }) {
  return (
    <div className="date text-sm border-r pr-4 flex items-cente">
      <span className="">{created_at.getFullYear()}</span>
      {created_at.getFullYear() !== updated_at.getFullYear() && (
        <>
          <span className="mx-1">-</span>
          <span style={{ fontSize: '0.8em' }}>{updated_at.getFullYear().toString().slice(-2)}</span>
        </>
      )}
    </div>
  );
}

function ProjectItem({ project }: { project: Project }) {
  const cleanedUrl = project.url.replace(/\/$/, '').replace(/https?:\/\//, ''); // Remove trailing slash if present
  const [domain, ...pathParts] = cleanedUrl.split('/');
  const pathname = pathParts.join('/');

  return (
    <div key={project.title} className="relative p-2 grid grid-cols-[10ch_1fr_35ch] group project">
      <ProjectDates created_at={project.created_at} updated_at={project.updated_at} />
      <div className="border-r px-2">
        <h2 className="title text-md font-bold">{project.title}</h2>
        <p className="description text-gray-400 text-xs">{project.description}</p>
      </div>
      <a href={project.url} className="url text-xs self-center pl-2">
        <span className="font-bold">{domain}</span>
        {pathname && <span className="text-gray-400">/{pathname}</span>}
      </a>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-screen transition-all duration-500 group-hover:h-96" style={{
        top: '100%',
        zIndex: 100,
        backgroundColor: 'white',
        height: '0',
        overflow: 'auto'
      }}>
        <a href={project.url} className="text-lg font-bold">

          <img
            src={`./screenshots/${project.title}.png`}
            className="w-full border-0 transition-all duration-500"
            style={{ objectFit: 'cover', objectPosition: 'top', heigth: 'auto' }}
          />
        </a>
        {/* <iframe
          data-src={`https://iframe-it.deno.dev/${encodeURIComponent(project.url.replace('https://', ''))}`}
          className="w-full border-0 transition-all duration-500"
          style={{ height: '100%' }}
        ></iframe> */}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto max-w-3xl" style={{ maxWidth: '920px' }}>
        <header className="flex flex-row justify-between items-center">
          <h1 className="text-4xl font-bold my-10">Juan Garnica</h1>
          <h4><a href="https://github.com/jupegarnica">About</a></h4>
        </header>
        <main className="grid grid-cols-1 gap-4">
          {projects.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </main>
        <footer className="flex flex-row justify-between items-center py-8">
          <p>© {new Date().getFullYear()}</p>
          <p><a href="https://github.com/jupegarnica/jupegarnica">Source</a></p>
        </footer>
      </div>
    </div>
  )
}