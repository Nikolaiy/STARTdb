import React from "react";
import {SwapiServiceConsumer} from "../swapi-service-context";

const withSwapiService = (mapMethodToProps) => (Wrapper) => (props) => {
    return (
        <SwapiServiceConsumer>
            {
                (swapiService) => {
                    const servisProps = mapMethodToProps(swapiService);
                    return (
                        <Wrapper {...props} {...servisProps}/>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};

export default withSwapiService;