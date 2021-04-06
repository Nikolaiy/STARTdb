import React, {Component} from "react";
import Row from "../row";
import {StarshipsDetails, StarshipsList} from "../sw-components";


class StarshipPage extends Component {

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
            <Row left={<StarshipsList itemDetails={this.itemDetails} />}
                 right={<StarshipsDetails idItem={this.state.idItem}/>}/>
        )
    }
};

export default StarshipPage;