import React from 'react'
import {ServicesContainer,ServicesCard, ServicesIcon,ServicesH1, ServicesH2,ServicesWrapper,ServicesP} from "./ServicesElements";
import Icon1 from '../../images/svg-5.svg'
import Icon2 from '../../images/svg-6.svg'
import Icon3 from '../../images/svg-3.svg'


const Services = () => {
    return (
        <ServicesContainer id="services">
        <ServicesH1>Как это работает</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                   <ServicesIcon src={Icon1}/>
                   <ServicesH2>Просто</ServicesH2>
                   <ServicesP>Среди миллионов попутчиков вы легко найдете тех, кто рядом и кому с вами по пути.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Быстро</ServicesH2>
                    <ServicesP>Введите город, чтобы увидеть какие маршруты предлагают. Выбирайте сами, с кем хотите отправиться в путешествие.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Построение маршрута</ServicesH2>
                    <ServicesP>Организуйте свой собственный маршрут и ждите единомышленников.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>


        </ServicesContainer>

    );
};

export default Services;