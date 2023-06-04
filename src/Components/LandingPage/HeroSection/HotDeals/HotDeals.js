import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './HotDeals.module.css'


export default function HotDeals() {
    const HotDealsImages = [
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F5be86440-bf1e-4ef0-a5e7-444dbcab1f15.jpg&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F43543293-8fcb-41c9-9f2f-e4300a05bf54.jpg&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F7cf99d84-b598-43d9-8346-6017d5019da9.jpg&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F0c2c52dd-b711-4534-a385-2e01855f03c2.gif&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc5f21f3a-1b28-4ad2-9fca-32286e4bc01b.jpg&w=1920&q=75"
    ]

    const settings = {
            infinite: true,
            speed: 500,
            // autoplay: true, 
            // autoplaySpeed: 2000, 
            // fade: true, 

    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 900, min: 600 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const products = HotDealsImages.map(item=>(
        <img className={styles.images} src={item}/>
    ))
    return (
        <div className={styles.productImages}>
            <div className={styles.heading}>
            <h1 className={styles.text}>HOT DEALS</h1>

            </div>
            <Carousel
               {...settings} 
               responsive={responsive}
            >
                {products}
            </Carousel>;

        </div>
    )
}
