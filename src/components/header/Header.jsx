
import React from 'react'
import styles from './header.module.css'
import jsondata from '../../assets/faithappjson.json'

const Header = () => {

    return (
        <>
            <div className={styles.header_img}>
                <div className={styles.header_content}>
                    {jsondata?.map((item) => (
                        <>
                            <h4>{item?.instructor?.name}</h4>
                            <h1>{item?.course?.title}</h1>
                        </>

                    ))}

                </div>
            </div>

        </>
    )
}

export default Header
