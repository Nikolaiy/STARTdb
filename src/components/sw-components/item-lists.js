import React from 'react';
import ItemList from '../item-list'
import {WithData, withSwapiService, withChildrenList} from '../hoc-helper'

const renderName = (item) => <span>{item.name}</span>

const compose = (...funcs) => (Wrapper) => {
    return funcs.reduceRight((prevResult, fn) => fn(prevResult), Wrapper)
};

const mapPeopleToProps = (swapiService) => ({
    getData: swapiService.getAllPeople
});

const mapPlanetsToProps = (swapiService) => ({
    getData: swapiService.getAllPlanet
});

const mapStarshipsToProps = (swapiService) => ({
    getData: swapiService.getAllStarship
});

const PeopleList = compose(withSwapiService(mapPeopleToProps),
    WithData,
    withChildrenList(renderName))
(ItemList);

const PlanetsList = compose(withSwapiService(mapPlanetsToProps),
    WithData,
    withChildrenList(renderName))
(ItemList);

const StarshipsList = compose(withSwapiService(mapStarshipsToProps),
    WithData,
    withChildrenList(renderName))
(ItemList);

export {
    PeopleList,
    PlanetsList,
    StarshipsList
}