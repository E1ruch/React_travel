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
    SigninLink
} from "./SigninElements";


const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to='/'>GetTravel</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Войдите в свою учетную запись</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Войти</FormButton>
                        <Text>Забыл пароль</Text>
                        <Text>Ещё не с нами? <SigninLink to="/signup">Зарегистрироваться</SigninLink></Text>

                    </Form>

                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default SignIn;