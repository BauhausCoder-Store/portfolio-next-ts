import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

import styles from '../styles/Settings.module.css';

import { Checkbox } from '../components/Checkbox';

const Settings: NextPage = () => {


    const [animationChecked, setAnimationChecked] = useState(false);
    const [musicChecked, setMusicChecked] = useState(false);

    const handleMusicChange = () => {
      setMusicChecked(!musicChecked);
    };

    const handleAnimationChange = () => {
      setAnimationChecked(!animationChecked);
    };

  return (
    
    <div className={styles.container}>
      
      <Head>
        <title>My Portfolio || Settings </title>
      </Head>


      <main className={styles.main}>
        <h1>Settings</h1>
        <h2>Language</h2>
        <select className={styles.settings_select_language} id='language_select'>
          <option selected>Select language here...</option>
          <option value="1">English</option>
          <option value="2">Deutsch</option>
        </select>

        <h2>Color-Theme</h2>
        <select className={styles.settings_select_color}  id='theme_select'>
          <option selected>Select Theme here...</option>
          <option value="1">Dark</option>
          <option value="2">Light</option>
        </select>

        <h2>Music</h2>
        <div className={styles.settings_switch_music} >
          <Checkbox  value={musicChecked} onChange={handleMusicChange}/>
        </div>

        <h2>Animations</h2>
        <div className={styles.settings_switch_animations_animation}>
          <Checkbox value={animationChecked} onChange={handleAnimationChange}  />
        </div>

      </main>

    </div>
  )
};

export default Settings
