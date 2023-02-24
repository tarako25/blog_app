import art4 from "@/img/article-imgs/art4.jpg"
import art3 from "@/img/article-imgs/art3.jpg"
import art2 from "@/img/article-imgs/art2.jpg"
import art1 from "@/img/article-imgs/art1.jpg"
import { Main } from "./Main/Main";


export function Up_Top(){

  /* 記事map関数 */
  const articles = [
    {
      id:4,
      picture:art4,
      text:"ProgramingStudy④】 Lorem ipsum dolor sit.",
      href:"./articles/article4",
      alt:"記事の画像"
    },
    {
      id:3,
      picture:art3,
      text:"ProgramingStudy③】 Lorem ipsum dolor sit.",
      href:"./articles/article3",
      alt:"記事の画像"
    },
    {
      id:2,
      picture:art2,
      text:"ProgramingStudy②】 Lorem ipsum dolor sit.",
      href:"./articles/article2",
      alt:"記事の画像"
    },
    {
      id:1,
      picture:art1,
      text:"ProgramingStudy①】 Lorem ipsum dolor sit.",
      href:"./articles/article1",
      alt:"記事の画像"
    }
  ]
  /* /記事map関数 */

  /* 新着記事map関数 */

  const newarticles =[

      articles[0],
      articles[1],
  ]

  /* /新着記事map関数 */
  return(
    <div>
      <Main
       articles = {articles}
       newarticles ={newarticles}
       />
    </div>
  )
}