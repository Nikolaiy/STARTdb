import React, {Component} from "react";
import Row from "../row";
import { PeopleDetails, PeopleList } from "../sw-components";


class PeoplePage extends Component {

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
            <Row left={<PeopleList itemDetails={this.itemDetails} />}
                 right={<PeopleDetails idItem={this.state.idItem}/>}/>
        )
    }
};

export default PeoplePage;