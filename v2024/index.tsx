import data from './_scripts/projects.json' with { type: "json" };
export const layout = 'layout.tsx';

interface Project {
  title: string;
  date: Date;
  description: string;
  url: string;
}

console.log(data);

const sortedData = data.sort((a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

const projects: Project[] = sortedData.map((item: any) => ({
  title: item.name,
  description: item.description || '',
  url: item.homepage || item.html_url,
  date: new Date(item.updated_at)
}));

export default function Portfolio() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-10">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.title} className="border p-4 rounded">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              <p className="text-gray-500 text-sm">{project.date.getFullYear()}</p>
              <a href={project.url} className="text-blue-500">View</a>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}