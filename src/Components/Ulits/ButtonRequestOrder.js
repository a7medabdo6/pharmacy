import React from 'react'
import styles from '@/styles/ulits.module.css'

const ButtonRequestOrder = ({txtColor,bckColor,BRColor,text}) => {
  return (
    <div className={styles.ButtonRequestOrder} style={{backgroundColor:bckColor,marginBottom:"16px",borderRadius:"5px",border:`1px solid ${BRColor}`}}>
        <h5 className={styles.textBtnTrack} style={{color:txtColor}}>{text}</h5>

    </div>
  )
}


export default ButtonRequestOrder