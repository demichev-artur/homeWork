import React from "react";

const Raiting = props => {

    let stars = [];

    for(let i = 0; i < props.starCount; i++)
    {
        if(i < props.starRaiting){
            stars.push("fa fa-star checked");
        }else{
            stars.push("fa fa-star");
        }
    }

    return (

        <div className="block_line">
           {stars.map( item => (<span className={item}/>))}
        </div>

    )

}

export default Raiting;