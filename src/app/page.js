import Footer from "@/components/footer/Footer";
import styles from "./page.module.css";
import LeftH from "@/components/left-h/Lefth";
import RightH from "@/components/right-h/Righth";
import Image from "next/image";

export default function Home() {
  return (<>
    <div className={styles.container}>
      <LeftH />
      <RightH />
    </div>
  </>
  );
}
