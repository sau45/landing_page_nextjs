
'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './footer.module.css';
import faithdata from '../../assets/faithappjson.json'
import Lazyloader from '../lazyloader/Lazyloader';

const Footer = () => {



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={styles.main_container}>

            <div className={styles.carouselContainer}>
                <Slider {...settings}>
                    {faithdata[0]?.testimonial?.map((slide, index) => (
                        <div key={index} className={styles.slideContainer} >
                            <div className={styles.textContainer} key={index}>
                                <h2>{slide?.text}</h2>
                                <div className={styles.img_and_text}>
                                    < Lazyloader src={slide?.crousel_img} alt="crousel_img" />
                                    <div className={styles.crousel_text}>
                                        <p>{slide?.reviewer_name}</p>
                                        <p>{slide?.reviewer_designation}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Footer;
