import React from "react";

const Row = ({left, right}) => {
    return (
        <div className='block-info d-flex justify-content-between'>
            {left}
            {/*<div className='card w-50 mt-4'>*/}
            {/*    <ul className='list-group item-list'>*/}
            {/*        {left}*/}
            {/*    </ul>*/}
            {/*</div>*/}
            {right}
        </div>
    )
};

export default Row;