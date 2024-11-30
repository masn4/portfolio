const Navbar = () => (
  <nav className='bg-gray-900 text-gray-300 fixed w-full z-10 shadow-md'>
    <div className='container mx-auto px-6 py-4 flex justify-center'>
      <ul className='flex space-x-12'>
        {['Home', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className='hover:text-blue-500 transition'
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);
export default Navbar;
