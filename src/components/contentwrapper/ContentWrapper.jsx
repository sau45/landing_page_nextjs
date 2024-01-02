'use client'
import React from 'react'
import styles from './contentwrapper.module.css'

const ContentWrapper = ({ children }) => {
    return (
        <div className={styles.content_wrapper}>
            {children}
        </div>
    )
}

export default ContentWrapper
