import React from 'react';
import styled from 'styled-components'

const TwoWrapper = styled.div`
display:flex;
background: white;
height: 760px;
padding: 0 17em;
background-repeat: no-repeat;
background-size: cover;
background-position: -800px 0px;
background-image:url(https://static.playoverwatch.com/img/pages/home/featured-news/bg-2560-ebf0f79d83.jpg);
`

const TwoInfoWrap = styled.div`
display: flex;
flex-direction: column;
width: 50%;
margin-top: 4em;
`

const TwoTextWrap = styled.div`
diplay:flex;
`

const TwoHead = styled.h1`
font-size: 20px;
text-transform:uppercase;
line-height: 18px;
color: black;
margin-top: 2em;
`

const CeleOrange = styled.span`
color:  #EF722B;
`


const TwoGrid = styled.div`
display: grid;
grid-template-columns: auto auto;
`

const OStreamer = styled.div`
border: 1px lightgrey solid;
width: 320px;
height: 270px;
margin-right: 1em;
margin-top: 1em;
border-radius: 2px;
`

const Opic = styled.div`
background: #A7A7A7;
display: flex;
width: auto;
height: 170px;
background-image: url(//bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/5e/5EVTOEDBA4BT1618939351248.jpg);
background-repeat: no-repeat;
background-position: -290px -80px;
border-bottom: 1px solid lightgrey;
`

const TextDiv = styled.div`
padding:0 1em;
`

const H2 = styled.h1`
font-size: 15px;
font-weight: bold;
`

const H3 = styled.h2`

font-size: 14px;
`

const CelebrationWrapper = styled.div`
display:flex;
justify-content: flex-start;
align-items: center;
padding-top: 12em;
padding-left: 3em;
flex-direction:column;
`

const Development = styled.p`
text-transform: uppercase;
font-weight: bold;
font-size: 20px;
margin-bottom: -1.5em;
margin-top: 2.5em;

`
const TwoIcon = styled.img`
width: 250px;
height: 250px;
margin-bottom: -2em;
`

const CeleButton = styled.div`
width: 200px;
height: 50px;
background: #141516;
border-radius: 2px;
color: white;
text-transform: uppercase;
font-weight: bold;
font-size: 24px;
text-align: center;
vertical-align: middle;
line-height: 50px;
`


const OverwatchTwo = () => {

    return(
        <TwoWrapper>
            <TwoInfoWrap>
            <TwoTextWrap>
            <TwoHead>Featured News | <CeleOrange>View all ❯</CeleOrange></TwoHead>
            </TwoTextWrap>
            <TwoGrid>
            <OStreamer>
            <Opic/>
            <TextDiv>
                <H2>New Leadership for Overwatch</H2>
                <H3>April 20, 2021</H3>
            </TextDiv>
        </OStreamer>
        <OStreamer>
            <Opic/>
            <TextDiv>
                <H2>Legendary new looks: Behind the scenes of the 2021 
Overwatch Archives skins</H2>
                <H3>April 19, 2021</H3>
            </TextDiv>
        </OStreamer>
        <OStreamer>
            <Opic/>
            <TextDiv>
                <H2>The Overwatch Archives event returns with new 
                    loot and deadlier challenges</H2>
                <H3>April 6, 2021</H3>
            </TextDiv>
        </OStreamer>
        <OStreamer>
            <Opic/>
            <TextDiv>
                <H2>Inside Overwatch: Balance Design
                     and the Experimental Card</H2>
                <H3>March 29, 2021</H3>
            </TextDiv>
        </OStreamer>
        </TwoGrid>
            </TwoInfoWrap>
        <CelebrationWrapper>
            <Development>In development</Development>
            <TwoIcon src="https://static.playoverwatch.com/svg/ow2-logo-0fed8babe1.svg"/>
            <CeleButton>Learn More</CeleButton>
        </CelebrationWrapper>
        </TwoWrapper>
    )
}

export default OverwatchTwo;