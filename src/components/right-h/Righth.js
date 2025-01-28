import Itens from "@/components/itens/Itens";
import styles from "./page.module.css";
import Image from "next/image";
import Footer from "./footer/footer";

export default function RightH() {
  return (
    <div className={styles.container}>
      <div className={styles.playlist}>
        <h1 id="greeting">{/*{getGreeting()} */}Boas vindas</h1>
        <h2 className="session">Navegar por todas as seções</h2>
      </div>
      <div className={styles.content_itens}>
        <Itens />
        
      </div>
      <iframe className="ml-2 mr-2" src="https://open.spotify.com/embed/track/5oI9blwsXC8AkTWw6wASY8?utm_source=generator&theme=0" width="98.5%"  height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <Footer/>
    </div>
  );
}
