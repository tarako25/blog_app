import Trial from "@/pages/Trial"

const article =[
    {
        text : "one",
        href : "asdas"
    },
    {
        text : "two",
        href : "aaasd"
    },
    {
        text : "three",
        href : "adsasd"
    },
]

export function Update(){
    return(
        <div>
        <Trial article = {article}/>
        </div>
    )
    }