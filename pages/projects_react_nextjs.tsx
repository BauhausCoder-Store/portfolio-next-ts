import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Projects.module.css';

import MyDevLogo from '../public/graphics/logos/dev_logo.png';
import MemoryCardPNG from '../public/graphics/images/project-thumnbnails/mmcardgame.png';

const Projects_react_nextjs: NextPage = () => {

  const { t, lang } = useTranslation('common');
  const head_title = t('projects_nextjs_head_title');
  const page_title = t('projects_nextjs_page_title');
  const intro = t('projects_nextjs_intro');
  const mmcardgame_project_h2 = t('projects_nextjs_mmcardgame_project_h2');
  const mmcardgame_project_p = t('projects_nextjs_mmcardgame_project_p');
  const mmcardgame_project_link = t('projects_nextjs_mmcardgame_project_link');
  const projects_link_title = t('projects_link_title');

  return (
    
    <div className={styles.container}>
      
      <Head>
        <title>{head_title}</title>
      </Head>

      <main className={styles.main}>

          {/* HEADLINE Section */}

          <section className={styles.headline_section}>

            <div className={styles.devlogo_wrapper}>
              <Image src={ MyDevLogo } className={styles.devlogo} alt="Stefan Bartl's Logo" title='Science, Tech & Peace!' />
            </div>

            <h1 className={styles.page_title}>{page_title}</h1>

          </section>

          <p className={styles.intro}>{intro}</p>

          {/* Projects Section */}

          <section className={styles.projects}>

            {/* Etch-a-Sketch */}
            <Link className={styles.mmcardgame} href='https://vercel-mmc-ard-game.vercel.app/de' target='_blank'>
            <div className={`${styles.project_container} ${styles.project_mmcardgame}`}>

              <div className={styles.project_text_wrapper}>
                <h2 className={styles.project_h2}>{mmcardgame_project_h2}</h2>
                <p>{mmcardgame_project_p}</p>
                <h3 className={styles.mmcardgame_l} title={projects_link_title}>{mmcardgame_project_link}</h3>
              </div>
              <div className={styles.project_img_wrapper}>
                <Image src={ MemoryCardPNG } alt="Project Logo" />
              </div>
            </div>
            </Link>

          </section>

      </main>

    </div>
  )
};

export default Projects_react_nextjs
