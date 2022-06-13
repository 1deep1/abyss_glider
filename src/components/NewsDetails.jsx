import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet"
import { useParams } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { gql } from '@apollo/client'
import client from './apolloClient'

export default function NewsDetails() {
  const params = useParams();
  const slug = params.newsId;
  const [newsData, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await client.query({
        query: gql`
        {
          news(where: {slug: "${slug}"}) {
            title
            slug
            date
            text {
              html
            }
            slider {
              url
            }
          }
        }
        `
      })
      setNews(data.data.news)
    };

    fetchNews();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
    <Helmet>
      <meta name="description" content="//NFT artists //Cyberpunk Fantasy story of the dying world //Crypto trading cards" />
      <meta name="keywords" content="abyssglider, nft, etherium, bitcoin, blockchain, cyberpunk, crypto, univers, drop, collection, cards" />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content="Abyss Glider - NFT" />
      <meta property="og:description" content="//NFT artists //Cyberpunk Fantasy story of the dying world //Crypto trading cards" />
      <meta property="og:image" content="https://abyssglider.su/logo512.png" />
      <meta property="og:url" content="https://abyssglider.su" />

      <meta name="twitter:title" content="Abyss Glider - NFT" />
      <meta name="twitter:description" content="//NFT artists //Cyberpunk Fantasy story of the dying world //Crypto trading cards" />
      <meta name="twitter:url" content="https://abyssglider.su/logo512.png" />
      <meta name="twitter:card" content="Cyberpunk Fantasy story of the dying world" />
    </Helmet>

    <section className="gallery_block bg-dark md:p-10 p-4">
      <div className="container bg-white bg-dark">
        <NavHashLink
            to={'/#news'}
            className="md:text-xl text-sm cursor-pointer bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 md:px-6 px-4 border border-white hover:border-transparent rounded"
            >Back</NavHashLink>
        {!newsData ? (
          <>
          <h2 className='pixel_font text-white lg:text-5xl text-3xl mt-10'>Loading...</h2>
          <Helmet>
            <title>Loading...</title>
          </Helmet>
          </>
        ) : (
        <>
          <Helmet>
            <title>{newsData.title}</title>
          </Helmet>
          <h2 className='pixel_font text-white lg:text-5xl text-3xl mt-10'>{newsData.title}</h2>
          <p className='twitter_color_gray md:text-lg text-xs text-left mb-5'><FontAwesomeIcon icon={faClock}/> {newsData.date}</p>
          {newsData.slider.length == 0 ? (
          ''
          ) : (
            <Slider {...settings} className="md:my-10 md:mx-6 my-5 mx-1">
              {newsData.slider.map(({ url }) => (
                <div className="slider-img">
                  <img src={url} className="d-block max-w-full" />
                </div>
              ))}
            </Slider>
          )}
          <div className='flex flex-col twitter_color_black py-5 md:px-8 px-6 rounded-3xl'>
            <p className='text-white md:text-lg text-md text-left news-text' dangerouslySetInnerHTML={{__html: newsData.text.html}}></p>
          </div>
        </>
      )}
      </div>
    </section>
    </>
  )
}