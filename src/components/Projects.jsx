const Projects = () => (
  <section id='projects' className='bg-gray-800 text-gray-300 py-16'>
    <div className='container mx-auto'>
      <h2 className='text-3xl font-bold text-center mb-12'>My Projects</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {[
          {
            title: 'Pomodoro App',
            description: 'A productivity timer for focused work sessions.',
            link: 'https://pomodoro-app-nine-rose.vercel.app/',
          },
        ].map((project, index) => (
          <div
            key={index}
            className='bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition'
          >
            <h3 className='text-xl font-bold text-white'>{project.title}</h3>
            <p className='text-gray-400 mt-2'>{project.description}</p>
            <a
              href={project.link}
              className='text-blue-500 hover:text-blue-400 mt-4 inline-block transition'
            >
              View Details →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Projects;
