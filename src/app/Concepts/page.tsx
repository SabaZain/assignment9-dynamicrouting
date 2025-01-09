import React from 'react'

const Concepts = () => {
  return (
    <div className='h-screen md:h-96 lg:h-96'>
    <div className='mb-4 mx-3'>
      <h1 className='text-2xl text-center font-bold mt-10'>Client Side Rendering</h1>
      <p className='text-center mt-6'>Client Side Rendering is a web development technique where the web page content is generated and rendered in the user browser,
       rather than being pre-rendered on the server. Client Side Rendering process occurs on the client.</p>
    </div>
    <div className='mb-4 mx-3'>
    <h1 className='text-2xl text-center font-bold'>Server Side Rendering</h1>
    <p className='text-center mt-6 px-2'>Server Side Rendering(SSR) is a web development technique where the content of a webpage is generated on the server and then sent
    as fully rendered HTML to the client(browser).In SSR, the server processes the requested page, renders the necessary content, 
    and sends it to the browser, which can immediately display the fully-formed page.</p>
  </div>
  <div className='mb-4 mx-3'>
    <h1 className='text-2xl text-center font-bold'>Dynamic Routing</h1>
    <p className='text-center mt-6 px-2'>Dynamic Routing in Next.js allows to create pages that change based on the URL, using file and
      folder names with dynamic segments for example [id]. The dynamic segment like [id] captures the value from the URL and makes it available
      to the page component.
    </p>
  </div>
  </div>
  )
}

export default Concepts;
