import Link from "next/link"
import styles from "./Header.module.css"
<<<<<<< HEAD
import Image from "next/image"
import logo from "@/img/logo.png"
=======
>>>>>>> b2b26b628cd295710b553581303eb41d5945f1b2

export function Header(){
    return(
        <div className={styles.header}>
<<<<<<< HEAD
            <div className={styles.logo}>
            <Link href="../">
                <Image src={logo} className={styles.logoimg}/>
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
=======
            <div className={styles.logo}>タイトル</div>
            <div className={styles.menus}>
                <ul>
                    <Link href="../">
                        <li>トップ</li>
                    </Link>
                    <Link href="./Trial">
                        <li>console.logテスト用</li>
>>>>>>> b2b26b628cd295710b553581303eb41d5945f1b2
                    </Link>
                </ul>
            </div>
        </div>
    )
}