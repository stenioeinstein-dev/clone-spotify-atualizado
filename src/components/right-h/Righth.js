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
      <Footer/>
    </div>
  );
}
