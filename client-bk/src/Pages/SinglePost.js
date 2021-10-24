import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SinglePost() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3002/posts/byId/${id}`).then((response) => { 
            //setListOfPosts(response.data);
            setPostObject(response.data);
        })
            
        }, []);
    return (
        <div className="container">
             
             <div class="col-md-8">
                <div class="row g-0 border rounded overflow-hidden flex-md-row 
                    mb-4 shadow-sm h-md-250 position-relative" 
                    >
                    <div class="col p-4 d-flex flex-column position-static">
                        <h3 class="mb-0">{postObject.title}</h3>
                        <div class="mb-1 text-muted">
                            {postObject.createdAt} | {postObject.username} </div>
                        <p class="mb-auto">
                            {postObject.postText}</p>
                        
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img class="bd-placeholder-img" width="200" height="250" 
                            src="" role="img" 
                            aria-label="Placeholder: Thumbnail" 
                            preserveAspectRatio="xMidYMid slice" focusable="false"/>                                        

                    </div>
                    
                </div>
                <div class="col-md-6 m-3">
                        
                        <div class="p-4 d-flex flex-column 
                            position-static">
                            <h3 class="mb-0">{postObject.title}</h3>
                            <div class="mb-1 text-muted">
                                Nov 11 | {postObject.username} </div>
                            <p class="mb-auto">
                                {postObject.postText}.</p>                                
                        </div>                    
                </div> 
            </div>
            
             
        </div>
    )
}

export default SinglePost
