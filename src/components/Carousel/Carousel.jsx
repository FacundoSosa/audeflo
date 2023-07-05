import React, {useRef, useState, useEffect} from 'react'

function Carousel({images}) {
  const container = useRef()
  const [position, setPosition] = useState(0);
  const [counter, setCounter] = useState(0);

  const handleMovement = (position, counter) => {
    setPosition(position)
    setCounter(counter)
  }
  
  useEffect(() => {
    container.current.style.transform = `translateX(${position}%)`
  }, [position, counter])
  

  return (
    <div className='carousel-wrapper'>
      <div className='carousel-container' ref={container}>
        {images.map((image) => {
          return (
            <img className='carousel-img' key={image.id} src={image.img} alt="" />
          )
        })}
      </div>
      <span>
        {counter > 0 && <button className='btn-orange' onClick={() => handleMovement(position + 100, counter - 1)}>Prev</button>}
        {counter < images.length && <button className='btn-orange' onClick={() => handleMovement(position - 100, counter + 1)}>Next</button>}
      </span>
    </div>
  )
}

export default Carousel