import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';


function PostsRender() {
    let singlePost = useHistory();

    const [listOfPosts, setListOfPosts] = useState([]);
    const imgPath = "bear.jpg";
    

    useEffect(() => {
        axios.get("http://localhost:3002/posts").then((response) => { 
            setListOfPosts(response.data);
        });
        
    }, []);

    return (
        <div class="container">
        {listOfPosts.map((value, key)=>{
        return  <div > 
                    <div class="col-md-10">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row 
                            mb-4 shadow-sm h-md-250 position-relative" 
                            >
                            <div class="col p-4 d-flex flex-column position-static"
                                // onClick={singlePost.push(`/single-post/${value.username}`)}
                                >
                                <h3 class="mb-0">{value.title}</h3>
                                <div class="mb-1 text-muted">
                                    Nov 11 | {value.username} </div>
                                <p class="mb-auto">
                                    {value.postText}.</p>
                                <a href=""
                                    // class="stretched-link"
                                >
                                    Continue reading</a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <img class="bd-placeholder-img" width="200" height="250" 
                                    src={ imgPath } role="img" 
                                    aria-label="Placeholder: Thumbnail" 
                                    preserveAspectRatio="xMidYMid slice" focusable="false"/>                                        

                            </div>
                        </div>
                    </div>
                </div>

        })}
        </div>
    )
}

export default PostsRender
