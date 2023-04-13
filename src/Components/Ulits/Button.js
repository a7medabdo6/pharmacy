import React from 'react'
import styles from '@/styles/ulits.module.css'

const Button = ({txtColor,bckColor,BRColor,text}) => {
  return (
    <div className={styles.btn} style={{backgroundColor:bckColor,marginBottom:"16px",borderRadius:"5px",border:`1px solid ${BRColor}`}}>
        <h5 style={{color:txtColor}}>{text}</h5>

    </div>
  )
}

export default Button