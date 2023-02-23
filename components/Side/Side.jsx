import styles from "./Side.module.css"
import comon from "@/styles/Comon.module.css"
import Link from "next/link"
import img from "@/img/img.jpg"
import Image from "next/image"
<<<<<<< HEAD
import twitter from "@/img/Twitter.png"
import instagram from "@/img/Instagram.png"
import facebook from "@/img/Facebook.png"
import profile from "@/img/profile.jpg"

export function Side(props){
=======

export function Side(){
>>>>>>> b2b26b628cd295710b553581303eb41d5945f1b2
    return(
            <div className={comon.all}>
                <div className={styles.side}>
                    
<<<<<<< HEAD

                {/* プロフィール */}
                <div className={styles.profile}>
                    <Link href="../profile" className={styles.profilesub}>
                <Image src={profile} className={styles.img}/>
                <div className={styles.name}>Lorem</div>
                    <div className={styles.pr}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatibus enim excepturi dolores doloribus.</div>
                    </Link>
                    <div className={styles.snsicons}>
                        <Link href="https://twitter.com/home">
                            <Image src={twitter} className={styles.icon}/>
                        </Link>
                        <Link href="https://www.instagram.com/">
                            <Image src={instagram} className={styles.icon}/>
                        </Link>
                        <Link href="https://www.facebook.com/">
                            <Image src={facebook} className={styles.icon}/>
=======
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
>>>>>>> b2b26b628cd295710b553581303eb41d5945f1b2
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
<<<<<<< HEAD
                    {props.newarticles.map((newarticle)=>(
                        <Link href={newarticle.href}>
                        <div className={styles.article}>
                            <Image src={newarticle.picture} className={styles.pimg}/>
                            <div className={styles.description}>{newarticle.text}</div>
                        </div>
                    </Link>
                    ))}
=======
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
>>>>>>> b2b26b628cd295710b553581303eb41d5945f1b2
                    {/* /記事 */}
                </div>
            </div>
            {/* /新着記事 */}

            {/* カテゴリー */}
            <div className={styles.box}>
                <div className={styles.hl}>カテゴリー</div>
                    <div className={styles.categorys}>
<<<<<<< HEAD
                        <div className={styles.categoryA}><span>▶</span>プログラミング</div>
                        <div className={styles.categoryB}>・準備中</div>
=======
                        <Link href="" className={styles.categoryA}><span>▶</span>カテゴリーA</Link>
                        <Link href="" className={styles.categoryA}><span>▶</span>カテゴリーA</Link>
>>>>>>> b2b26b628cd295710b553581303eb41d5945f1b2
                    </div>
            </div>
            {/* /カテゴリー */}
            </div>
<<<<<<< HEAD
=======

            {/* のちにmap関数で表示する方式に変更する */}
>>>>>>> b2b26b628cd295710b553581303eb41d5945f1b2
            
        </div>
    )
}