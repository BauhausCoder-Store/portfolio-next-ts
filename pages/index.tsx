import type { NextPage } from 'next'
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Image from 'next/image'; 
import MyDevLogo from '../public/graphics/logos/dev_logo.png';
import MyPortrait from '../public/graphics/images/@me/sb_bank.jpg';

const Home: NextPage = () => {


  return (
    
    <div className={styles.container}>
      
      <Head>
        <title>My Portfolio || Stefan Bartl (WKDStevie) !(Alpha)!</title>
      </Head>


      <main className={styles.main}>

        {/* HEADLINE Section */}

        <section className={styles.headline_section}>

            <div className={styles.devlogo_wrapper}>
              <Image src={ MyDevLogo } className={styles.devlogo} />
            </div>

            <h1 className={styles.page_title}>front-end. web-development</h1>

        </section>

        {/* Introduction Section */}

        <section className={styles.introduction_section}> 



          <div className={styles.introduction_img_wrapper}>
            <Image src={ MyPortrait } className={styles.introduction_img}/>
          </div>

          <div className={styles.introduction_text_wrapper}>

          <div className={styles.introduction_headline}>
            <h2 className={styles.introduction_headline_2h1}><strong>Welcome, </strong> my name is Stefan.</h2>
            <h2 className={styles.introduction_headline_2h2}>I <strong>craft web applications.</strong></h2>
          </div>

            <h3 className={styles.introduction_first_h3} >PURE ENTHUSIASM</h3>
            <p className={styles.introduction_first_p} >On this portfolio webpage I give an insight into completed & solid web development projects. When I started programming in 2020, I could not have imagined how much fun and passion this broad field would unleash in me. Always looking for new challenges and their solution, web development for me is enthusiasm for technology supported of ambition and passion.</p>
            <h3 className={styles.introduction_second_h3} >HTML, SCSS, React, Next.js, TYPESCRIPT...</h3>
            <p className={styles.introduction_second_p} >Currently i have a strong focus on the 3 areas HTML, CSS & Javascript, specializing in front-end web-development. Therefore you will only find projects that deal with these three 'tools' - partly playful, partly with practical use.</p>
            <h3 className={styles.introduction_text_statement} >WITH LOVE FOR SCIENCE, TECHNOLOGY AND PEACE!</h3>
          </div>


        </section>


      </main>

    </div>
  )
  
};

export default Home
