import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './JustIn.module.css'
import Product from './JustInData';


export default function JustIn() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    const settings = {
        infinite: true,
        speed: 200,
        cssEase: 'linear'
    }

    const hotelCards = [

        {
            id: 1,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FVineeta_s-Favourite-Makeup-kit---WBG-images_Cover.jpg%3Fv%3D1676477676&w=256&q=75',
            title: 'No Makeup',
            pricingText: 'Rs 1559',

        },
        {
            id: 2,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FNude-Hero-Product-Kit---WBG.jpg%3Fv%3D1685629402&w=256&q=75',
            title: 'Nude Edition',
            pricingText: 'Rs 1499',

        },
        {
            id: 3,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F502745939-wedding-kit-by-tamannaah-wbg-images_1.jpg%3Fv%3D1685629353&w=256&q=75',
            title: 'Wedding Makeup',
            pricingText: 'Rs 3499',

        },
        {
            id: 4,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F503159402-blacklash-volumizing-mascara-1080x10801.jpg%3Fv%3D1684925279&w=256&q=75',
            title: 'BlackLash',
            pricingText: 'Rs 459',
        },
        {
            id: 5,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F499687449-try-buy-kit-wbg-cover-image.jpg%3Fv%3D1685629295&w=256&q=75',
            title: 'Royal Suite',
            pricingText: 'Rs 729',
        },
        {
            id: 6,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FParent-Image.jpg%3Fv%3D1685634905&w=256&q=75',
            title: 'Royal Suite',
            pricingText: 'Rs 859',
        },
        {
            id: 7,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FParent-Image.jpg%3Fv%3D1685634905&w=256&q=75',
            title: 'Royal Suite',
            pricingText: 'Rs 359',

        },
        {
            id: 8,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F494339348-summer-beauty-kit.jpg%3Fv%3D1682950346&w=256&q=75',
            title: 'Royal Suite',
            pricingText: 'Rs 699',
            // 
        },
        {
            id: 9,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F494315527-summer-kit-1299-pd-wbg1.jpg%3Fv%3D1683181047&w=256&q=75',
            title: 'Royal Suite',
            pricingText: 'Rs 1199',
            // 
        },
        {
            id: 10,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FParent-Page_ac0201bb-8f51-447c-b6e0-4404786076a2.jpg%3Fv%3D1680364145&w=256&q=75',
            title: 'Royal Suite',
            pricingText: 'Rs 359',
            // 
        },
        {
            id: 11,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fparent1stcard_72b70805-09e4-4898-a80e-3b71958cfe64.jpg%3Fv%3D1682949781&w=256&q=75',
            title: 'Royal Suite',
            pricingText: 'Rs 899',
            // 
        },
        {
            id: 12,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FSUGAR-Prime-Sublime-Primer---Powered-By-Images1_ebe7ea59-dff5-4a2a-9a70-c94435d3f46e.jpg%3Fv%3D1666928973&w=256&q=75',
            title: 'Royal Suite',
            pricingText: 'Rs 399',
            // 
        },
    ]


    const products = hotelCards.map((item) => (
        <Product
            image={item.imageSrc}
            title={item.title}
            pricingText={item.pricingText}
        />
    ))
    return (
        <div className={styles.cards}>
            <div className={styles.heading}>
                <h1 className={styles.text} >JUST IN</h1>
            </div>
            <div className={styles.images}>
                <Carousel responsive={responsive} {...settings} >
                    {products}
                </Carousel>;
            </div>


        </div>
    )
}
