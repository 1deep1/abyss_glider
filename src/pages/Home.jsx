import React from 'react'
import { Helmet } from "react-helmet"
import { YMInitializer } from 'react-yandex-metrika'

import TitleBlock from '../components/TitleBlock'
import AboutBlock from '../components/AboutBlock'
import TeamBlock from '../components/TeamBlock'
import GalleryBlock from '../components/GalleryBlock'
import RoadmapBlock from '../components/RoadmapBlock'
import NewsBlock from '../components/NewsBlock'

export default function Home() {
  return (
    <>
    <Helmet>
        <title>Home</title>
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

        <YMInitializer accounts={[88957218]} options={{webvisor: true}} version="2" />
    </Helmet>
    <div>
        <TitleBlock/>
        <AboutBlock/>
        <TeamBlock/>
        <GalleryBlock/>
        <RoadmapBlock/>
        <NewsBlock/>
    </div>
    </>
  )
}
