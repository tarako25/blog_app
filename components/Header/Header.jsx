import Link from "next/link"
import styles from "./Header.module.css"

export function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.logo}>タイトル</div>
            <div className={styles.menus}>
                <ul>
                    <Link href="../">
                        <li>トップ</li>
                    </Link>
                    <Link href="./Trial">
                        <li>console.logテスト用</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}