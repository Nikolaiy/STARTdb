import React from "react";
import Record from "../record";
import ItemDetail from "../item-detail";
import {withSwapiService} from "../hoc-helper";

const PlanetsDetails = (props) => {
    return (
        <ItemDetail {...props}>
            <Record label={'Diameter'} field={'diameter'}/>
            <Record label={'Population'} field={'population'}/>
        </ItemDetail>
    )
};

const mapMethodToProps = (swapiService) => ({
    getData: swapiService.getPlanet,
    urlImages: swapiService.getImagePlanet
});

export default withSwapiService(mapMethodToProps)(PlanetsDetails)
