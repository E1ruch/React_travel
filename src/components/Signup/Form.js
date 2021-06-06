import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import Footer from "../Footer";
import {Icon} from "../Signin/SigninElements";
import {Container} from "../Signin/SigninElements";

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <Container>
            <Icon to='/'>GetTravel</Icon>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img className='form-img' src='img/form.svg' alt='spaceship' />
                </div>
                {!isSubmitted ? (
                    <FormSignup submitForm={submitForm} />
                ) : (
                    <FormSuccess />
                )}
            </div>
            <Footer />
            </Container>
        </>
    );
};

export default Form;