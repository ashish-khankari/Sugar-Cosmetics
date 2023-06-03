import React, { useRef } from 'react';
import styles from './BestSeller.module.css';
import { hotelCards } from './BestSellerData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineHeart } from 'react-icons/ai'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function BestSeller() {
    const ref = useRef();

    const sliderSettings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
    };

    return (
        <div className={styles.container}>
            <h1>Best Sellers</h1>
            <div className='controls'>
                <button onClick={() => ref.current.slickPrev()}>
                    <FaChevronLeft />
                </button>
                <button onClick={() => ref.current.slickNext()}>
                    <FaChevronRight />
                </button>
            </div>

            <Slider ref={ref} {...sliderSettings} >
                {hotelCards.map((card, index) => (
                    <ul>
                        <li key={index} className={styles.cardDesign} >
                            <h2 className={styles.title}>{card.title}</h2>
                            <img alt={card.title} src={card.imageSrc} className={styles.images} />
                            <p>{card.description}</p>
                            <AiOutlineHeart />
                            <button className='btn'>Add to WishList</button>
                        </li>
                    </ul>

                ))}
            </Slider>
        </div>
    );
}
