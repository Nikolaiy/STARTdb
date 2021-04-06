import React, {Component} from "react";
import Row from "../row";
import { PlanetsDetails, PlanetsList } from "../sw-components";


class PlanetPage extends Component {

    state = {
        idItem: null,
    };

    itemDetails = (id) => {
        this.setState({
            idItem: id
        })
    };

    render () {
        return (
            <Row left={<PlanetsList itemDetails={this.itemDetails} />}
                 right={<PlanetsDetails idItem={this.state.idItem}/>}/>
        )
    }
};

export default PlanetPage;