import React from 'react';
import styles from './aboutinstructor.module.css';
import faithdata from '../../assets/faithappjson.json';
import ContentWrapper from '../contentwrapper/ContentWrapper';
import Lazyloader from '../lazyloader/Lazyloader';


const AboutInstructor = () => {
    const instructorData = faithdata[0]; // Assuming the data is an array with a single object

    return (
        <ContentWrapper>

            <div className={styles.about_instructor_container}>
                <h1>About the Instructor</h1>
                <div className={styles.sub_about_instructor} >
                    <Lazyloader src={instructorData?.about_instructor[0]?.instructor_img} alt="instruction_img" className={styles.roundImage} />
                    {instructorData?.about_instructor?.map((item, index) => (
                        <>
                            <div className={styles.content}>
                                <div className={styles.content_text}>
                                    <p>{item?.html_content}</p>
                                </div>
                                <div className={styles.img}>
                                    {item?.facebook_url && <p><Lazyloader src={item?.facebook_url} alt="Facebook" /> Facebook</p>}
                                    {item?.twitter_url && <p><Lazyloader src={item?.twitter_url} alt="Twitter" /> Twitter</p>}
                                    {item?.youtube_url && <p><Lazyloader src={item?.youtube_url} alt="YouTube" /> YouTube</p>}
                                    {item?.insta_url && <p><Lazyloader src={item?.insta_url} alt="Instagram" /> Instagram</p>}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </ContentWrapper>
    );
};

export default AboutInstructor;
