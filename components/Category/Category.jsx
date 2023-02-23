import styles from "./Category.module.css"
import Image from "next/image"
import headerimg from "@/img/header.jpg"

export function Category(){
    return(
        <div className={styles.categorys}>
            <div className={styles.box}>
                <Image src={headerimg} className={styles.headerimg}/>
            </div>
        </div>
    )
}