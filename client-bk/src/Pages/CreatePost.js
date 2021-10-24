import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CreatePost() {   

    let history = useHistory();
    const initialValues = {
        title: "",
        postText: "",
        email: "",
    }
    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        email: Yup.string().min(4).max(15).required(),
    })
    const onSubmit = (data) => {
        axios.post("http://localhost:3002/posts", data).then((response) => {
            history.push("/posts");
        })

    }

    return (
        <div>

            <main class="form-signin">
            <Formik initialValues={initialValues} onSubmit={onSubmit}
                    validationSchema={validationSchema}>
                <Form>
                    <h3 class="mb-3 fw-normal">Send a message</h3>              
                    <div class="form-floating">
                    <Field name="title" type="text" class="form-control"                     
                        placeholder="Example title..."
                        />
                    <label for="floatingInput">Enter title</label>
                    <ErrorMessage name="title" component="span" className="text-warning"/>
                    </div>

                    <div class="form-floating">
                    <Field name="postText" type="text" class="form-control"                     
                        placeholder="Example title..."
                        />
                    <label for="floatingInput">Enter message</label>
                    <ErrorMessage name="postText" component="span" 
                            className="text-warning"/>
                    </div>

                    <div class="form-floating">
                    <Field name="email" type="text" class="form-control"                     
                        placeholder="Example title..."
                        />
                    <label for="floatingInput">Enter email address</label>
                    <ErrorMessage name="email" component="span" 
                            className="text-warning"/>
                    </div>                                   

                    
                    <button class="w-100 btn btn-lg btn-secondary" 
                            type="submit"                        
                            >
                                Send message</button>
                </Form>
            </Formik>
        </main>
        </div>
    )
}

export default CreatePost
