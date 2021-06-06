import React from 'react'
import {
    Container,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Text,
    Icon,
    SigninLink,Ptext,
} from "./SignupElements";
import validate from './validateInfo';
import useForm from './useForm';
import FormSignup from "../../Signup/FormSignup";
import FormSuccess from "../../Signup/FormSuccess";

const SignUp = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate);
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to='/'>GetTravel</Icon>
                <FormContent>
                    <Form action="#" onSubmit={handleSubmit} className='form' noValidate>
                        <FormH1>Начните с нами сегодня! Создайте свою учетную запись, заполнив информацию ниже.</FormH1>
                        <FormLabel htmlFor='name'>Имя:</FormLabel>
                        <FormInput ttype='text'
                                   name='username'
                                   placeholder='Введите свое имя пользователя'
                                   required
                                   value={values.username}
                                   onChange={handleChange}
                                    />
                        {errors.username && <Ptext>{errors.username}</Ptext>}
                        <FormLabel htmlFor='for'>Email:</FormLabel>
                        <FormInput type='email'
                                   name='email'
                                   placeholder='Введите свой Email'
                                   required
                                   value={values.email}
                                   onChange={handleChange}
                                    />
                        {errors.email && <Ptext>{errors.email}</Ptext>}
                        <FormLabel htmlFor='for'>Пароль</FormLabel>
                        <FormInput type='password'
                                   name='password'
                                   placeholder='Придумайте пароль'
                                   required
                                   value={values.password}
                                   onChange={handleChange}
                                    />
                        {errors.password && <Ptext>{errors.password}</Ptext>}
                        <FormLabel htmlFor='for'>Повторите пароль</FormLabel>
                        <FormInput type='password'
                                   name='password2'
                                   placeholder='Введите пароль'
                                   required
                                   value={values.password2}
                                   onChange={handleChange}
                                    />
                        {errors.password2 && <Ptext>{errors.password2}</Ptext>}
                        <FormButton type='submit'>Зарегистрироваться</FormButton>
                        <Text>Забыл пароль</Text>
                        <Text>У вас уже есть учетная запись? <SigninLink to="/signin"> Авторизоваться</SigninLink></Text>
                        <Text>Нажимая «Зарегистрироваться», вы подтверждаете, что ознакомлены,
                            полностью согласны и принимаете условия <SigninLink to="/signin">«Пользовательского соглашения»</SigninLink></Text>

                    </Form>
                    
                </FormContent>
            </FormWrap>
        </Container>

        </>
    )
}

export default SignUp;