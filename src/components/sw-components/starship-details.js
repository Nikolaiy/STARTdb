import React from "react";
import Record from "../record";
import ItemDetail from "../item-detail";
import withSwapiService from "../hoc-helper/with-swapi-service";


const StarshipsDetails = (props) => {
    return (
        <ItemDetail {...props}>
            <Record label={'Model'} field={'model'}/>
            <Record label={'Length'} field={'length'}/>
        </ItemDetail>
    )
};

const mapMethodToProps = (swapiService) => ({
    getData: swapiService.getStarship,
    urlImages: swapiService.getImageStarship
});

export default withSwapiService(mapMethodToProps)(StarshipsDetails);
