//import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react'
import { useState } from 'react';
import {MdFlight} from 'react-icons/md';
import {GiShipBow} from 'react-icons/gi';
import {GrTrain} from 'react-icons/gr';


function TransportMode() {
    const [hasVoted, setHasVoted] = useState(false);

    
    return (
        <div className="container my-5">    
            <div className="row mx-4 my-2">
            { hasVoted ? <p className="h2 d-flex justify-content-center">
                 Selection registered</p> 
                : <p className="h2 d-flex justify-content-center"> 
           
                    Select international delivery option</p>                 
            
            }
            </div>       
            <div className="d-flex justify-content-center mb-5">
                <p className="h3 mx-3 col-5"> <MdFlight className="mx-3"/> 
                        Flight
                </p>
                { hasVoted ? <p className=""> Selection registered</p> 
                : 
                <div className="form-check form-switch">
                <input type="checkbox" className="w-30 form-check-input" 
                    onClick={() => setHasVoted(true)}/>
                   
                </div>
                }
                
            </div>
            <div className="d-flex justify-content-center mb-5">
                <p className="h3 mx-3 col-5"> <GiShipBow className="mx-3"/> 
                    Sea </p>
                { hasVoted ? <p className=""> Selection registered</p> 
                : 
                <div className="form-check form-switch">
                <input type="checkbox" className="w-30 form-check-input" 
                    onClick={() => setHasVoted(true)}/>
                   
                </div>
                }
            </div>
            <div className="d-flex justify-content-center mb-5">
                <p className="h3 mx-3 col-5"> <GrTrain className="mx-3"/> 
                    Rail                
                </p>
                { hasVoted ? <p className=""> Selection registered</p> 
                : 
                <div className="form-check form-switch">
                <input type="checkbox" className="w-30 form-check-input" 
                    onClick={() => setHasVoted(true)}/>
                   
                </div>
                }
            </div>          
            
        </div>
    )
}

export default TransportMode
