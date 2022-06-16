import React from 'react';
import { Helmet } from 'react-helmet';
import { NavHashLink } from 'react-router-hash-link';

export default function Page404() {
  return (
    <>
    <Helmet>
        <title>404</title>
    </Helmet>
    <section className="bg-dark p-10">
      <div className="max-w-2xl m-auto text-white text-center bg-dark">
        <h1 className='pixel_font md:text-7xl text-6xl mb-4'>404</h1>
        <h2 className='pixel_font md:text-4xl text-2xl mb-10'>Sorry, nothing found.</h2>
        <NavHashLink
          to={'/#top'}
          className="text-2xl cursor-pointer bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-6 border border-white hover:border-transparent rounded"
          >Back</NavHashLink>
      </div>
    </section>
    </>
  )
}
