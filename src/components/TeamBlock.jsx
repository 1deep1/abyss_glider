import React from 'react'

import avatar1 from '../images/alex.png'
import avatar2 from '../images/emil.png'

export default function TeamBlock() {
  return (
    <section className="team_block p-10" id='team'>
        <div className="container m-auto">
          <h2 className='pixel_font lg:text-6xl text-4xl mb-16 uppercase text-center'>Our team</h2>
          <div className="flex justify-between md:flex-nowrap flex-wrap">

            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center md:mr-10 mr-0 md:mb-0 mb-10">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36" src={avatar1} alt="photo"/>
                </div>
                <div className="text-center">
                    <p className="text-xl text-gray-700 font-bold mb-2">Alex Savin aka boca_legend</p>
                    <p className="text-base text-gray-400 font-normal">founder of the universe, main artist</p>
                </div>
            </div>

            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36" src={avatar2} alt="photo"/>
                </div>
                <div className="text-center">
                    <p className="text-xl text-gray-700 font-bold mb-2">Emil Sednawi aka emil13top</p>
                    <p className="text-base text-gray-400 font-normal">founder of the project, main dev</p>
                </div>
            </div>

          </div>
        </div>
    </section>
  )
}
