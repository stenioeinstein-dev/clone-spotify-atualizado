"use client"
import styles from "./page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../public/favicon.png"
import { Btnsignin, Btnsignup, Btninstallapp, Btnopenapp } from "@/components/btns/Btns";
import FloatingInput from "../inp/Floatinginput";
import { useSearch } from "@/context/SearchContext";

export default function Header() {

    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Define "mobile" para telas menores ou iguais a 768px
        };

        // Verifica o tamanho inicial da janela
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [isSelected, setIsSelected] = useState(false);

    // Função para alternar o estado
    const toggleButton = () => {
        setIsSelected(!isSelected);
    };

    // Função para fechar o input
    const openInput = () => {
        const inputElement = document.getElementById("input");
        inputElement.style.display = "flex";
    };

    const [input, setInput] = useState("");
    const { handleSearch } = useSearch();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(input);
    };

    return (
        <>
            <FloatingInput />
            <div className={`${styles.container}`} >
                <div className={styles.content_l}>
                    <Link href="" target="" >
                        <Image src={logo} width={32} height={32} alt="Logo" />
                    </Link>
                </div>

                {isMobile ? (
                    <div className={styles.content_mobile}>
                        <div className={styles.icon_search} onClick={openInput} title="Search">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 dYnaPI mOLTJ2mxkzHJj6Y9_na_" viewBox="0 0 18 18">
                                <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
                            </svg>
                        </div>
                        <Btnopenapp />
                        <button
                            className="flex items-center p-2 rounded-lg"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="text-2xl text-white">☰</span>
                        </button>
                    </div>
                ) : (
                    <>
                        <div className={styles.content_c}>
                            <div className={styles.icon_home} onClick={toggleButton} title="Home">
                                {isSelected ? (
                                    // SVG quando o botão está selecionado
                                    <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 bneLcE e-9541-icon" viewBox="0 0 24 24">
                                        <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path>
                                    </svg>
                                ) : (
                                    // SVG quando o botão não está selecionado
                                    <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 bneLcE e-9541-icon" viewBox="0 0 24 24">
                                        <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
                                    </svg>
                                )}
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div onClick={handleSubmit} className={styles.icon_search} title="Search">
                                    <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 dYnaPI mOLTJ2mxkzHJj6Y9_na_" viewBox="0 0 18 18">
                                        <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
                                    </svg>
                                </div>
                                <input type="search" value={input}
                                    onChange={(e) => setInput(e.target.value)} placeholder="What do you want to listen to?" id="search" />
                                <div className={styles.bar} onClick={openInput} title="Click /">
                                    /
                                </div>
                                <div className={styles.icon_browser} onClick={toggleButton} title="Browser">
                                    {isSelected ? (
                                        // SVG quando o botão está selecionado
                                        <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 bneLcE e-9541-icon" viewBox="0 0 24 24">
                                            <path d="M4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4H4V2zM1.513 9.37A1 1 0 0 1 2.291 9H21.71a1 1 0 0 1 .978 1.208l-2.17 10.208A2 2 0 0 1 18.562 22H5.438a2 2 0 0 1-1.956-1.584l-2.17-10.208a1 1 0 0 1 .201-.837zM12 17.834c1.933 0 3.5-1.044 3.5-2.333 0-1.289-1.567-2.333-3.5-2.333S8.5 14.21 8.5 15.5c0 1.289 1.567 2.333 3.5 2.333z"></path>
                                        </svg>
                                    ) : (
                                        // SVG quando o botão não está selecionado
                                        <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 bneLcE e-9541-icon" viewBox="0 0 24 24">
                                            <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" ></path>
                                            <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9H3.525zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4V2z"></path>
                                        </svg>
                                    )}
                                </div>
                            </form>
                        </div>
                        <div className={styles.content_r}>
                            <Btninstallapp />
                            <Btnsignup />
                            <Btnsignin />
                        </div>
                    </>
                )}

                {/* Modal de menu no Mobile */}
                {isMobile && isMenuOpen && (
                    <div className={`${styles.modal_mobile} fixed inset-0 text-white z-50 flex flex-col items-start `}>
                        {/* Botão para fechar o menu */}
                        <button
                            className="absolute top-4 right-4 text-white text-2xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            ✖
                        </button>
                        {/* Links do menu */}
                        <nav className={`${styles.modal_mobile_nav} flex flex-col space-y-6 text-left`}>
                            <Link href="#login" className={`${styles.modal_mobile_nav_nm} hover:underline`}>
                                Log in
                            </Link>
                            <Link href="#signup" className={`${styles.modal_mobile_nav_nm} hover:underline`}>
                                Sign up
                            </Link>
                            <hr className={styles.hr} />
                            <Link href="#premium" className={`${styles.modal_mobile_nav_sub} hover:underline `}>
                                Premium
                            </Link>
                            <Link href="#help" className={`${styles.modal_mobile_nav_sub} hover:underline `}>
                                Help
                            </Link>
                            <Link href="#download" className={`${styles.modal_mobile_nav_sub} hover:underline `}>
                                Download
                            </Link>
                            <Link href="#terms" className={`${styles.modal_mobile_nav_sub} hover:underline `}>
                                Terms
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </>
    );
}
