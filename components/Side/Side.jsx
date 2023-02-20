import styles from "./Side.module.css"
import comon from "@/styles/Comon.module.css"
import Link from "next/link"
import img from "@/img/img.jpg"
import Image from "next/image"

export function Side(){
    return(
            <div className={comon.all}>
                <div className={styles.side}>
                    
                    {/* のちにmap関数で表示する方式に変更する */}

                {/* プロフィール */}
                <div className={styles.profile}>
                <Image src={img} className={styles.img}/>
                <div className={styles.name}>Lorem</div>
                    <div className={styles.pr}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatibus enim excepturi dolores doloribus.</div>
                    <div className={styles.snsicons}>
                        <Link href="">
                            <Image src={img} className={styles.icon}/>
                        </Link>
                        <Link href="">
                            <Image src={img} className={styles.icon}/>
                        </Link>
                        <Link href="">
                            <Image src={img} className={styles.icon}/>
                        </Link>
                    </div>
                </div>
                {/* /プロフィール */}

                {/* 人気の記事 */}
                <div className={styles.box}>
                    <div className={styles.hl}>人気の記事</div>
                    <div className={styles.articles}>
                        {/* 記事 */}
                                <Link href="">
                                    <div className={styles.article}>
                                        <Image src={img} className={styles.pimg}/>
                                        <div className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                                    </div>
                                </Link>
                        {/* /記事 */}
                        {/* 記事 */}
                        <Link href="">
                                    <div className={styles.article}>
                                        <Image src={img} className={styles.pimg}/>
                                        <div className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                                    </div>
                                </Link>
                        {/* /記事 */}
                    </div>
                </div>
            {/* /人気の記事 */}

            {/* 新着記事 */}
            <div className={styles.box}>
                <div className={styles.hl}>新着記事</div>
                <div className={styles.articles}>
                    {/* 記事 */}
                            <Link href="">
                                <div className={styles.article}>
                                    <Image src={img} className={styles.pimg}/>
                                    <div className={styles.description}>Lorem ipsum dolor sit amet consectetur.</div>
                                </div>
                            </Link>
                    {/* /記事 */}
                    {/* 記事 */}
                    <Link href="">
                                <div className={styles.article}>
                                    <Image src={img} className={styles.pimg}/>
                                    <div className={styles.description}>Lorem ipsum dolor sit amet consectetur.</div>
                                </div>
                            </Link>
                    {/* /記事 */}
                </div>
            </div>
            {/* /新着記事 */}

            {/* カテゴリー */}
            <div className={styles.box}>
                <div className={styles.hl}>カテゴリー</div>
                    <div className={styles.categorys}>
                        <Link href="" className={styles.categoryA}><span>▶</span>カテゴリーA</Link>
                        <Link href="" className={styles.categoryA}><span>▶</span>カテゴリーA</Link>
                    </div>
            </div>
            {/* /カテゴリー */}
            </div>

            {/* のちにmap関数で表示する方式に変更する */}
            
        </div>
    )
}