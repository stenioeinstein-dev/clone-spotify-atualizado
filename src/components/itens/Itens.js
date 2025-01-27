'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const A_SECRET_API = process.env.SECRET_API;
const URL_API = '/api/playlist'

export default function Itens() {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const query = await fetch(A_SECRET_API || URL_API);
      const response = await query.json();
      // console.log(response);
      setUserInfo(response);
    }
    getData();
  }, []);

  return (
    <>
      {
        userInfo && userInfo.length && userInfo.map((playlist, index) => {
          return (
            <a href={playlist.urlplaylist} target="_blank" key={index}>
              <div className={styles.cards} >
                <div className={styles.wrapper}>
                  <Image src={playlist.urlImg} alt="test" width={180} height={180} className={styles.cover_image} priority={true} property="true" />
                </div>
                <h1 className={styles.title}>{playlist.name}</h1>
                <Image src={playlist.urlImg} alt="character" width={180} height={180} className={styles.character} property="true" />
              </div>
            </a>

          )
        })
      }
    </>
  );
}
