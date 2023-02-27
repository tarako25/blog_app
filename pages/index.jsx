import { Category } from "components/Category/Category";
import { Header } from "components/Header/Header";
import styles from "styles/Home.module.css"
import { Up_Top } from "components/UP_Top";
import { Up_Side } from "components/Up_Side";
import Head from "next/head";


export default function index(){

  return(
    <>
      <Head>
        <title>Blog_sample</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="鯖の煮つけと麻婆豆腐炒めチャンネルブログについてのページです"/>
        <meta name="keywords" content="自作ブログ, 鯖の煮つけと麻婆豆腐炒めチャンネルブログについて, ポテチ初心者"/>
        <meta name="google-site-verification" content="yPWWkIUSplswGDurIkWPz5ooliChjglbdm-yFdbZ_Aw" />
      </Head>
      <div className={styles.all}>
        <Header />
        <Category /> 
        <div className={styles.inside}>
          <div className={styles.center}>
            <Up_Top />
          </div>
          <div className={styles.side}>
            <Up_Side />
          </div>
        </div>
      </div>
    </>
  )
}