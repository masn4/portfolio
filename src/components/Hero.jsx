const Hero = () => (
  <section
    id='home'
    className='h-screen bg-dark-gradient text-white flex flex-col justify-center items-center text-center'
  >
    <h1 className='text-4xl md:text-6xl font-extrabold mb-4'>
      Hi, I'm Marc Aguilar
    </h1>
    <p className='text-gray-400 max-w-md mb-6'>
      A passionate software engineer focused on building sleek and functional
      web applications.
    </p>
    <a
      href='#projects'
      className='px-6 py-3 bg-blue-500 text-gray-900 font-semibold rounded hover:bg-blue-600 transition'
    >
      See My Work
    </a>
  </section>
);
export default Hero;
