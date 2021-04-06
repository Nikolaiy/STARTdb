import React from "react";
import Record from "../record";
import ItemDetail from "../item-detail";
import {withSwapiService} from "../hoc-helper";

const PeopleDetails = (props) => {
    return (
        <ItemDetail {...props}>
            <Record label={'Gender'} field={'gender'}/>
            <Record label={'Birth Year'} field={'birthYear'}/>
        </ItemDetail>
    )
};

const mapMethodToProps = (swapiService) => ({
    getData: swapiService.getPeople,
    urlImages: swapiService.getImagePeople
});

export default withSwapiService(mapMethodToProps)(PeopleDetails);