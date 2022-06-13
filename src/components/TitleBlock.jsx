import React from 'react'

export default function TitleBlock() {
  return (
    <section className="title_block">
        <div className="container flex items-center justify-center flex-col">
            <p className="pixel_font sm:text-7xl text-4xl text-center text-white mt-20 mb-8 uppercase">welcome<br/>aboard</p>
            <p className="text-center text-white text-4xl font-bold mb-20">The ship to our universe<br/>is leaving soon</p>
            {/* <a href="#" className="mint_btn sm:mt-28 mt-10 sm:text-4xl text-2xl bg-green-500 hover:bg-green-400 text-white font-bold py-8 px-10 border-b-4 border-green-700 hover:border-green-500 rounded">MINT</a> */}
            <div className="flex mb-8">
              <a className='text-white text-xl font-semibold flex items-center twitter_color rounded-lg px-4 py-2 hover:brightness-75 mr-5' href="https://twitter.com/AbyssGliders" target="_blank" rel="noreferrer">
                <span>
                  <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 mr-2"
                      preserveAspectRatio="xMidYMin slice"
                      fill="white"
                      viewBox="0 0 112 112"
                      stroke="currentColor"
                      strokeWidth={0}
                      x="0"
                      y="0"
                  >
                      <path 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M92.2,38.2c0,0.8,0,1.6,0,2.3c0,24.3-18.6,52.4-52.6,52.4c-10.6,0.1-20.2-2.9-28.5-8.2
                      c1.4,0.2,2.9,0.2,4.4,0.2c8.7,0,16.7-2.9,23-7.9c-8.1-0.2-14.9-5.5-17.3-12.8c1.1,0.2,2.4,0.2,3.4,0.2c1.6,0,3.3-0.2,4.8-0.7
                      c-8.4-1.6-14.9-9.2-14.9-18c0-0.2,0-0.2,0-0.2c2.5,1.4,5.4,2.2,8.4,2.3c-5-3.3-8.3-8.9-8.3-15.4c0-3.4,1-6.5,2.5-9.2
                      c9.1,11.1,22.7,18.5,38,19.2c-0.2-1.4-0.4-2.8-0.4-4.3c0.1-10,8.3-18.2,18.5-18.2c5.4,0,10.1,2.2,13.5,5.7c4.3-0.8,8.1-2.3,11.7-4.5
                      c-1.4,4.3-4.3,7.9-8.1,10.1c3.7-0.4,7.3-1.4,10.6-2.9C98.9,32.3,95.7,35.5,92.2,38.2z"
                  />
                  </svg>
              </span>
              Twitter</a>
              <a className='text-white text-xl font-semibold flex items-center discord_color rounded-lg px-4 py-2 hover:brightness-75' href="https://discord.gg/dGU9mWfEDz" target="_blank" rel="noreferrer">
              <span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 mr-2"
                    preserveAspectRatio="xMidYMid"
                    fill="white"
                    viewBox="0 -28.5 256 256"
                    stroke="currentColor"
                    strokeWidth={0}
                    x="0"
                    y="0"
                >
                    <path 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill-rule="nonzero"
                    d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                />
                </svg>
              </span>
              Discord</a>
            </div>
        </div>
    </section>
  )
}
