import Image from "next/image";
import styles from "./page.module.css";
import React, { useState, useEffect } from "react";

function Btns() {
    const [user, setUser] = useState(null);

    // Função de login fictícia
    const handleLogin = () => {

        // Simula um login, configurando o estado do usuário
        setUser({
            name: "John Doe",
            avatar: "/55.jpeg", // URL de exemplo para o avatar
        });
    };

    // Função de logout fictícia
    const handleLogout = () => {
        setUser(null);
    };

    return (
        <>
            {user ? (
                <>
                    <Btnexplorepremium />
                    <Btninstallapp />
                    <Image
                        src={user.avatar}
                        alt={user.name}
                        title={user.name}
                        className={styles.avatar}
                        onClick={handleLogout}
                        width={42}
                        height={42}
                    />
                </>
            ) : (
                <>
                    <Btninstallapp />
                    <Btnsignup />
                    <button onClick={handleLogin} className={styles.login}>Log in</button>
                </>
            )}

        </>
    )
}

function Btnexplorepremium() {
    return (
        <button className={styles.explorepremium}>Explore Premium</button>
    )
}

function Btnsignin() {
    return (
        <button className={styles.login}>Log in</button>
    )
}

function Btnsignup() {
    return (
        <button className={styles.subscribe}>Sign up</button>
    )
}

function Btninstallapp() {
    return (
        <button className={styles.installapp}>
            <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 dYnaPI e-9541-icon" viewBox="0 0 16 16">
                <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path>
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z" ></path>
            </svg>
            <span>Install App</span>
        </button>
    )
}

function Btnopenapp() {
    return (
        <button className={styles.openapp}>
            <span>Open App</span>
        </button>
    )
}



export { Btnsignin, Btnsignup, Btninstallapp, Btnopenapp, Btns }