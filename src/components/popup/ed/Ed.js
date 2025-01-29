'use client'
import { useState, useEffect } from "react";


export default function EdPopup() {
    const [isVisible, setIsVisible] = useState(false);

    // Verifica no localStorage se o usuário já aceitou ou recusou os cookies
    useEffect(() => {
        const cookieConsent = setIsVisible(true)
        if (!cookieConsent) {
            setIsVisible(true); // Mostra o popup se ainda não houver decisão
        }
    }, []);

    // Função para recusar os cookies
    const declineCookies = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className="fixed border left-0 right-0 top-0 bottom-0 bg-white h-auto text-white p-4 shadow-lg flex md:flex-row justify-between items-center z-40" style={{gap: "16px"}}>
                <div className="mb-4 h-full md:mb-0 md:mr-4" style={{maxWidth: "40px", maxWidth: "710px"}}>
                    <p className="text-black" style={{fontSize: "13px", fontWeight: "600", fontFamily: "inherit"}}>
                        Esse projeto foi desenvolvido durante a Imersão frontend da <a href="/" style={{fontWeight: "800"}} className="underline hover:text-black">Alura</a>.
                    </p>
                </div>
                <div className="absolute flex space-x-4 right-2 top-1">
                    <button onClick={declineCookies} className="text-black text-2xl">✖</button>
                </div>
            </div>
        )
    );
};
