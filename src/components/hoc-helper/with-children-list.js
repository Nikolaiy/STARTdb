import React from 'react';

const withChildrenList = (fn) => (Wrapper) => (props) => {
    return (
        <Wrapper {...props}>
            {fn}
        </Wrapper>)
};

export default withChildrenList;
