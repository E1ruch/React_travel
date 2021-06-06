import React, {useState} from 'react'
import  Video from '../../videos/video11.mp4'
import  { Button } from "../ButtonElements";
import  {HeroContainer, HeroBg, VideoBg, ArrowForward, ArrowRight, HeroContent, HeroBtnWrapper, HeroH1, HeroP} from "./HeroElements";


const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type ='video/mp4' />
        </HeroBg>
            <HeroContent>
                <HeroH1>Get Travel - Cообщество туристов и авантюристов</HeroH1>
                <HeroP>
                    Тут планируют самостоятельный или организованный отдых.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true'
                            dark='true'
                    >
                        Начать {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );

};

export default HeroSection

