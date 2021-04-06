import React from 'react';
import './item-list.css'

const ItemList = (props) => {

    const renderList = (arr) => {
        return arr.map((item) => {

            const {id} = item;
            const label = props.children(item);

            return (
                <li className='list-group-item' key={id}
                    onClick={() => props.itemDetails(id)}>
                    <a href="#">
                        {label}
                    </a>
                </li>
            )
        });
    };

        return (
            <div className='card w-50 mt-4'>
                <ul className='list-group item-list'>
                    {renderList(props.data)}
                    {props.hasError}
                </ul>
            </div>
        )
};

export default ItemList;