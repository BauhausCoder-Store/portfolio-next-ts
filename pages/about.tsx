import type { NextPage } from 'next';
import Image from 'next/image'; 
import Head from 'next/head';
import styles from '../styles/About.module.css';

import MyDevLogo from '../public/graphics/logos/dev_logo.png';
import MySignature from '../public/graphics/images/@me/unterschrift_transparent.png';
import EuropeMap from '../public/graphics/images/google_maps_europa_edited.png';
import MeDonaumarina from '../public/graphics/images/@me/sb_donaumarina.jpg';

const About: NextPage = () => {

  return (
    
    <div className={styles.container}>
      
      <Head>
        <title>My Portfolio || About </title>
      </Head>


      <main className={styles.main}>

          {/* HEADLINE Section */}

          <section className={styles.headline_section}>

              <div className={styles.devlogo_wrapper}>
                <Image src={ MyDevLogo } className={styles.devlogo} />
              </div>

              <h1 className={styles.page_title}>about me. and this site</h1>

            </section>

          {/* Content (Section */}

            <section className={styles.about_content}>

              {/* Content (left) Section */}

              <div className={styles.about_text_container}>

                <h2>Portfolio</h2>
                <p>This webpage is designed as a portfolio for my web development projects. It should provide an overview of my skills in the areas of HTML, CSS, Javascript & Design and also serve as a learning curve archive for myself. Please note that I do not expand older projects with newly learned skills, but - if useful - make a new project out of it. I hope you enjoy my work !</p>

                <h2>Thanks</h2>
                <p>On my Github repository you can find a readme file with all the collectives, artists, developers, companies, etc... without it I wouldn't have become a web developer. On behalf of everyone, I would like to refer to the 'Odin project' (https://www.theodinproject.com/), which I can highly recommend for all beginners, but also for more experienced web developers. In the area of ​​CSS, I would like to recommend all web content by Kevin Powell (https://www.youtube.com/kepowob), whose videos and courses have helped me a lot. Finally, I would like to say a big and heartfelt thank you to my friends and family, who always support me in my interests and motivate me new.{"\n"}
                    Thank you all from the bottom of my heart !</p>

              </div>

              {/* Content (right) Section */}

              <div className={styles.about_map_container}>
                
                  <div className={styles.about_map_wrapper}>
                    <Image src={ EuropeMap } />
                  </div>

                  <div className={styles.about_me_img_wrapper} >
                    <Image src={ MeDonaumarina } />
                  </div>

                  <div className={styles.about_me_final_text}>

                    <h2>To my person</h2>
                    <p>Stefan Bartl, born in St.Pölten in 1990, lives in Vienna, Austria. Always interested in technology, my first job ended up in the construction industry. I completed an apprenticeship as a bricklayer/formwork builder and completed it with distinction. After 6 years I switched to the Austrian Trade Union Confederation to realize my socio-political interests and to do something good for those people who often cannot do it themselves and are politically underrepresented. As a trade unionist, I have been able to accumulate several years of management experience, numerous training courses, skills and abilities in the areas of rhetoric, group dynamics, personnel management, event management, budget policy, business and economics, political economy, etc. Since 2021 I have been filling all my free time with courses and my own further education in the field of web development. Since then I've been gripped by the 'programmer' fever and I'm totally absorbed in this challenging, creative and beautiful job.</p> 

                  </div>

              </div>

            </section>

            <section className={styles.about_outro}>

                <h3>In short, the following three and a half words describe me: science, tech & peace(-politics) !</h3>

                <div className={styles.about_signature} >
                  <Image src={ MySignature } />
                </div> 
            
            </section>

      </main>

    </div>
  )
};

export default About
