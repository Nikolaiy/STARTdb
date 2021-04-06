import React from "react";

const Record = ({item, label, field}) => {
    return (
        <li className='list-group-item'>
            {label}: <span>{item[field]}</span>
        </li>
    )
};

export default Record