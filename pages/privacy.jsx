import { Category } from "components/Category/Category";
import { Header } from "components/Header/Header";
import styles from "styles/Home.module.css"
import { Up_Side } from "components/Up_Side";
import comon from "styles/Comon.module.css"

export default function privacy(){

  return(
    <div className={styles.all}>
      <Header />
      <Category /> 
      <div className={styles.inside}>
        <div className={styles.center}>
          {/* 内容 */}
          <div className={comon.hlbox}>プライバシーポリシー</div>
          <div className={comon.hl}>個人情報</div>
          <div className={comon.container}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ipsum ullam saepe, dignissimos quos culpa voluptas consequatur possimus ad incidunt est adipisci obcaecati eius ipsa odio veritatis. Nam, deleniti eveniet nesciunt vitae illo iste aliquam ipsum </p>
          </div>
          <div className={comon.hl}>個人情報利用目的</div>
          <div className={comon.container}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid deserunt maxime modi similique, amet dolorem ipsa atque exercitationem laudantium alias cupiditate, enim reprehenderit explicabo, earum provident expedita quibusdam? Molestias deserunt et distinctio saepe illo, excepturi magnam officiis laudantium voluptatem explicabo repellat repellendus nulla, sed commodi quaerat. Dolorum exercitationem similique cupiditate quos illum, excepturi, reprehenderit qui sit nisi, reiciendis tenetur veritatis.</p>
          </div>
          <div className={comon.hl}>情報の保護</div>
          <div className={comon.container}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum nam animi delectus iste id saepe rerum eum ut sint. Repudiandae error debitis voluptatum necessitatibus?</p>
          </div>
          <div className={comon.hl}>第三者提供に関する免責事項</div>
          <div className={comon.container}>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non illum nam doloremque tempora!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a soluta voluptates suscipit non similique</p>
           <p>Lorem Lorem ipsum dolor sit amet.ipsum dolor sit amet, consectetur adipisicing elit. Non illum nam doloremque tempora!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a soluta voluptates suscipit non similique</p>
          </div>
          <div className={comon.hl}>プライバシーポリシーの変更</div>
          <div className={comon.container}>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, nesciunt. Explicabo dolorem perferendis corporis vitae sapiente cumque, expedita dolore doloribus</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,</p>
           <p>※20xx/xx/xx</p>
          </div>

          {/* 内容 */}
        </div>
        <div className={styles.side}>
          <Up_Side />
        </div>
      </div>
    </div>
  )
}