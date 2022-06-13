import React from 'react'

import authorsData from '../data/authors.json'

export default function GalleryBlock() {
  return (
    <section className="gallery_block bg-dark md:p-10 p-4" id='gallery'>
        <div className="container flex lg:flex-nowrap flex-wrap bg-white items-center justify-center bg-dark">
            <div className='lg:mb-0 mb-10 flex items-center justify-center flex-col'>
                <h2 className='lg:text-9xl text-5xl text-center mb-5 text-white font-black uppercase'>The first <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>pixel</span> gallery</h2>
                <p className='lg:text-4xl text-2xl lg:my-10 my-6 text-center text-white font-black uppercase'>powered by spatial</p>
                <p className='lg:text-4xl text-2xl text-center text-white leading-big'>Abyss Glider team, in the company of such cool artists as:
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-10'>
                  {Object.keys(authorsData).map((key, i) => (
                    <a className='flex items-center justify-start twitter_color_black py-5 px-4 rounded-3xl hover:brightness-75' href={authorsData[i].link} key={i} rel="noreferrer" target="_blank">
                      <img src={authorsData[i].img} width={90} alt={authorsData[i].name} className='rounded-full mr-5' />
                      <p>
                        <h4 className='md:text-2xl text-md text-white font-semibold md:mb-2 mb-1 leading-5 text-left'>{authorsData[i].name}</h4>
                        <p className='twitter_color_gray md:text-lg text-xs text-left'>{authorsData[i].tag}</p>
                      </p>
                    </a>
                  ))}
                </div>
                  created an
                  exhibition full of different pixels for every taste.
                  We kindly recommend you to visit it and probably buy something, because you will definitely bite your elbows if you haven't done it before, cause these works
                  will cost space money soon.
                </p>
                <p className='lg:text-4xl text-2xl text-center text-white mb-10'>So.. Come in, relax, admire, invest.</p>
                <iframe className='md:block hidden rounded-lg' width="560" height="315" src="https://www.youtube.com/embed/zKdsxadvrbQ" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="https://spatial.io/s/emil13tops-Lo-Fi-Hangout-624c7b9d99cecf0001da714a?share=7425870556140584252" rel="noreferrer" target="_blank" class="mt-10 text-2xl cursor-pointer bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-6 border border-white hover:border-transparent rounded">
                Join Exhibition
                </a>
            </div>
        </div>
    </section>
  )
}
