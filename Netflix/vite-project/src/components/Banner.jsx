import React from 'react'
import { BASE_URL } from '../App'
import './Banner.css'

function Banner({ img, title, description }) {
    return (
        <div className='banner--view'>
            <img src={BASE_URL + img} />
            <div className='banner--about'>
                <h1>{title}</h1>
                <p>{description}</p>
                <div>


                    <button>play</button>
                    <button>more info</button>
                </div>
            </div>


        </div>
    )
}


export default Banner