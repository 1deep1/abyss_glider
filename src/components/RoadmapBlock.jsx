import React from 'react';

import roadmapData from '../data/roadmap.json'
import roadmapImg from '../images/roadmap.jpg'

export default function RoadmapBlock() {
  return (
    <section className="Roadmap_block p-10" id='roadmap'>
        <div className="container flex lg:flex-nowrap flex-wrap bg-white items-center justify-center flex-col">
            <h2 className='pixel_font lg:text-6xl text-3xl text-center mb-10'>Our roadmap</h2>
            <img
              src={roadmapImg}
              className='rounded-xl w-full mb-10'
              alt="NFT Roadmap"
               />
            <ul className='my-7 lg:w-3/4 w-11/12'>
              {Object.keys(roadmapData).map((key, i) => (
                <>
                <li className='flex items-end' key={i}>
                  <p className='lg:text-8xl text-5xl font-bold md:mr-10 mr-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                    {(i+1)<10
                      ? '0' + (i+1)
                      : (i+1)
                    }
                  </p>
                  <div>
                    <p className='lg:text-4xl text-sm font-semibold mb-3 pixel_font'>{roadmapData[i].title}</p>
                    <p className='lg:text-2xl text-md text-gray-700'>{roadmapData[i].description}</p>
                  </div>
                </li>
                {roadmapData.length === i+1
                  ? ''
                  : <hr className="my-6" />
                }
                </>
              ))}
            </ul>
        </div>
    </section>
  )
}
