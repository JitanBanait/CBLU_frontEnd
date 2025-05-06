import React from "react"
import ReactDOM from "react-dom/client" 





let HeadingComponent = (props)=>{
    return(
       <button>{props.props}</button>         
    )
}


let h3 = (
    <h3>
    <HeadingComponent props={"submit"}/>
        heading three
    </h3>
)

let h2 = (

    <h2>
    <HeadingComponent/>
        heading two
    </h2>
)



let root = ReactDOM.createRoot(document.getElementById("parent"))

root.render(h3)

