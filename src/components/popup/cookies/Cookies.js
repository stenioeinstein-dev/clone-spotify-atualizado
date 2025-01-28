'use client'
import { useState, useEffect } from "react";


export default function CookiePopup() {
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
            <div className="fixed border left-0 right-0 bottom-0 bg-white text-white p-4 shadow-lg flex md:flex-row justify-between items-center z-40" style={{gap: "16px"}}>
                <div className="mb-4 md:mb-0 md:mr-4" style={{maxWidth: "40px", maxWidth: "710px"}}>
                    <p className="text-black" style={{fontSize: "13px", fontWeight: "600", fontFamily: "inherit"}}>
                        Nós e nossos <a href="/" style={{fontWeight: "800"}} className="underline hover:text-black">nossos parceiros</a> usamos cookies para personalizar sua experiência, para exibir anúncios com base em seus interesses e para fins de medição e análise. Ao usar nosso site e nossos serviços, você concorda com nosso uso de cookies conforme descrito em nossa <a href="/" style={{fontWeight: "800"}} className="underline hover:text-black"> Política de Cookies</a>.
                    </p>
                </div>
                <div className="flex space-x-4">
                    <button onClick={declineCookies} className="text-black text-2xl">✖</button>
                </div>
            </div>
        )
    );
};
