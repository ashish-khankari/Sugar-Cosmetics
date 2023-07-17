import React from 'react'
import styles from './ThisOrThat.module.css'

export default function ThisOrThat() {
    return (
        <div className={styles.ThisOrThat}>
            <div className={styles.ThisOrThatText}>
                <h1>THIS OR THAT</h1>
            </div>
            <div className={styles.ThisOrThatImages}>
                <img src='https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fe8330ff8-91e2-49d4-b779-7cacc3b377e8.jpg&w=1920&q=75' className={styles.Images} />
                <img src='https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fde0740e2-ebdc-426b-b3eb-f6c8011995d6.jpg&w=1920&q=75' className={styles.Images} />
            </div>
        </div>
    )
}
