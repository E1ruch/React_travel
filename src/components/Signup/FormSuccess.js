import React from 'react';
import './Form.css';

const FormSuccess = () => {
    return (
        <div className='form-content-right'>
            <h1 className='form-success'>Поздравляем с регистрацией!</h1>
            <img className='form-img-2' src='img/success.svg' alt='success-image' />
        </div>
    );
};

export default FormSuccess;