import styles from "./Main.module.css"
import comon from "@/styles/Comon.module.css"
import Link from "next/link"
import Image from "next/image"

export function Main(props){
    return(
            <div className={comon.all}>
                
                {/* のちにmap関数で表示させる方式に変更する */}

                {/* 新着記事 */}
                <div className={comon.hl}>新着記事</div>
                <div className={styles.newarticlebox}>

                {props.newarticles.map((newarticle)=>(
                    <Link href={newarticle.href}>
                    <div className={styles.article}>
                        <Image src={newarticle.picture} className={styles.img}/>
                        <div className={styles.descriptionbox}>
                            <div className={styles.description}>{newarticle.text}</div>
                        </div>
                    </div>
                </Link>
                ))}
                </div>
                {/* /新着記事 */}

                {/* 記事一覧 */}
                <div className={comon.hl}>記事一覧</div>
                <div className={styles.articlebox}>
                {props.articles.map((article)=>(
                    <Link href={article.href}>
                    <div className={styles.article}>
                        <Image src={article.picture} className={styles.img}/>
                        <div className={styles.descriptionbox}>
                            <div className={styles.description}>{article.text}</div>
                        </div>
                    </div>
                </Link>
                ))}
                </div>
                {/* /記事一覧 */}

                {/* /のちにmap関数で表示させる方式に変更する */}
            </div>
    )
}