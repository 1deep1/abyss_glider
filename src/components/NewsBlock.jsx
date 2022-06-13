import React, { useEffect, useState } from 'react'
import { NavHashLink } from 'react-router-hash-link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { gql } from '@apollo/client'
import client from './apolloClient'

export default function NewsBlock() {
  const [newsData, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await client.query({
        query: gql`
        {
          newsAll {
            id
            title
            slug
            date
            text {
              text
            }
          }
        }
        `
      })
      setNews(data.data)
    };

    fetchNews();
  }, []);
  return (
    <section className="gallery_block bg-dark md:p-10 p-4" id='news'>
        <div className="container flex flex-col bg-white items-center justify-center bg-dark">
            <h2 className='pixel_font text-white lg:text-6xl text-3xl text-center mb-10'>News</h2>
            <div className="flex flex-col-reverse gap-y-3.5">
                {!newsData ? (
                    <p className='text-white text-xl font-semibold'>Loading...</p>
                ) : (
                <>
                {newsData.newsAll.map(({ id, title, slug, date, text }) => (
                    <NavHashLink className='flex flex-col twitter_color_black py-5 md:px-10 px-6 rounded-3xl' to={`/news/${slug}#top`} key={id}>
                        <h4 className='md:text-3xl text-md pixel_font text-white font-semibold mb-0 text-left '>{title}</h4>
                        <p className='twitter_color_gray md:text-lg text-xs text-left md:mb-2 mb-1'><FontAwesomeIcon icon={faClock}/> {date}</p>
                        <p className='text-white md:text-lg text-md text-left long-text news-text' dangerouslySetInnerHTML={{__html: text.text}}></p>
                        <NavHashLink className='text-white md:text-lg text-md md:mt-4 mt-2 hover:underline hover:cursor-pointer flex items-center' to={`/news/${slug}#top`}><p className='mr-1.5'>Read more</p><FontAwesomeIcon icon={faAngleRight}/></NavHashLink>
                    </NavHashLink>
                ))}
                </>
                )}
            </div>
        </div>
    </section>
  )
}
