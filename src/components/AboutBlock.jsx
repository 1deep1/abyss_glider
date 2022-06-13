import React from 'react'

import manPic1 from '../images/man.png'

export default function AboutBlock() {
  return (
    <section className="about_block p-10" id='about'>
        <div className="container flex lg:flex-nowrap flex-wrap bg-white items-center justify-center">
            <div className='mr-10 lg:mb-0 mb-10'>
                <h2 className='pixel_font lg:text-6xl text-4xl mb-5'>What our project is about?</h2>
                <p className='md:text-2xl text-xl mb-8'>We are creating our own universe called “Elatu”, which will evolve during the NFT collections progression. In the future a board game based on our universe will be created, as well as two video games.</p>
                <p className='md:text-2xl text-xl'>By purchasing our cards you will learn a little more about the universe, and you will also get a piece of the collection's plot, which you can collect to get an interesting story from the universe.</p>
            </div>
            <img
                src={manPic1}
                className='rounded-lg'
                alt="AbyssGlider img"
                width={437} />
        </div>
        <div className="container flex items-center justify-center">
        </div>
    </section>
  )
}
