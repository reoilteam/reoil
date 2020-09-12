import React, { useLayoutEffect } from 'react';
const Media = ({ title, favicon }) => {
    useLayoutEffect(() => {
        document.title = title;
        document.querySelector('link[rel=icon]').setAttribute('href', favicon);
    }, []);
    return (React.createElement(React.Fragment, null));
};
export default Media;
