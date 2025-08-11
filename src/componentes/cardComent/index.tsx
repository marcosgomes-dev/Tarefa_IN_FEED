import { useState } from "react";
import styles from "./styles.module.css";

interface Comentario {
  id: number;
  autor: string;
  texto: string;
  curtidas: number;
  foto: string;
}

interface CardPostagensProps {
  nome: string;
  cargo: string;
  tempo: string;
  conteudo: string;
  fotoPerfil: string;
  nomeUsuario: string;
  fotoUsuario: string;
}

export default function CardPostagens({
  nome,
  cargo,
  tempo,
  conteudo,
  fotoPerfil,
  nomeUsuario,
  fotoUsuario,
}: CardPostagensProps) {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [novoComentario, setNovoComentario] = useState("");

  const adicionarComentario = () => {
    if (novoComentario.trim() === "") return;

    const comentario: Comentario = {
      id: Date.now(),
      autor: nomeUsuario,
      texto: novoComentario,
      curtidas: 0,
      foto: fotoUsuario,
    };

    setComentarios([...comentarios, comentario]);
    setNovoComentario("");
  };

  const removerComentario = (id: number) => {
    setComentarios(comentarios.filter((c) => c.id !== id));
  };

  const curtirComentario = (id: number) => {
    setComentarios(
      comentarios.map((c) =>
        c.id === id ? { ...c, curtidas: c.curtidas + 1 } : c
      )
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.cabecalho}>
        <img
          className={styles.avatar}
          src={fotoPerfil}
          alt={`Foto de ${nome}`}
        />
        <div className={styles.infoUsuario}>
          <h2>{nome}</h2>
          <p>{cargo}</p>
        </div>
        <span className={styles.tempo}>{tempo}</span>
      </div>

      <div className={styles.corpo}>
        <p dangerouslySetInnerHTML={{ __html: conteudo }} />
      </div>

      <div className={styles.secaoComentarios}>
        <h3>Deixe seu feedback</h3>
        <textarea
          placeholder="Escreva um comentário..."
          value={novoComentario}
          onChange={(e) => setNovoComentario(e.target.value)}
        />
        <button className={styles.postar} onClick={adicionarComentario}>
          Comentar
        </button>

        {comentarios.map((c) => (
          <div key={c.id} className={styles.comentario}>
            <div className={styles.containerComentario}>
              <img
                className={styles.comentarioAvatar}
                src={c.foto}
                alt={`Foto de ${c.autor}`}
              />
              <div className={styles.comentarioBox}>
                <div className={styles.comentarioAcoes}>
                  <p>
                    <strong>{c.autor}</strong>
                  </p>
                  <button onClick={() => removerComentario(c.id)}>
                    <img src="../src/assets/Trash.png" alt="botão exluir" />
                  </button>
                </div>
                <p>{c.texto}</p>
              </div>
            </div>
            <button
              className={styles.like}
              onClick={() => curtirComentario(c.id)}
            >
              {" "}
              <img src="../src/assets/Like.png" alt="botão like" /> Like .{" "}
              {c.curtidas}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
