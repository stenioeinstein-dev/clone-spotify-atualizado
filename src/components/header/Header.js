import Link from "next/link";
import styles from "./page.module.css"
import Image from "next/image";
import logo from "../../../public/favicon.png"
import { Btnsignin, Btnsignup, Btninstallapp } from "@/components/btns/Btns";

export default function Header() {
    return (
        <>
            <div className={`${styles.container}`} >
                <div className={styles.content_l}>
                    <Link href="" >
                        <Image src={logo} width={32} height={32} alt="Logo" />
                    </Link>
                </div>
                <div className={styles.content_c}>
                    <div className={styles.icon_home} title="Home">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 bneLcE e-9541-icon" viewBox="0 0 24 24">
                            <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
                        </svg>
                    </div>
                    <form>
                        <div className={styles.icon_search} title="Search">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 dYnaPI mOLTJ2mxkzHJj6Y9_na_" viewBox="0 0 18 18">
                                <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
                            </svg>
                        </div>
                        <input type="text" placeholder="What do you want to listen to?" id="search" />
                        <div className={styles.bar} title="Click /">
                        /
                        </div>
                        <div className={styles.icon_browser} title="Browser">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 bneLcE e-9541-icon" viewBox="0 0 24 24">
                                <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" ></path>
                                <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9H3.525zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4V2z"></path>
                            </svg>
                        </div>
                    </form>
                </div>
                <div className={styles.content_r}>
                    <Btninstallapp />
                    <Btnsignup />
                    <Btnsignin />
                </div>
            </div>
        </>
    );
}
