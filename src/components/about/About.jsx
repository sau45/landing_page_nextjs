'use client'
import React from 'react'
import styles from './about.module.css'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import faithdata from '../../assets/faithappjson.json'

const About = () => {
    const textStyle = {
        color: "black", fontWeight: "700"
    }
    return (
        <ContentWrapper>
            <div className={styles.about_container}>
                {faithdata?.map((item, index) => (
                    <div key={index} className={styles.sub_container}>
                        <div className={styles.about_description}>
                            <div className={styles.three_route_button_type}>
                                <p>about</p>
                                <p>instructor</p>
                                <p>review</p>
                            </div>
                            <div className={styles.about_the_course}>
                                <h1>About the course</h1>
                                <p>{item?.about_course?.html_content}</p>
                                {" "}
                                <p>{item?.about_course?.html_content}</p>
                                {" "}
                                <p>{item?.about_course?.html_content}</p>
                            </div>
                            <div className={styles.what_to_expect}>
                                <h1>What to expect from the course</h1>
                                <ol>
                                    <li>{item?.course?.what_to_expect?.manage_relationship}</li>
                                    <li>{item?.course?.what_to_expect?.better_communication}</li>
                                    <li>{item?.course?.what_to_expect?.time_management}</li>
                                    <li>{item?.course?.what_to_expect?.Forgiveness}</li>
                                </ol>
                            </div>
                            <div className={styles.key_topic_covered}>
                                <h1>key topics covered</h1>
                                <p>{item?.course?.key_topics?.topic_text}</p>
                                <ol>
                                    <li> <span className={styles.text_style}>10 written and audio sessions</span>{item?.course?.key_topics?.written_audio}</li>
                                    {" "}
                                    <li> <span className={styles.text_style}>Intuitive exercises and homework </span>{item?.course?.key_topics?.intutive_exercise}</li>
                                    {" "}
                                    <li> <span className={styles.text_style}>Handy reference</span>{item?.course?.key_topics?.handy_reference}</li>
                                    {" "}
                                    <li><span className={styles.text_style}>Expert techniques</span>{item?.course?.key_topics?.expert_technique}</li>

                                </ol>
                            </div>
                        </div>
                        <div className={styles.course_fee_card}></div>
                    </div>
                ))}
            </div>
        </ContentWrapper>
    )
}

export default About
