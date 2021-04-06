import React, {Component} from 'react';

import './random-planet.css'
import SwapiService from "../../swapi-service/swapi-service";
import Spinner from "../spinner";
import PlanetView from "./planet-view";
import ErrorIndication from "../error-indication/error-indication";

export default class RandomPlanet extends Component {

    SwapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
    };

    componentDidMount() {
        this.onRandomPlanet();
        this.interval = setInterval(this.onRandomPlanet, 10000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onPlanetLoading = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false,
        })
    };

    onError = (err) => {
        this.setState({
            loading: false,
            error: true
        })
    };

    onRandomPlanet = () => {
        const id = Math.floor(Math.random() * 25) + 2;
        this.SwapiService.getPlanet(id)
            .then(this.onPlanetLoading)
            .catch(this.onError)
    };


    render() {

        const {planet, loading, error} = this.state;

        const loadData = !(error || loading);

        const errorMessages = error ? <ErrorIndication /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = loadData ? <PlanetView planet={planet}/> : null;

        return (
            <div className='card p-4'>
                {errorMessages}
                {spinner}
                {content}
            </div>
        )
    }
};

