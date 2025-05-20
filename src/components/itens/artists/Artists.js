'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from 'next/link'

const URL_API = '/api/artists'

export default function Artists() {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const query = await fetch(URL_API);
      const response = await query.json();
      setUserInfo(response);
    }
    getData();
  }, []);

  return (
    <>
      <h1 className={styles.h1}>Popular artists</h1>
      <div className={styles.content_itens}>
        {
          userInfo && userInfo.length && userInfo.map((playlist, index) => {
            return (
              <Link href={playlist.urlplaylist} target="_blank" key={index}>
                <div className={styles.cards} >
                  <Image src={playlist.urlImg} alt="test" width={180} height={180} className={styles.cover_image} priority={true} property="true" />
                  <h1 className={styles.title}>{playlist.name}</h1>
                  <p>Artist</p>
                  <button className={styles.btn_play}>
                    <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 bneLcE e-9541-icon" viewBox="0 0 24 24" >
                      <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                    </svg>
                  </button>
                </div>
              </Link>

            )
          })
        }
      </div>
    </>
  );
}
