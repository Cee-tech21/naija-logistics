import React from 'react';
import { useParams } from 'react-router-dom';

function SinglePost() {
    let { id } = useParams();
    return (
        <div>
             { id }
        </div>
    )
}

export default SinglePost
