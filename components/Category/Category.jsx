import styles from "./Category.module.css"
import Image from "next/image"
import headerimg from "@/img/header.jpg"

export function Category(){
    return(
        <div className={styles.categorys}>
            <div className={styles.box}>
                <Image src={headerimg} alt="画像" priority="hight" className={styles.headerimg}/>
            </div>
        </div>
    )
}