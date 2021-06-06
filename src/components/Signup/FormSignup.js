import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                    Начните с нами сегодня! Создайте свою учетную запись, заполнив информацию ниже.
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Имя</label>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='Введите свое имя пользователя'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Введите свой Email'
                        value={values.email}
                        onChange={handleChange}
                        />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Пароль</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Придумайте пароль'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Повторите пароль</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password2'
                        placeholder='Введите пароль'
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className='form-input-btn' type='submit'>
                    Зрегистрироваться

                </button>
                <span className='form-input-login'>
          У вас уже есть учетная запись?  <a href='#'>Авторизоваться</a>
        </span>
            </form>
        </div>
    );
};

export default FormSignup;