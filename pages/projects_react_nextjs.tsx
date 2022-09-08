import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image'; 
import styles from '../styles/Projects.module.css';

import MyDevLogo from '../public/graphics/logos/dev_logo.png';
import MemoryCardPNG from '../public/graphics/images/project-thumnbnails/mmcardgame.png';

const Projects_react_nextjs: NextPage = () => {


  return (
    
    <div className={styles.container}>
      
      <Head>
        <title>My Portfolio || React / Next.js Projects</title>
      </Head>

      <main className={styles.main}>

          {/* HEADLINE Section */}

          <section className={styles.headline_section}>

            <div className={styles.devlogo_wrapper}>
              <Image src={ MyDevLogo } className={styles.devlogo} />
            </div>

            <h1 className={styles.page_title}>React / Next.js Projects</h1>

          </section>

          <p className={styles.intro}>
            Since 2022, i.e. after I got involved in web frontend and Javascript development, I started to deal intensively with baking. In the world of server-side development, countless possibilities and projects open up. Hosting, databases, Internet infrastructure, hacking or file systems are some of the terms that are involved here.
            Since I like working with React and Next.js, I have specialized in these technologies.
            Selected projects are presented here.
          </p>

          {/* Projects Section */}

          <section className={styles.projects}>

            {/* Etch-a-Sketch */}
            <div className={`${styles.project_container} ${styles.project_mmcardgame}`}>

              <div className={styles.project_text_wrapper}>
                <h2 className={styles.project_h2}>Memory-Card Memo Game</h2>
                <p>Memorize 10 cards as quickly as possible! Click on them one after the other as quickly as possible, but not twice - then you start over! My first real React project!</p>
                <a className={styles.mmcardgame} href='https://stefanbartl.github.io/react-mmcardgame/' target='_blank' title='Click to jump to the project!'><h3>3, 2, 1 - remember and click!</h3></a>
              </div>

              <div className={styles.project_img_wrapper}>
                <Image src={ MemoryCardPNG } />
              </div>

            </div>

          </section>

      </main>

    </div>
  )
};

export default Projects_react_nextjs
