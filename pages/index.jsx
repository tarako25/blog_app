import { Category } from "@/components/Category/Category";
import { Header } from "@/components/Header/Header";
import styles from "@/styles/Home.module.css"
import { Main } from "@/components/Main/Main";
import { Side } from "@/components/Side/Side";


export default function index(){

  return(
    <div className={styles.all}>
      <Header />
      <Category /> 
      <div className={styles.inside}>
        <div className={styles.center}>
          <Main/>
        </div>
        <div className={styles.side}>
          <Side/>
        </div>
      </div>
    </div>
  )
}