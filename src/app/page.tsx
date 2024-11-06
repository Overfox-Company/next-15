// pages/index.js

import styles from "./page.module.css";
;

async function getData() {
  const res = await fetch("http://localhost:3000/api/getData", { cache: 'no-store' });
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { id } = await getData();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{id}</h1>
      </main>
    </div>
  );
}
