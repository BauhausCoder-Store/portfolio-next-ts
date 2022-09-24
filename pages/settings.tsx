import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import styles from "../styles/Settings.module.css";

const Settings: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio || Settings </title>
      </Head>

      <main className={styles.main}>
        <h1>Settings</h1>
        <h2>Language</h2>
        <select
          className={styles.settings_select_language}
          id="language_select"
        >
          <option selected>Select language here...</option>
          <option value="1">English</option>
          <option value="2">Deutsch</option>
        </select>

        <h2>Color-Theme</h2>
        <select
          className={styles.settings_select_color}
          id="theme_select"
          defaultValue={1}
        >
          <option value="1">Dark</option>
          <option value="2">Light</option>
        </select>
        
      </main>
    </div>
  );
};

export default Settings;
