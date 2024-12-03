import './CardSlider.css'
import { BASE_URL } from '../App'
import React from 'react'
import { UseHover } from '../CustomHook/UseHover'




function CardSlider({ title, data }) {

    const [hoverRef, isHovered] = UseHover()

    return (
        <div className='cardSlider--view'>
            <h4>{title}</h4>



            <div className="show" ref={hoverRef}  >
                {isHovered ? "You did it" : " false!"}
                {data?.map((movieList) => (
                    <div key={movieList.id} className='slider'>
                        <img src={BASE_URL + movieList.poster_path} />
                    </div>
                ))}
            </div>





        </div>
    )
}

export default CardSlider









