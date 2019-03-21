import React from 'react'

import imageNotAvailable from '../../assets/Image/image_not_available.png';

const styles = {
    width: "100px",
    height: "100px",
    marginRight: "10px"
};

const MessageThumbnail = props => {
    let image = imageNotAvailable;
    if (props.image) {
        image = 'http://localhost:10000/uploads/' + props.image
    }

    return <img src={image} style={styles} alt="Message image"/>;
};

export default MessageThumbnail;