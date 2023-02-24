import Link from "next/link"
import styles from "components/Header/Header.module.css"
import Image from "next/image"
import logo from "img/Logo.png"

export function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.logo}>
            <Link href="../">
                <Image src={logo} alt="ロゴの画像" className={styles.logoimg}/>
            </Link >
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
    )
}