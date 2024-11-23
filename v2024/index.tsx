import data from './_scripts/projects.json' with { type: "json" };
export const layout = 'layout.tsx';

interface Project {
  title: string;
  date: Date;
  description: string;
  url: string;
}

console.log(data);

const sortedData = data.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

const publicData = sortedData.filter((item: any) => !item.private && !item.fork);

const projects: Project[] = publicData.map((item: any) => ({
  title: item.name,
  description: item.description || '',
  url: item.homepage || item.html_url,
  date: new Date(item.created_at)
}));

export default function Portfolio() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto max-w-3xl" style={{ maxWidth: '920px' }}>
        <h1 className="text-4xl font-bold text-center my-10">Portfolio</h1>
        <div className="grid grid-cols-1 gap-4">
          {projects.map((project) => (
            <div key={project.title} className="relative p-4 grid grid-cols-[8ch_1fr_35ch] group">
              <p className="text-gray-500 text-sm">{project.date.getFullYear()}</p>
              <div>
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <a href={project.url} className="text-blue-500 text-xs self-center">{project.url}</a>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-screen hidden group-hover:block" style={{
                top: '100%',
                zIndex: 100,
                backgroundColor: 'white',
                border: '1px solid #ccc' // Add border to iframe wrapper
              }}>
                <iframe
                  src={project.url}
                  className="w-full h-[600px] border-0" // Increase height to 600px
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}