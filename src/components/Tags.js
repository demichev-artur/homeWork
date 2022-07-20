import React from "react";

const Tags = props => {

    return (
        <div className="block_line">
            {props.tags.map(item => (<a href={item.href}>{item.title}</a> ))}
        </div>
    )

}

export default Tags;