import React, { useState } from 'react'
import { NavHashLink } from 'react-router-hash-link'
import links from '../data/links.json'

import logo from '../images/logo.png'

export default function Header() {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className='bg-black sticky top-0 z-10' id='home'>
        <NavHashLink to={'/#top'} className='flex items-center justify-center p-5 md:mb-1 mb-0 text-white'>
            <img
                src={logo}
                alt="AbyssGlider logo"
                width={55} />
            <h1 className='md:ml-5 ml-2 md:text-2xl text-xl font-semibold'>Abyss Glider</h1>
        </NavHashLink>
        <div className='pb-5 text-white'>
            <div className='flex items-center justify-center'>
                <button
                    onClick={() => toggleExpansion(!isExpanded)}
                    className="lg:hidden flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white"
                >
                    <svg
                    className="w-3 h-3 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            <div
                className={`${
                isExpanded ? `flex` : `hidden`
                } flex flex-wrap lg:flex items-center justify-center md:text-xl text-md md:flex-row flex-col md:mt-0 mt-4`}
                >
                {Object.keys(links).map((i) => {
                    return <NavHashLink
                        smooth to={links[i].url}
                        key={links[i].id}
                        onClick={() => toggleExpansion(!isExpanded)}
                        className="block md:mr-4 text-white text-2sm lg:inline-block lg:mt-0 cursor-pointer hover:underline"
                        >{links[i].text}</NavHashLink>
                })}
            </div>
        </div>
    </nav>
  )
}
