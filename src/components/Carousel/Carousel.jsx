import React, {useRef, useState} from 'react';
import arrow from "../../assets/icons/arrow.svg"

function Carousel({images}) {
  const container = useRef()
  const [position, setPosition] = useState(0);
  const [counter, setCounter] = useState(0);

  const handleMovement = (position, counter) => {
    setPosition(position)
    setCounter(counter)
    container.current.style.transform = `translateX(${position}%)`
    console.log("dad");
  }
  
  return (
    <div className='carousel__wrapper'>
      {counter > 0 && <button className='btn-orange carousel__btn carousel__btn--prev' onClick={() => handleMovement(position + 100, counter - 1)}><img src={arrow} alt='arrow.svg'/></button>}
      <div className='carousel__container' ref={container}>
        {images.map((image) => {
          return (
            <img className='carousel__img' key={image.id} src={image.img} alt="" />
          )
        })}
      </div>
      {counter < images.length / 3 - 1 && <button className='btn-orange carousel__btn carousel__btn--next' onClick={() => handleMovement(position - 100, counter + 1)}><img src={arrow} alt='arrow.svg'/></button>}
    </div>
  )
}

export default Carousel