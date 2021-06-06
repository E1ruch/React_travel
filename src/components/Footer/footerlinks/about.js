import React from 'react'
import Footer from "../index";
import styled from "styled-components";
import {Link} from "react-router-dom";
const AboutPr = () => {
    return (
        <>
            <Container>
                <FormWrap>
                <Icon to='/'>GetTravel</Icon>
                    <FormContent>
                        <Form>
                            <FormH1>О проекте</FormH1>



                    </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            <Footer />
        </>
    )
}

export default AboutPr;
export const Container =styled.div`
  min-height: 692px;
  position: center;
  bottom: 0;
  left: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(108deg,
  rgba(229, 227, 227, 0.45) 0%,
  rgba(229, 227, 227, 0.45) 100%);
`
export const Icon = styled(Link)`
margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #101522;
  font-weight: 700;
  font-size: 32px;
  
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`
export const FormWrap = styled.div`
height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
@media screen and (max-width: 400px) {
  height: 80%;
}
`
export const FormContent = styled.div`
height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`
export const Form = styled.form`
  background: #fff;
  max-width: 700px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 90px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(172, 169, 169, 0.15);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`
export const FormH1 = styled.h1`
margin-bottom: 40px;
  color: #101522;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`