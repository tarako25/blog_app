import { Category } from "@/components/Category/Category";
import { Header } from "@/components/Header/Header";
import styles from "@/styles/Home.module.css"
import { Up_Side } from "@/components/Up_Side";
import comon from "@/styles/Comon.module.css"
import Image from "next/image";
import iconimg from "@/img/profile.jpg"

export default function profile(){

  return(
    <div className={styles.all}>
      <Header />
      <Category /> 
      <div className={styles.inside}>
        <div className={styles.center}>
          {/* 内容 */}
          <div className={comon.hlbox}>プロフィール</div>
          <Image src={iconimg} className={comon.profileimg}/>
          <div className={comon.name}>Lorem</div>
          <div className={comon.container}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ipsum ullam saepe, dignissimos quos culpa voluptas consequatur possimus ad incidunt est adipisci obcaecati eius ipsa odio veritatis. Nam, deleniti eveniet nesciunt vitae illo iste aliquam ipsum </p>
            <p>Lorem ipsum dolor sit amet consectetur, laudantium voluptatem explicabo repellat repellendus nulla, sed commodi quaerat. Dolorum exercitationem similique cupiditate quos illum, excepturi, reprehenderit qui sit nisi, reiciendis tenetur veritatis.</p>
          </div>
          <div className={comon.hl}>当ブログについて</div>
          <div className={comon.container}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ipsum ullam saepe, dignissimos quos culpa voluptas consequatur possimus ad incidunt est adipisci obcaecati eius ipsa odio veritatis. Nam, deleniti eveniet nesciunt vitae illo iste aliquam ipsum </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid deserunt maxime modi similique, amet dolorem ipsa atque exercitationem laudantium alias cupiditate, enim reprehenderit explicabo, earum provident expedita quibusdam? Molestias deserunt et distinctio saepe illo, excepturi magnam officiis laudantium voluptatem explicabo repellat repellendus nulla, sed commodi quaerat. Dolorum exercitationem similique cupiditate quos illum, excepturi, reprehenderit qui sit nisi, reiciendis tenetur veritatis.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto amet quisquam magni vero quibusdam modi assumenda, voluptas nihil alias ipsum, aperiam suscipit inventore? Labore consequatur quas similique nulla quaerat porro animi? Ratione aut impedit autem dicta possimus. Quos deleniti harum, neque magnam maxime facilis vero nulla a aut eaque quaerat nesciunt reiciendis molestiae. Consequuntur qui at minus enim nihil maiores cum dignissimos minima ea sint temporibus, quo consectetur libero cumque ipsa? Dolores, vitae recusandae. Cupiditate tenetur nobis possimus optio doloribus cumque et unde quod exercitationem nesciunt eos sint accusantium, hic, nostrum reprehenderit qui quaerat obcaecati dolorem sunt beatae. Deserunt, quidem!</p>
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