import styles from "components/Side/Side.module.css"
import comon from "styles/Comon.module.css"
import Link from "next/link"
import img from "img/img.jpg"
import Image from "next/image"
import twitter from "img/Twitter.png"
import instagram from "img/Instagram.png"
import facebook from "img/Facebook.png"
import profile from "img/profile.jpg"

export function Side(props){
    return(
            <div className={comon.all}>
                <div className={styles.side}>
                    

                {/* プロフィール */}
                <div className={styles.profile}>
                    <Link href="../profile" className={styles.profilesub}>
                <Image src={profile} alt="プロフィール画像" className={styles.img}/>
                <div className={styles.name}>Lorem</div>
                    <div className={styles.pr}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatibus enim excepturi dolores doloribus.</div>
                    </Link>
                    <div className={styles.snsicons}>
                        <Link href="https://twitter.com/home">
                            <Image src={twitter} alt="twitter" className={styles.icon}/>
                        </Link>
                        <Link href="https://www.instagram.com/">
                            <Image src={instagram} alt="instagram" className={styles.icon}/>
                        </Link>
                        <Link href="https://www.facebook.com/">
                            <Image src={facebook} alt="facebook" className={styles.icon}/>
                        </Link>
                    </div>
                </div>
                {/* /プロフィール */}

                {/* 人気の記事 */}
                <div className={styles.box}>
                    <div className={styles.hl}>人気の記事(未実装)</div>
                    <div className={styles.articles}>
                        {/* 記事 */}
                                <Link href="">
                                    <div className={styles.article}>
                                        <Image src={img} alt="記事画像" className={styles.pimg}/>
                                        <div className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                                    </div>
                                </Link>
                        {/* /記事 */}
                        {/* 記事 */}
                        <Link href="">
                                    <div className={styles.article}>
                                        <Image src={img} alt="記事画像" className={styles.pimg}/>
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
                    {props.newarticles.map((newarticle)=>(
                        <Link key={newarticle.href} href={newarticle.href}>
                        <div className={styles.article}>
                            <Image src={newarticle.picture} alt="記事画像" className={styles.pimg}/>
                            <div className={styles.description}>{newarticle.text}</div>
                        </div>
                    </Link>
                    ))}
                    {/* /記事 */}
                </div>
            </div>
            {/* /新着記事 */}

            {/* カテゴリー */}
            <div className={styles.box}>
                <div className={styles.hl}>カテゴリー</div>
                    <div className={styles.categorys}>
                        <div className={styles.categoryA}><span>▶</span>プログラミング</div>
                        <div className={styles.categoryB}>・準備中</div>
                    </div>
            </div>
            {/* /カテゴリー */}
            </div>
            
        </div>
    )
}