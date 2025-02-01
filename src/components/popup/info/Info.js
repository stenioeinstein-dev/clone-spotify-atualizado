'use client'
import Link from "next/link";
import { useState, useEffect } from "react";


export default function PopupInfo() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const popup = setIsVisible(true)
        if (!popup) {
            setIsVisible(true); // Mostra o popup se ainda não houver decisão
        }
    }, []);

    // Função para close o popup
    const close = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (

            <div className="fixed inset-0 flex items-center z-50 backdrop-blur-sm justify-center bg-black bg-opacity-50">




                <div className="bg-white mb-4 md:mb-0 md:mr-4 p-6 rounded-lg shadow-lg max-w-sm text-center relative" style={{ maxWidth: "540px" }}>
                    <h1 className="text-black text-lg" style={{ fontWeight: "600", fontFamily: "inherit" }}>
                        Clone - Spotify
                    </h1>
                    <Link href="https://www.alura.com.br/imersao-front-end" className="text-black" style={{ fontSize: "13px", fontWeight: "600", marginBottom: "10px", fontFamily: "inherit" }}>
                        Imersão Front-End Alura
                    </Link>
                    <p className="text-black" style={{ fontSize: "13px", fontWeight: "500", marginBottom: "10px", fontFamily: "inherit" }}>
                        Project
                        <Link style={{ fontSize: "13px", fontWeight: "600", marginBottom: "10px", fontFamily: "inherit" }} href="https://github.com/stenioeinstein-dev"> Developed by Stenio.</Link>
                    </p>
                    <p className="text-black" style={{ fontSize: "14px", fontWeight: "500", fontFamily: "inherit" }}>
                    A ideia por trás deste projeto é desenvolver e aprofundar conceitos de frontend.
                    </p>
                    <p className="text-black" style={{ fontSize: "14px", fontWeight: "500", marginTop: "4px", fontFamily: "inherit" }}>
                    O projeto tem uma finalidade educacional, visando promover as habilidades adquiridas em programação e desenvolvimento durante a imersão.
                    </p>
                    <p className="text-black" style={{ fontSize: "14px", fontWeight: "500", marginTop: "4px", fontFamily: "inherit" }}>
                    Foi utilizado como base de estudo o Spotify, um serviço de streaming de música, em sua versão web.
                    </p>

                    <button onClick={close} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                        ✖
                    </button>
                </div>
            </div >
        )
    );
};
