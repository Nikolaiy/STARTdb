import React from 'react';
import planetPandom from './planet.jpg'

const PlanetView = ({planet}) => {

    const {id, name, population, diameter, rotationPeriod} = planet;

    return (
        <>
            <div className='d-flex'>
                <div className='img-planet mr-5'>
                    <img
                        src={`https://starwars-visualguide.com//assets/img/planets/${id}.jpg`}
                        alt=""/>
                </div>
                <div>
                    <h2 className='card-title'>{name}</h2>
                    <div>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>Population <span>{population}</span></li>
                            <li className='list-group-item'>Rotation Period <span>{rotationPeriod}</span></li>
                            <li className='list-group-item'>Diametr <span>{diameter}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};

export default PlanetView;