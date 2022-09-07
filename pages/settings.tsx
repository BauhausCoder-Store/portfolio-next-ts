import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Settings.module.css';

const Settings: NextPage = () => {

  return (
    
    <div className={styles.container}>
      
      <Head>
        <title>My Portfolio || Settings </title>
      </Head>


      <main className={styles.main}>
        <h1>Settings</h1>
        <h2>Language</h2>
        <select className="form-select" aria-label="Default select example" id='language_select'>
          <option selected>Select language here...</option>
          <option value="1">English</option>
          <option value="2">Deutsch</option>
        </select>

        <h2>Color-Theme</h2>
        <select className="form-select" aria-label="Default select example" id='theme_select'>
          <option selected>Select Theme here...</option>
          <option value="1">Dark</option>
          <option value="2">Light</option>
        </select>

        <h2>Music</h2>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="music_switch"/>
        </div>

        <h2>Animations</h2>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="animation_switch"/>
        </div>


      </main>

    </div>
  )
};

export default Settings
