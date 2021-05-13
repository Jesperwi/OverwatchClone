import React from 'react';
import styled from 'styled-components'


const CelebrationWrapper = styled.div`
display:flex;
background-repeat: no-repeat;
background-position: -220px -30px;
background-image: url('https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltc424f99fa4ed7a53/5d9560a541d64904687cf013/Buy-Footer-BG-2560.jpg?auto=webp');
height: 230px;
justify-content: flex-end;
border-top: lightgray 0.5px solid;

`
const CeleTextWrap = styled.div`
diplay:flex;
width: 50%;
padding-left: 3em;
`

const CeleHead = styled.h1`
font-size: 55px;
text-transform:uppercase;
font-style: italic;
line-height: 18px;
margin-top: 1em;
color: #4B535D;

`

const CeleDesc = styled.p`
width: 57%;
font-size: 18px;
margin-bottom: -0.7em;
color: #4B535D;
`

const CeleButton = styled.div`
margin-top: 1.5em;
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


const Icon = styled.img`
diplay:flex;
width: 50%;
align-content: right;
width: 300px;
height: 200px;

margin-top: 1em;
`

const FooterBuyNow = () => {

    return(
    
        <CelebrationWrapper>
            <Icon src="https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt138432be14780f67/5dd4935d0386806c8e4e1001/Buy-Footer-Art.png?auto=webp"/>
            <CeleTextWrap>
            <CeleHead>BEGIN YOUR WATCH</CeleHead>
            <CeleDesc>
            Join the fight for the future in the ultimate team-based shooter.
            </CeleDesc>
            <CeleButton>Buy Now</CeleButton>
            </CeleTextWrap>
        </CelebrationWrapper>

    )
}

export default FooterBuyNow;