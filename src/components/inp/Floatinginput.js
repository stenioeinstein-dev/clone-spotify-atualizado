"use client"
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { useSearch } from "@/context/SearchContext";
import Image from "next/image";

export default function FloatingInput() {
    useEffect(() => {
        const handleKeyDown = (event) => {
            const inputElement = document.getElementById("input");

            if (event.key === "/") {
                inputElement.style.display = "flex"; // Mostra o input
            } else if (event.key === "Escape") {
                inputElement.style.display = "none"; // Esconde o input
            }
        };

        // Adiciona o listener de keydown
        document.addEventListener("keydown", handleKeyDown);

        // Limpa o listener ao desmontar o componente
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // Função para fechar o input
    const closeInput = () => {
        const inputElement = document.getElementById("input");
        inputElement.style.display = "none";
    };

    const [input, setInput] = useState("");
    const { handleSearch } = useSearch();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(input);
    };

    const { results, loading, error } = useSearch();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">Error: {error}</p>;
    }

    return (
        <div className={styles.container} id="input" style={{ display: "none" }}>
            <div className={styles.content_top}>
                <span onClick={closeInput} className="cursor-default absolute top-5 left-4 text-white">
                    Esc to close
                </span>
                <button
                    className="absolute top-4 right-4 text-white text-2xl"
                    onClick={closeInput}
                >
                    ✖
                </button>
            </div>
            <div className={styles.content}>
                <div className={styles.content_search}>
                    <form onSubmit={handleSubmit} >
                        <div className={styles.icon_search} title="Search">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 dYnaPI mOLTJ2mxkzHJj6Y9_na_" viewBox="0 0 18 18">
                                <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
                            </svg>
                        </div>
                        <input type="search" value={input}
                            onChange={(e) => setInput(e.target.value)} autoFocus placeholder="What do you want to listen to?" id="search" />
                    </form>
                </div>

            </div>
        </div>
    );
}

