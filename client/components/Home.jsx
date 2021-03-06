import React from 'react'
import { Image } from 'semantic-ui-react'

export default function Home () {
  return (
    <>
      <div className="head-container">
        <h1>Auntie Dawn's Place - Hot Water Beach</h1>
      </div>
      <Image className='img' src='/img/top.jpg' size='huge' fluid bordered alt='Beach photo' />
      <br></br>
      <main className="content">
        <h2>Welcome to Auntie Dawns Place!</h2>
        <br></br>
        <p>
          Hot Water Beach is a beautiful surf beach. At low tide (searchable through 2025), hot water bubbles up at a particular place in the sand and you dig yourself a "hot pool" to bathe in. When the water is too hot, take a swim in the Pacific!
        </p>
        <p>
          Winter weather is unpredictable! You may find the reason NZ is nice and green - rain can fall; wind can blow & waves can get big! We have no control over nature!
        </p>
        <p>
          [Note: Life-guards are on duty only during the peak (summer) season when swimming should be between the flags at ALL times, "the possibility of strong ocean currents" should be taken into account.]
        </p>
        <div>
        </div>
      </main>
    </>
  )
}
