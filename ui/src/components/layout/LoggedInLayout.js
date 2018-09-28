import React from 'react';
import PropTypes from 'prop-types';


const Layout = props => (
    <div>
        {props.children}
    </div>
);

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
