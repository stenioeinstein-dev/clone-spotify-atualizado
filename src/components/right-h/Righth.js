"use client";
import styles from "./page.module.css";
import Image from "next/image";
import Playlists from "@/components/itens/playlists/Playlists";
import Artists from "@/components/itens/artists/Artists";
import { useSearch } from "@/context/SearchContext";
import Footer from "./footer/footer";

export default function RightH() {
  const { query, results, loading, error } = useSearch();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {query === "" ? (
          <>
            {/* Conteúdo estático quando nenhuma busca foi realizada */}
            <Artists />
            <Playlists />
          </>
        ) : (
          // Conteúdo dinâmico quando a busca é realizada
          <>
            {/* <h1 className={styles.h1}>Result:</h1> */}
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-500">Error: {error}</p>
            ) : results.length > 0 ? (
              <>
                <div className={styles.content_itens}>
                  {results.map((result) => (
                    <a href={result.urlplaylist} target="_blank" key={result.id}>
                      <div className={styles.cards} >
                        <Image src={result.urlImg} alt="test" width={180} height={180} className={styles.cover_image} priority={true} property="true" />
                        <h1 className={styles.title}>{result.name}</h1>
                        <p>{result.s}</p>
                        <button className={styles.btn_play}>
                          <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 bneLcE e-9541-icon" viewBox="0 0 24 24" >
                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                          </svg>
                        </button>
                      </div>
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <h1 className={styles.h1}>No results found</h1>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
