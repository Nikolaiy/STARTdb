import React, {Component} from "react";
import Spinner from "../spinner";
import ErrorIndication from "../error-indication/error-indication";

const WithData = (Wiev) => {
    return class extends Component {

        state = {
            data: null,
            error: false,
            idItem: null
        };

        componentDidUpdate(prevProps, prevState, snapshot) {
            if  (prevProps.getData !== this.props.getData) {
                this.onGetData()
            }
        }

        componentDidMount() {
            this.onGetData()
        }

        onError = () => {
            this.setState({
                error: true
            })
        };

        onGetData = () => {
            this.props.getData()
                .then(data => {
                    this.setState({
                        data
                    })
                }).catch(this.onError)
        };


        render() {
            const {data, error} = this.state;

            if (!data) {
                return <div className='spinner-item'><Spinner/></div>
            }

            const hasError = error ? <ErrorIndication/> : null;

            return (
                <Wiev data={data} hasError={hasError} itemDetails={this.props.itemDetails}/>
            )
        }
    }
};

export default WithData