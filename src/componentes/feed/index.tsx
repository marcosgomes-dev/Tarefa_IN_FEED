import styles from "./styles.module.css";
import CardPessoal from "../cardPessoal";
import CardPost from "../cardComent";

const nomeUsuario = "Marcos Vinicius Gomes";
const fotoUsuario = "../src/assets/Marcos.png";

export default function Feed() {
    return (
        <div className={styles.feed}>
            <CardPessoal />

            <div className={styles.listaPosts}>
                <CardPost 
                    nome="Rafaela Monique"
                    cargo="Publicitária"
                    tempo="Publicado há 1h"
                    conteudo={`<br /><br /><br /> Lorem ipsum dolor sit amet.<br />
                        <br /> Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. <br />
                        <br /> Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!<br /><br /><br />`} 
                    fotoPerfil="../src/assets/fotoRafaela.png"
                    nomeUsuario={nomeUsuario}
                    fotoUsuario={fotoUsuario} 
                />

                <CardPost
                    nome="Bruno Gomes"
                    cargo="Professor"
                    tempo="Publicado há 2h"
                    conteudo={`<br /><br /><br /> Lorem ipsum dolor sit amet.<br />
                        <br /> Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. <br />
                        <br /> Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!<br /><br /><br />`}
                    fotoPerfil="../src/assets/fotoBruno.png"
                    nomeUsuario={nomeUsuario}
                    fotoUsuario={fotoUsuario} 
                />
            </div>        
        </div>
    );
}
