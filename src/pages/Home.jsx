import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import img1 from "../assets/images/img-1.jpg"
import img2 from "../assets/images/img-2.jpg"
import img3 from "../assets/images/img-3.jpg"
import img4 from "../assets/images/img-4.jpg"
import img5 from "../assets/images/img-5.jpg"
import img6 from "../assets/images/img-6.jpg"

function Home() {
  return (
    <main className='home'>
      <Carousel 
        images={[
          {id: 1, img: img1},
          {id: 2, img: img2},
          {id: 3, img: img3},
          {id: 4, img: img4},
          {id: 5, img: img5},
          {id: 7, img: img6},
          {id: 8, img: img6},
          {id: 9, img: img6},
          {id: 10, img: img6},
          {id: 11, img: img6},
          {id: 12, img: img6},
          {id: 13, img: img4},
          {id: 13, img: img4},
          {id: 13, img: img4},
          {id: 13, img: img4},
          {id: 13, img: img4},
        ]}
      />
    </main>
  )
}

export default Home