import React, {Component} from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import './app.css'
import ErrorButton from "../error-button";
import ErrorIndication from '../error-indication/error-indication';
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from "../../swapi-service/swapi-service";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";
import DummySwapiService from "../../swapi-service/dummy-swapi-service";

export default class App extends Component {

    state = {
        error: false,
        swapiService: new SwapiService()
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    toggleService = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof  SwapiService ? DummySwapiService : SwapiService;

            return {
                swapiService: new Service()
            }
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorIndication/>
        }

        return (
            <div className='container'>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div><Header toggleService={this.toggleService}/></div>
                    <div><RandomPlanet/></div>
                    <ErrorButton/>

                    <PeoplePage />
                    <PlanetPage />
                    <StarshipPage />

                </SwapiServiceProvider>
            </div>
        )
    }
};

