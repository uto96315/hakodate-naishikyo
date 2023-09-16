/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
    imgsUrl: string[];
}

const SlickArea: React.FC<Props> = ({imgsUrl}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "0px",
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        appendDots: (dots: React.ReactNode) => (
            <div style={{ position: "relative", bottom: "10px" }}>
                <ul
                    style={{ margin: "0px", padding: "0px", position: "absolute", bottom: "0", textAlign: "center", width: "100%", color: "#FFFF" }}
                >
                    {dots}
                </ul>
            </div>
        ),
    };


    return (
        <div className='md:px-20 mt-16 md:mt-24'>
            <Slider {...settings}>
                {imgsUrl.map((img, index) => (
                    <div key={index} className=''>
                        <img
                            src={img}
                            alt={`スライド画像${index + 1}枚目`}
                            className='mx-auto md:rounded-xl shadow-sm'
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SlickArea;
