import { Category } from "@/components/Category/Category";
import { Header } from "@/components/Header/Header";
import styles from "@/styles/Home.module.css"
<<<<<<< HEAD
import { Up_Top } from "@/components/UP_Top";
import { Up_Side } from "@/components/Up_Side";
=======
import { Main } from "@/components/Main/Main";
import { Side } from "@/components/Side/Side";
>>>>>>> b2b26b628cd295710b553581303eb41d5945f1b2


export default function index(){

  return(
    <div className={styles.all}>
      <Header />
      <Category /> 
      <div className={styles.inside}>
        <div className={styles.center}>
<<<<<<< HEAD
          <Up_Top />
        </div>
        <div className={styles.side}>
          <Up_Side />
=======
          <Main/>
        </div>
        <div className={styles.side}>
          <Side/>
>>>>>>> b2b26b628cd295710b553581303eb41d5945f1b2
        </div>
      </div>
    </div>
  )
}