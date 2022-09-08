import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image'; 
import styles from '../styles/Projects.module.css';

import MyDevLogo from '../public/graphics/logos/dev_logo.png';
import EtchASketchSVG from '../public/graphics/images/project-thumnbnails/etchasketch.svg';
import FourWinsPNG from '../public/graphics/images/project-thumnbnails/Connect4_Wins.png';
import TicTacToePNG from '../public/graphics/images/project-thumnbnails/Tic_tac_toe.png';
import RockPaperScissorSVG from '../public/graphics/images/project-thumnbnails/rockpaperscissors.svg';

const Project_top: NextPage = () => {


  return (
    
    <div className={styles.container}>
      
      <Head>
        <title>My Portfolio || The Odin Project</title>
      </Head>

      <main className={styles.main}>

          {/* HEADLINE Section */}

          <section className={styles.headline_section}>

            <div className={styles.devlogo_wrapper}>
              <Image src={ MyDevLogo } className={styles.devlogo} />
            </div>

            <h1 className={styles.page_title}>the odin project</h1>

          </section>

          <p className={styles.intro}>
            <a href='http://www.theodinproject.com'>The Odin Project (TOP) </a>
            is an online curriculum to learn the basics of HTML, CSS (Flexbox, Grid, ...) Javascript, React,js, Node.js, etc... The focus is strongly on the self-acquired knowledge as well as applying the skills learned through project work. TOP personally helped me a lot to work my way into software-development and architecture. Here you will find selected works of mine: I have intentionally included simple projects to illustrate the learning experience. I highly recommend everyone who wants to learn software development or just enjoys solving tasks in the field of web technologies to take a closer look at this website.
            Hardest recommendation!
          </p>

          {/* Projects Section */}

          <section className={styles.projects}>

            {/* Etch-a-Sketch */}
            <div className={`${styles.project_container} ${styles.project_etch}`}>

              <div className={styles.project_text_wrapper}>
                <h2 className={styles.project_h2}>Etch - a - Sketch</h2>
                <p>Etch A Sketch™ is a variant of the magic board and was particularly popular as a toy in the 1970s. The project tries to imitate the original in such a way that it is cool to play and integrates some useful features such as a free choice of color or adjustable resolution. The project was a lot of fun in the development: Above all, dealing with CSS grid and event control with Javascript were particularly instructive !</p>
                <a className={styles.etch_a} href='https://stefanbartl.github.io/Etch-a-Sketch/' target='_blank' title='Click to jump to the project!'><h3>Try the magic board!</h3></a>
              </div>

              <div className={styles.project_img_wrapper}>
                <Image src={ EtchASketchSVG} />
              </div>

            </div>

            {/* 4-in-a-row */}
            <div className={`${styles.project_container} ${styles.project_fourwins}`}>

              <div className={styles.project_text_wrapper}>
                <h2 className={styles.project_h2}>4-IN-A-ROW</h2>
                <p>This was my first project for which I took the time to expand it comprehensively according to my ideas: As a user you can freely choose the size of the playing field, swap stone colors, statistics and settings such as name or language are saved, series games are possible, a winning animation is integrated and and and... In addition, it is responsive and you can also play it on mobile devices! All this required a very extensive examination of numerous front-end development topics. I would be very happy if you try it out - have fun !</p>
                <a className={styles.fourwins_a} href='https://stefanbartl.github.io/FourWins/' target='_blank' title='Click to jump to the project!'><h3>Wanna play a round 4-in-a-row ?</h3></a>
              </div>

              <div className={styles.project_img_wrapper}>
                <Image src={ FourWinsPNG } />
              </div>

            </div>

            {/* Tick-Tac-Toe */}
            <div className={`${styles.project_container} ${styles.project_tictactoe}`}>

              <div className={styles.project_text_wrapper}>
                <h2 className={styles.project_h2}>TIC-TAC-TOE</h2>
                <p>The world-famous 'Tic-Tac-Toe' is fun to play in almost every situation and is also a good boredom breaker. Making an online version required my first exposure to programming a gaming AI that - once done - didn't seem like a lame drunk at 3am. Due to the significantly smaller number of game options, it was a very good preparation for the '4-in-a-row' project, of which it is the little sister. Especially the less high complexity and the resulting faster game can often be attractive and just the right thing! Will you be able to beat the computer ?</p>
                <a className={styles.tictactoe_a} href='https://stefanbartl.github.io/Tic-Tac-Toe/' target='_blank' title='Click to jump to the project!'><h3>3-in-a-row is always worth it!</h3></a>
              </div>

              <div className={styles.project_img_wrapper}>
                <Image src={ TicTacToePNG } />
              </div>

            </div>

            {/* Rock-Paper-Scissor */}
            <div className={`${styles.project_container} ${styles.project_rps}`}>

              <div className={styles.project_text_wrapper}>
                <h2 className={styles.project_h2}>ROCK-PAPER-SCISSORS</h2>
                <p>Who doesn't know it? Popular with young and old - sometimes played for fun, but sometimes also to play something important! The programming itself was totally fun and exciting, a good random algorithm was the goal and was found. Do you want to know if you know more lucky than the machine in front of you ?</p>
                <a className={styles.rps_a} href='https://stefanbartl.github.io/Rock-Paper-Scissor/' target='_blank' title='Click to jump to the project!'><h3>Lets give it a try!</h3></a>
              </div>

              <div className={styles.project_img_wrapper}>
                <Image src={ RockPaperScissorSVG } />
              </div>

            </div>

          </section>

      </main>

    </div>
  )
};

export default Project_top
