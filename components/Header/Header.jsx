import Link from "next/link"
import styles from "components/Header/Header.module.css"
import Image from "next/image"
import title from "img/Title.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


export function Header(){

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
    setShowMenu(!showMenu);
};

    return(
        <div>
             <div className={`${styles.hamburger} ${showMenu ? styles.show : styles.dis}`}>
                <ul className={styles.hamul}>
                    <Link href="../">
                        <li>ホーム</li>
                    </Link>
                    <Link href="../profile">
                        <li>プロフィール</li>
                    </Link>
                    <Link href="../privacy">
                        <li>プライバシーポリシー</li>
                    </Link>
                    <Link href="../contact">
                        <li>お問い合わせ</li>
                    </Link>
                </ul>
            </div>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link href="../">
                        <Image src={title} alt="ロゴの画像" className={styles.logoimg}/>
                    </Link >
                    <FontAwesomeIcon icon={faBars} className={styles.fabars} onClick={toggleMenu}/>
                </div>
                <div className={styles.menus}>
                    <ul>
                        <Link href="../">
                            <li>ホーム</li>
                        </Link>
                        <Link href="../profile">
                            <li>プロフィール</li>
                        </Link>
                        <Link href="../privacy">
                            <li>プライバシーポリシー</li>
                        </Link>
                        <Link href="../contact">
                            <li>お問い合わせ</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}