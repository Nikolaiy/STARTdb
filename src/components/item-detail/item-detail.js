import React, {Component} from 'react';
import './item-detail.css'
import ErrorButton from "../error-button";

export default class ItemDetail extends Component {

    state = {
        item: null,
        images: null
    };

    componentDidMount() {
        this.onInfoPerson()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.idItem !== this.props.idItem ||
            prevProps.getData !== this.props.getData ||
            prevProps.urlImages !== this.props.urlImages) {
            this.onInfoPerson()
        }
    }

    onInfoPerson = () => {
        const {idItem, getData} = this.props;
        if (!idItem) {
            return;
        }

        getData(idItem)
            .then((item) => {
                this.setState({
                    item,
                    images: this.props.urlImages(idItem)
                })
            })
    };

    render() {

        if (!this.state.item) {
            return <div className='card-title m-auto'>Loading Person Information ...</div>
        }

        const {item, images} = this.state;

        return (
            <div className='card w-50 ml-5 mt-4 starship h-100'>
                <div className='d-flex pt-2'>
                    <div className='people'>
                        <img
                            src={images}
                            alt=""/>
                    </div>
                    <div>
                        <h4 className='card-title'>{item.name}</h4>
                        <div>
                            <ul className='list-group list-group-flush ml-4'>
                                {React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='btn '>
                    <ErrorButton/>
                </div>
            </div>
        )
    }
};


