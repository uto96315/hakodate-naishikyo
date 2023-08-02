/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickArea: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
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

    const imgs = ["/slickMock01.jpg", "/slickMock02.jpg"];

    return (
        <div className='h-1/3 px-20'>
            <Slider {...settings}>
                {imgs.map((img, index) => (
                    <div key={index} className=''>
                        <img
                            src={img}
                            alt={`スライド画像${index + 1}枚目`}
                            className='mx-auto rounded-xl shadow-sm'
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SlickArea;
