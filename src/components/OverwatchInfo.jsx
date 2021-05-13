import React from 'react';
import styled from 'styled-components'

const StreamWrap = styled.div`
display: flex;
flex-direction: row;
height: 540px;
justify-content: center;
margin-top: 4em;
margin-bottom: -5em
`

const Oinfo = styled.div`
width: 540px;
height: 370px;
padding-right:1em;
line-height: 26px;
`

const Logo1 = styled.img`
width: 180px;
height: auto;
margin-bottom: -1em;
`

const H1 = styled.h1`
vertical-align: middle;
line-height: 20px;
color: #6C7CFF;
font-size: 50px;
line-height: 40px;
text-transform: uppercase;
font-style: italic;
-webkit-font-smoothing: antialiased;
letter-spacing: 1px;
`

const H1Desc = styled.p`
font-size: 18px;

`

const OinfoButton = styled.div`
width: 200px;
height: 45px;
background: #F1732B;
border-radius: 2px;
color: white;
text-transform: uppercase;
font-weight: bold;
font-size: 20px;
text-align: center;
vertical-align: middle;
line-height: 45px;
`

const OStreamer = styled.div`
border: 1px black solid;
width: 390px;
height: 285px;
margin-right: 1em;
`

const Opic = styled.div`

display: flex;
width: auto;
height: 200px;
border-bottom: solid 1px grey;
background-image: url("https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt3b0c7e7cf0984a46/602f1a45ee3eea3d58382a7d/OW_HeartOverwatch_EpicMoments_Timthetatman_WebThumbnail_842x476_MB01.jpg?auto=webp");
`

const PlayButton = styled.div`
position: relative;
background: #F1732B;
width: 35px;
height: 35px;
margin-top: auto;
`

const TimeText = styled.div`
background: #F2F1ED;
width: 45px;
height: 35px;
margin-left: 2em;
text-align: center;
vertical-align: middle;
line-height: 40px;
`

const TextDiv = styled.div`
padding:0 1em;
`

const H2 = styled.h1`
font-size: 20px;
color: #676E76;
`

const H3 = styled.h2`

font-size: 15px;
`


const OverwatchInfo = () => {

return(
    <StreamWrap>
        <Oinfo>
            <Logo1 aria-hidden="true" src="https://static.playoverwatch.com/img/pages/community-video-page/heartOW-logo-blue-d63ecbd36f.png"/>
            <H1>♥ Overwatch</H1>
            <H1Desc>Check out videos from Overwatch content creators where
                 they share their stories and secrets.
                 From epic moments to tips & tricks
                , learn from community members so you can play like the best and be better 
                than the rest.</H1Desc>
            <OinfoButton>Learn more</OinfoButton>
        </Oinfo>
        <OStreamer>
            <Opic>
                <PlayButton>
                    <TimeText>0:30</TimeText>
                </PlayButton>
            </Opic>
            <TextDiv>
                <H2>Nice Clean Crisp</H2>
                <H3>Nice Clean Crisp</H3>
            </TextDiv>
        </OStreamer>
        <OStreamer>
            <Opic>
                <PlayButton>
                    <TimeText>0:30</TimeText>
                </PlayButton>
            </Opic>
            <TextDiv>
                <H2>Nice Clean Crisp</H2>
                <H3>Nice Clean Crisp</H3>
            </TextDiv>
        </OStreamer>
    </StreamWrap>
)

}

export default OverwatchInfo;