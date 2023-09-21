import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}><h1 className="visually-hidden">Riley Cravens</h1>
        <p>Riley Cravens is a Frontend Software Engineer who lives in Portland, Oregon.</p>
        <p>I am currently looking for a new job opportunity in Portland, OR, or fully remote. I specialize in UI development with particular interest in usability and accessibility.</p>
      </div>
    </main>
  )
}
