import { Category } from "components/Category/Category";
import { Header } from "components/Header/Header";
import styles from "styles/Home.module.css"
import { Up_Top } from "components/UP_Top";
import { Up_Side } from "components/Up_Side";
import Head from "next/head";


export default function index(){

  return(
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
  )
}