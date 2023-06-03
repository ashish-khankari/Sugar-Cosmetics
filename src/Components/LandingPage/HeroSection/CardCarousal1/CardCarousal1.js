import React,{useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './CardCarousal1.module.css'

const images = [
 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F106a1a33-6429-4357-96a1-1117d5ead2eb.jpg&w=1920&q=75',
 "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Feb4bdbe1-75fe-4237-b5c9-22a74dc62713.gif&w=1920&q=75",
 "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fcd9aec57-0010-49f2-a903-47b581127743.gif&w=1920&q=75",
 "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F6d306690-b672-47b5-9e73-f9e1a1999b72.gif&w=1920&q=75",
 "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F91a12ff3-cfb5-44c4-b257-666018fe0263.jpg&w=1920&q=75",
 "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F00b45703-3828-491d-ad83-30e96135b966.gif&w=1920&q=75",
 "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9723d8e3-9e99-459f-acfe-4ef93089e9ef.jpg&w=1920&q=75",
 "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc4330bb4-0609-45f9-8f50-caa901712521.jpg&w=1920&q=75"

];

export default function CardCarousal1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true, 
    // autoplaySpeed: 2000, 
    // fade: true, 
    cssEase: 'linear'
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className={styles.sliderImage} src={image} alt={`Image`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

