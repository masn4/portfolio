const Contact = () => (
  <section id='contact' className='bg-gray-900 text-gray-300 py-16'>
    <div className='container mx-auto text-center'>
      <h2 className='text-3xl font-bold mb-8'>Get In Touch</h2>
      <form className='max-w-md mx-auto space-y-4'>
        <input
          type='text'
          placeholder='Your Name'
          className='w-full p-3 bg-gray-800 text-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500'
        />
        <input
          type='email'
          placeholder='Your Email'
          className='w-full p-3 bg-gray-800 text-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500'
        />
        <textarea
          placeholder='Your Message'
          className='w-full p-3 bg-gray-800 text-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button
          type='submit'
          className='w-full py-3 bg-blue-500 text-gray-900 font-semibold rounded hover:bg-blue-600 transition'
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);
export default Contact;
