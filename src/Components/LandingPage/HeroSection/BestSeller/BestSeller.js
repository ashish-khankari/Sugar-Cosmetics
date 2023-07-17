import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './BestSeller.module.css'
import Product from './BestSellerData';


export default function Slider() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fa_00b52826-78d8-4da0-aba1-fbcbfb39dc33.jpg%3Fv%3D1685689751&w=256&q=75',
            title: 'LA LA LOVE',
            pricingText: 'Rs 899',

        },
        {
            id: 2,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FParent-Page_ac0201bb-8f51-447c-b6e0-4404786076a2.jpg%3Fv%3D1680364145&w=256&q=75',
            title: 'Deluxe Room',
            pricingText: 'Rs 849',

        },
        {
            id: 3,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FBaseOfGloryPoreMinimizingPrimerPDPimages1copy.jpg%3Fv%3D1682956017&w=256&q=75',
            title: 'King Deluxe Room',
            pricingText: 'Rs 629',

        },
        {
            id: 4,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FWBG1_09f0cf83-792a-4185-8882-5e5e6909a459.jpg%3Fv%3D1657814596&w=256&q=75',
            title: 'Royal Suite',
            pricingText: 'Rs 459',
        },
        {
            id: 5,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F07_6fa35950-4830-4e97-80ea-d40f2fb42801.jpg%3Fv%3D1680622820&w=256&q=75',
            title: 'Royal Suite',
            pricingText: 'Rs 729',
        },
        {
            id: 6,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg%3Fv%3D1657123108&w=256&q=75',
            title: 'Royal Suite',
            pricingText: 'Rs 859',
        },
        {
            id: 7,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FMatteAttackTransferproofLipstickPDPimagesFinalparent1stcard.jpg%3Fv%3D1682957359&w=256&q=75',
            title: 'Royal Suite',
            pricingText: 'Rs 359',

        },
        {
            id: 8,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F3_7.jpg%3Fv%3D1626795160&w=256&q=75',
            title: 'Royal Suite',
            pricingText: 'Rs 699',
            // 
        },
        {
            id: 9,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FKohl-Of-Honour-Intense-Kajal-PDP-images-Parent-page.jpg%3Fv%3D1679673305&w=256&q=75',
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
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_bec48e26-bd4f-4b25-9a65-742f14ce4955.jpg%3Fv%3D1671604434&w=256&q=75',
            title: 'Royal Suite',
            pricingText: 'Rs 899',
            // 
        },
        {
            id: 12,
            imageSrc:
                'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-drop-the-base-serum-foundation-10959991767123.jpg%3Fv%3D1619107852&w=256&q=75',
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
                <h1 className={styles.text} >BEST SELLERS</h1>
            </div>
            <Carousel responsive={responsive} {...settings} >
                {products}
            </Carousel>;

        </div>
    )
}
