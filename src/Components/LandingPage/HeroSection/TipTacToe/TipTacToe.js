import React from 'react'
import styles from './TipTacToe.module.css'
export default function TipTacToe() {
  return (
    <div className={styles.TipTacToe}>
      <h1 className={styles.TipTacToeText}>TIP TAC TOE NAIL LACQUER CLASSIC</h1>
      <img src='https://d32baadbbpueqt.cloudfront.net/Homepage/0991b9ef-ef8c-4983-b066-c14c127e91c1.gif' className={styles.TipTacToeImage}/>
    </div>
  )
}
