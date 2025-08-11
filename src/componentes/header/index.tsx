import styles from './style.module.css';

export default function Header() {
  return (
     <header className={styles.header} >
      <div className={styles.nome}>
        <img src="../src/assets/Logo1.png" alt="logo_IN" />
        <h1> Feed </h1>
      </div>
      
    </header>
  );
}