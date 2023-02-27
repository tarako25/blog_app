import { Category } from "components/Category/Category";
import { Header } from "components/Header/Header";
import styles from "styles/Home.module.css"
import { Up_Side } from "components/Up_Side";
import { Form } from "components/Form";
import Head from "next/head";
import { Footer } from "@/components/Footer/Footer";


export default function contact(){

  return(
    <>
    <Head>
        <title>Blog_sample</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="yPWWkIUSplswGDurIkWPz5ooliChjglbdm-yFdbZ_Aw" />
      </Head>
    <div className={styles.all}>
      <Header />
      <Category /> 
      <div className={styles.inside}>
        <div className={styles.center}>
          <Form />
        </div>
        <div className={styles.side}>
          <Up_Side />
        </div>
      </div>
      <Footer/>
    </div>
  </>
  )
}