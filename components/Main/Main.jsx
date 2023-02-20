import styles from "./Main.module.css"
import comon from "@/styles/Comon.module.css"
import Link from "next/link"
import img from "@/img/img.jpg"
import Image from "next/image"

export function Main(){
    return(
            <div className={comon.all}>
                
                {/* のちにmap関数で表示させる方式に変更する */}

                {/* 新着記事 */}
                <div className={comon.hl}>新着記事</div>
                <div className={styles.newarticlebox}>
                    <Link href="">
                        <div className={styles.article}>
                            <Image src={img} className={styles.img}/>
                            <div className={styles.descriptionbox}>
                                <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                            </div>
                        </div>
                    </Link>
                    <Link href="">
                        <div className={styles.article}>
                            <Image src={img} className={styles.img}/>
                            <div className={styles.descriptionbox}>
                                <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* /新着記事 */}

                {/* 記事一覧 */}
                <div className={comon.hl}>記事一覧</div>
                <div className={styles.articlebox}>
                <Link href="">
                        <div className={styles.article}>
                            <Image src={img} className={styles.img}/>
                            <div className={styles.descriptionbox}>
                                <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                            </div>
                        </div>
                    </Link>
                    <Link href="">
                        <div className={styles.article}>
                            <Image src={img} className={styles.img}/>
                            <div className={styles.descriptionbox}>
                                <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* /記事一覧 */}

                {/* /のちにmap関数で表示させる方式に変更する */}
            </div>
    )
}