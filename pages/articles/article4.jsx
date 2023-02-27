import { Category } from "components/Category/Category";
import { Header } from "components/Header/Header";
import styles from "styles/Home.module.css"
import comon from "styles/Comon.module.css"
import { Up_Side } from "components/Up_Side";
import Image from "next/image";
import art4 from "img/article-imgs/art4.jpg"
import Head from "next/head";

export default function article4(){
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

          {/* 内容 */}
          <div className={comon.date}>
            <p>2023/02/23</p>
            <div className={comon.opprogram}>プログラミング</div>
          </div>
          <div className={comon.hlbox}>【ProgramingStudy④】 Lorem ipsum dolor sit.</div>
          <Image src={art4} alt="記事画像" className={comon.titleimg}/>
          <div className={comon.indexbox}>
            <div className={comon.indextitle}>Index</div>
            <ol>
              <li><span>1.</span>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li><span>2.</span>Lorem ipsum dolor sit amet.</li>
              <li><span>3.</span>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
              <li><span>4.</span>Lorem ipsum dolor sit amet consectetur.</li>
            </ol>
          </div>
          <div className={comon.hl}>1.Lorem ipsum dolor sit amet consectetur.</div>
          <div className={comon.container}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ipsum ullam saepe, dignissimos quos culpa voluptas consequatur possimus ad incidunt est adipisci obcaecati eius ipsa odio veritatis. Nam, deleniti eveniet nesciunt vitae illo iste aliquam ipsum </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid deserunt maxime modi similique, amet dolorem ipsa atque exercitationem laudantium alias cupiditate, enim reprehenderit explicabo, earum provident expedita quibusdam? Molestias deserunt et distinctio saepe illo, excepturi magnam officiis laudantium voluptatem explicabo repellat repellendus nulla, sed commodi quaerat. Dolorum exercitationem similique cupiditate quos illum, excepturi, reprehenderit qui sit nisi, reiciendis tenetur veritatis.</p>
          </div>
          <div className={comon.hl}>2.Lorem ipsum dolor sit amet consectetur.</div>
          <div className={comon.container}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ipsum ullam saepe, dignissimos quos culpa voluptas consequatur possimus ad incidunt est adipisci obcaecati eius ipsa odio veritatis. Nam, deleniti eveniet nesciunt vitae illo iste aliquam ipsum </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid deserunt maxime modi similique, amet dolorem ipsa atque exercitationem laudantium alias cupiditate, enim reprehenderit explicabo, earum provident expedita quibusdam? Molestias deserunt et distinctio saepe illo, excepturi magnam officiis laudantium voluptatem explicabo repellat repellendus nulla, sed commodi quaerat. Dolorum exercitationem similique cupiditate quos illum, excepturi, reprehenderit qui sit nisi, reiciendis tenetur veritatis.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto amet quisquam magni vero quibusdam modi assumenda, voluptas nihil alias ipsum, aperiam suscipit inventore? Labore consequatur quas similique nulla quaerat porro animi? Ratione aut impedit autem dicta possimus. Quos deleniti harum, neque magnam maxime facilis vero nulla a aut eaque quaerat nesciunt reiciendis molestiae. Consequuntur qui at minus enim nihil maiores cum dignissimos minima ea sint temporibus, quo consectetur libero cumque ipsa? Dolores, vitae recusandae. Cupiditate tenetur nobis possimus optio doloribus cumque et unde quod exercitationem nesciunt eos sint accusantium, hic, nostrum reprehenderit qui quaerat obcaecati dolorem sunt beatae. Deserunt, quidem!</p>
          </div>
          <div className={comon.hl}>3.Lorem ipsum dolor sit amet consectetur.</div>
          <div className={comon.container}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ipsum ullam saepe, dignissimos quos culpa voluptas consequatur possimus ad incidunt est adipisci obcaecati eius ipsa odio veritatis. Nam, deleniti eveniet nesciunt vitae illo iste aliquam ipsum </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid deserunt maxime modi similique, amet dolorem ipsa atque exercitationem laudantium alias cupiditate, enim reprehenderit explicabo, earum provident expedita quibusdam? Molestias deserunt et distinctio saepe illo, excepturi magnam officiis laudantium voluptatem explicabo repellat repellendus nulla, sed commodi quaerat. Dolorum exercitationem similique cupiditate quos illum, excepturi, reprehenderit qui sit nisi, reiciendis tenetur veritatis.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto amet quisquam magni vero quibusdam modi assumenda, voluptas nihil alias ipsum, aperiam suscipit inventore? Labore consequatur quas similique nulla quaerat porro animi? Ratione aut impedit autem dicta possimus. Quos deleniti harum, neque magnam maxime facilis vero nulla a aut eaque quaerat nesciunt reiciendis molestiae. Consequuntur qui at minus enim nihil maiores cum dignissimos minima ea sint temporibus, quo consectetur libero cumque ipsa? Dolores, vitae recusandae. Cupiditate tenetur nobis possimus optio doloribus cumque et unde quod exercitationem nesciunt eos sint accusantium, hic, nostrum reprehenderit qui quaerat obcaecati dolorem sunt beatae. Deserunt, quidem!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto amet quisquam magni vero quibusdam modi assumenda, voluptas nihil alias ipsum, aperiam suscipit inventore? Labore consequatur quas similique nulla quaerat porro animi? Ratione aut impedit autem dicta possimus. Quos deleniti harum, neque magnam maxime facilis vero nulla a aut eaque quaerat nesciunt reiciendis molestiae. Consequuntur qui at minus enim nihil maiores cum dignissimos minima ea sint temporibus, quo consectetur libero cumque ipsa? Dolores, vitae recusandae. Cupiditate tenetur nobis possimus optio doloribus cumque et unde quod exercitationem nesciunt eos sint accusantium, hic, nostrum reprehenderit qui quaerat obcaecati dolorem sunt beatae. Deserunt, quidem!</p>
          </div>
          <div className={comon.hl}>4.Lorem ipsum dolor sit amet consectetur.</div>
          <div className={comon.container}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ipsum ullam saepe, dignissimos quos culpa voluptas consequatur possimus ad incidunt est adipisci obcaecati eius ipsa odio veritatis. Nam, deleniti eveniet nesciunt vitae illo iste aliquam ipsum </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid deserunt maxime modi similique, amet dolorem ipsa atque exercitationem laudantium alias cupiditate, enim reprehenderit explicabo, earum provident expedita quibusdam? Molestias deserunt et distinctio saepe illo, excepturi magnam officiis laudantium voluptatem explicabo repellat repellendus nulla, sed commodi quaerat. Dolorum exercitationem similique cupiditate quos illum, excepturi, reprehenderit qui sit nisi, reiciendis tenetur veritatis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, tenetur.</p>
          </div>
          {/* /内容 */}

        </div>
        <div className={styles.side}>
          <Up_Side />
        </div>
      </div>
    </div>
    </>
  )
}