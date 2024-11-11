'use client'

import { useState } from 'react'

// Define the structure for a project
interface Project {
  title: string
  published: number
  draft: boolean
  description: string
  url: string
}

// Sample project data
const projects: Project[] = [
  {
    title: "Commit",
    published: 0,
    draft: false,
    description: "Write commit messages powered by AI",
    url: "https://github.com/jupegarnica/commit"
  },
  // Add more projects here...
]

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-md ${darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'}`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <div key={index} className={`flex flex-col rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.draft && (
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                          Draft
                        </span>
                      )}
                      {project.published > 0 && (
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${darkMode ? 'bg-blue-700 text-blue-200' : 'bg-blue-200 text-blue-800'}`}>
                          Published: {project.published}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center px-4 py-2 rounded-md ${
                        darkMode
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      } transition duration-300 ease-in-out`}
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

      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow mt-8`}>
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            © 2023 Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}