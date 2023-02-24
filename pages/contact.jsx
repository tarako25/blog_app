import { Category } from "components/Category/Category";
import { Header } from "components/Header/Header";
import styles from "styles/Home.module.css"
import { Up_Side } from "components/Up_Side";
import { Form } from "components/Form";


export default function contact(){

  return(
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
    </div>
  )
}