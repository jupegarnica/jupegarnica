export const layout = 'layout.tsx'
interface Project {
    title: string
    published: boolean
    draft: boolean
    description: string
    url: string
  }

  const projects: Project[] = [
    {
      title: "Commit",
      published: false,
      draft: false,
      description: "Write commit messages powered by AI",
      url: "https://github.com/jupegarnica/commit"
    },
    {
      title: "Project 2",
      published: true,
      draft: false,
      description: "Another amazing project",
      url: "https://github.com/yourusername/project2"
    },
    {
      title: "Draft Project",
      published: false,
      draft: true,
      description: "A work in progress",
      url: "https://github.com/yourusername/draft-project"
    },
    {
      title: "Project 3",
      published: true,
      draft: false,
      description: "A cool project",
      url: "https://github.com/yourusername/project3"
    },
    {
      title: "Project 4",
      published: true,
      draft: false,
      description: "An interesting project",
      url: "https://github.com/yourusername/project4"
    },
    {
      title: "Project 5",
      published: true,
      draft: false,
      description: "A fascinating project",
      url: "https://github.com/yourusername/project5"
    },
    {
      title: "Project 6",
      published: true,
      draft: false,
      description: "A remarkable project",
      url: "https://github.com/yourusername/project6"
    },
    {
      title: "Project 7",
      published: false,
      draft: true,
      description: "A new project in progress",
      url: "https://github.com/yourusername/project7"
    },
    {
      title: "Project 8",
      published: true,
      draft: false,
      description: "An innovative project",
      url: "https://github.com/yourusername/project8"
    },
    {
      title: "Project 9",
      published: false,
      draft: true,
      description: "A draft project",
      url: "https://github.com/yourusername/project9"
    },
    {
      title: "Project 10",
      published: true,
      draft: false,
      description: "A groundbreaking project",
      url: "https://github.com/yourusername/project10"
    },
    {
      title: "Project 11",
      published: true,
      draft: false,
      description: "A creative project",
      url: "https://github.com/yourusername/project11"
    },
    {
      title: "Project 12",
      published: true,
      draft: false,
      description: "An exciting project",
      url: "https://github.com/yourusername/project12"
    }
  ]

  export default function Portfolio() {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <header className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-gray-900">My Portfolio</h1>
          </div>
        </header>

        <main className="flex-grow flex flex-col">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex-grow">
            <div className="px-4 py-6 sm:px-0 flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transform transition-transform hover:scale-105">
                    <div className="p-6 flex-grow">
                      <h3 className="text-2xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                      <p className="text-sm mb-4 text-gray-600">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.draft && (
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-700">
                            Draft
                          </span>
                        )}
                        {project.published && (
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-200 text-blue-800">
                            Published
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-gray-900">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition duration-300 ease-in-out"
                      >
                        View on GitHub
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-white shadow-lg mt-8">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500">
              © 2023 Your Name. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    )
  }