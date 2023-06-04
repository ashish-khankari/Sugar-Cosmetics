import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './NewlyLaunched.module.css'


export default function NewlyLaunched() {
    const HotDealsImages = [
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F67c43762-e56b-4b5c-941e-bc3cbe72fbba.gif&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fd6b30466-0027-4a49-999c-1430a9e00ea2.gif&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F927e5f3e-64c4-4105-b315-0882d6c07f64.jpg&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F562fe539-20b1-4239-903e-9a27747b8bf0.gif&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F7a6f082b-d4ba-4b93-93b7-aa79cc63d877.jpg&w=1920&q=75"
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
            items: 1
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
            <h1 className={styles.text}>Newly Launched</h1>

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
