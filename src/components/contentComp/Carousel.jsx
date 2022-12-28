import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import './Carousel.css'



export default function Carousel(props) {

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            let res = await axios.get('http://localhost:5000/1')
            let data = await res.data;
            setData(data[0].results);
        }

        getData();
    }, [])



    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
    };
    return (
        <>
            <div className='mx-auto' style={{ width: "93%",minHeight:"50vh" }}>
                <p className='mb-2' style={{fontSize:'1.2rem'}}>{props.title}</p>
                <Slider {...settings}>

                    {
                        data.map((res, key) => {

                            
                            return (
                                <div className='mt-2' key={key}>
                                    <img alt='movieimg' src={res.imageurl[0]===undefined || res.imageurl[0]===" "?'https://m.media-amazon.com/images/M/MV5BYjE2MjIwMmYtM2ZiMy00MzdmLTkyNTYtNmFiNjM5MDJhMGVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg':res.imageurl[0]} />
                                    <p>{res.title}</p>
                                </div>
                            )
                        })
                    }

                </Slider>
            </div>
        </>
    )
}
