import React from 'react'

function Footer() {
    return (
        <div class="container">
            <footer class="py-5">
                <div class="row justify-content-center">                

                    <div class="col-md-12 justify-content-center">
                        <ul class="nav justify-content-center">
                        <li class="nav-item mb-2 mx-2">
                            <a href="/" class="nav-link p-0 text-muted">Home</a></li>                   
                        
                        <li class="nav-item mb-2 mx-2">
                            <a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                        <li class="nav-item mb-2 mx-2">
                            <a href="#" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>             
                
                </div>

                <div class="d-flex justify-content-center 
                        py-4 my-2 border-top">
                    <p>&copy; 2021. All rights reserved.</p>
                
                </div>
            </footer>
        </div>


    )
}

export default Footer
