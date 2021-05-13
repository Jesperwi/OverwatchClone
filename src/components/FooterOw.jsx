import React from 'react';
import styled from 'styled-components'

const CelebrationWrapper = styled.div`
display:flex;
flex-direction: column;
height: 130px;
background-repeat: no-repeat;
background-position: -50px -20px;
background-image:url('https://static.playoverwatch.com/img/pages/buy/buy-bar-bg-3c956a1db2.jpg');
`
const CeleTextWrap = styled.div`
display: flex;
flex-direction: column;
box-shadow: 0px 3px 0px grey inset;
height: 130px;
align-items: center;
`

const CeleHead = styled.h1`
font-size: 20px;
text-transform:uppercase;
font-style: italic;
color: white;
margin-top: 1em;
margin-bottom: -0.3em;
`
const CeleIcons = styled.h1`
width: 200px;
height: 34px;
background: grey;
`


const FooterOw = () => {

    return(
        <CelebrationWrapper>
            <CeleTextWrap>
            <CeleHead>Stay connected</CeleHead>
            <CeleIcons/>
            </CeleTextWrap>
        </CelebrationWrapper>
    )
}

export default FooterOw;