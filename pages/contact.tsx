import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Contact.module.css';

import facebookSVG from '../public/graphics/logos/web_plattforms/facebook-original.svg';
import githubSVG from '../public/graphics/logos/web_plattforms/github-original.svg';
import instagramSVG from '../public/graphics/logos/web_plattforms/instagram.svg';
import linkedinSVG from '../public/graphics/logos/web_plattforms/linkedin.svg';
import twitterSVG from '../public/graphics/logos/web_plattforms/twitter-original.svg';
import youtubeSVG from '../public/graphics/logos/web_plattforms/youtube.svg';

import { SendEmail } from '../components/SendEmail';

const Contact: NextPage = () => {

  return (
    
    <div className={styles.container}>
      
      <Head>
        <title>My Portfolio || Contact </title>
      </Head>


      <main className={styles.main}>
        <h1>Contact me here</h1>

        <section className={styles.social_media_section} >

           <h2>| on social media |</h2>
           <div className={styles.social_media_container}>

              <div className={`${styles.social_media_logo_wrapper} ${styles.instagramSVG_wrapper}`}>
                <a href='https://www.instagram.com/_steve_vie/' target='_blank'><Image src={ instagramSVG } className={`${styles.social_media} ${styles.instagramSVG}`} /></a>
              </div>

              <div className={`${styles.social_media_logo_wrapper} ${styles.facebookSVG_wrapper}`}>
                <a href='https://www.facebook.com/barstevie/' target='_blank'><Image src={ facebookSVG } className={`${styles.social_media} ${styles.facebookSVG}`} /></a>
              </div>

              <div className={`${styles.social_media_logo_wrapper} ${styles.githubSVG_wrapper}`}>
                <a href='https://github.com/wkddevelopment' target='_blank'><Image src={ githubSVG } className={`${styles.social_media} ${styles.githubSVG}`} /></a>
              </div>

              <div className={`${styles.social_media_logo_wrapper} ${styles.linkedinSVG_wrapper}`}>
                <a href='https://www.linkedin.com/in/stefan-bartl-660556112/' target='_blank'><Image src={ linkedinSVG } className={`${styles.social_media} ${styles.linkedinSVG}`} /></a>
              </div>

              <div className={`${styles.social_media_logo_wrapper} ${styles.twitterSVG_wrapper}`}>
                <a href='https://twitter.com/stevVIEsprotest/' target='_blank'><Image src={ twitterSVG } className={`${styles.social_media} ${styles.twitterSVG}`} /></a>
              </div>

              <div className={`${styles.social_media_logo_wrapper} ${styles.youtubeSVG_wrapper}`}>
                <a href='https://www.youtube.com/channel/UCVUfjupaBJzqm4JfgWllumQ/about' target='_blank'><Image src={ youtubeSVG } className={`${styles.social_media} ${styles.youtubeSVG}`} /></a>
              </div>

           </div>

        </section>
        



        <section className={styles.send_email_section}>

          <h2>| the best way to contact me is via email |</h2>
          <div className={styles.send_email_form_wrapper} >
            <SendEmail />
          </div>

        </section>



      </main>

    </div>
  )
};

export default Contact
