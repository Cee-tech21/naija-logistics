//import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react'
import { useState, useEffect } from 'react'

function RegisterClicks() {
    const [hasVoted, setHasVoted] = useState(false);

    
    return (
        <div className="container my-5">            
            <div className="d-flex justify-content-center mb-5">
                <p className="h3 mx-3 col-5"> James Augustine</p>
                { hasVoted ? <p className="">You have voted</p> 
                : 
                <button className="w-30 btn btn-lg btn-secondary" 
                    onClick={() => setHasVoted(true)}>
                    Vote now
                </button>
                }
            </div>
            <div className="d-flex justify-content-center mb-5">
                <p className="h3 mx-3 col-5"> Brandon Halle</p>
                { hasVoted ? <p className="">You have voted</p> 
                : 
                <button className="w-30 btn btn-lg btn-secondary" 
                    onClick={() => setHasVoted(true)}>
                    Vote now
                </button>
                }
            </div>
            <div className="d-flex justify-content-center mb-5">
                <p className="h3 mx-3 col-5"> John Ray</p>
                { hasVoted ? <p className="">You have voted</p> 
                : 
                <button className="w-30 btn btn-lg btn-secondary" 
                    onClick={() => setHasVoted(true)}>
                    Vote now
                </button>
                }
            </div>
            <div className="d-flex justify-content-center mb-5">

                <p className="h3 mx-3 col-5"> Jane Alice</p>
                
                { hasVoted ? <p className="">You have voted</p> 
                : 
                <button className="w-30 btn btn-lg btn-secondary" 
                    onClick={() => setHasVoted(true)}>
                    Vote now
                </button>
                }
                
            </div>
            
        </div>
    )
}

export default RegisterClicks
