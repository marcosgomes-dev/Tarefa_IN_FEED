import styles from "./styles.module.css";

export default function CardPessoal() {
  return (
    <div className={styles.card}>
      <div className={styles.banner}>
        <img src="../src/assets/img_fundo.png" alt="Imagem de fundo" />
      </div>

      <div className={styles.foto}>
        <img src="../src/assets/Marcos.png" alt="Foto de perfil" />
      </div>

      <div className={styles.detalhes}>
        <h2>Marcos Vinicius Gomes</h2>
        <p>Desenvolvedor Front-End</p>
      </div>
    </div>
  );
}
