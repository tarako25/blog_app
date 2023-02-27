import styles from "components/Footer/Footer.module.css"
import Image from "next/image"
import title from "img/Title.png"
import Link from "next/link"

export function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footermain}>
            <Link href="../">
                <Image src={title} alt="ロゴの画像" className={styles.logoimg}/>
            </Link >
            </div>
            <div className={styles.footersub}>
                <p>© 2023 Blog_sample</p>
            </div>
        </div>
    )
}