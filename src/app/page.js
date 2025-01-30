import styles from "./page.module.css";
import LeftH from "@/components/left-h/Lefth";
import RightH from "@/components/right-h/Righth";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <LeftH />
        <RightH />
      </div>
    </>
  );
}
