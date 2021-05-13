import React from 'react';
import styled from 'styled-components'

const CelebrationWrapper = styled.div`
display:flex;
background: black;
height: 300px;
border-top: gray 0.5px solid;
background-image: url("https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt8cabf9b843b5a4c5/608b03868cca910cd513a006/Evergreen-Lootbox-Banner-Desktop-v2.jpg?auto=webp");
background-repeat: no-repeat;
background-position: -290px -50px;
`
const CeleTextWrap = styled.div`
diplay:flex;
width: 50%;
text-align: right;
align-content: right;
`

const CeleHead = styled.h1`
font-size: 45px;
text-transform:uppercase;
font-style: italic;
line-height: 18px;
color: white;
margin-top: 1.2em;
`

const CeleDesc = styled.p`
font-size: 18px;
margin-bottom: -1em;
color: white;
padding-left: 20em;
line-height: 26px;
`

const CeleSmallDesc = styled.p`
line-height: 24px;
font-style: italic;
font-size: 16px;
color: white;
line-height: 26px;
`

const CeleButton = styled.div`
margin-left:auto;
margin-top: 1.5em;
width: 200px;
height: 45px;
background: #0181D4;
border-radius: 2px;
color: white;
text-transform: uppercase;
font-weight: bold;
font-size: 20px;
text-align: center;
vertical-align: middle;
line-height: 45px;
`

const CeleLoot = () => {

    return(
        <CelebrationWrapper>
            <CeleTextWrap>
            <CeleHead>LEGENDARY +5 LOOT BOXES</CeleHead>
            <CeleDesc>
            Want to amp up your cosmetic collection?
             This bundle includes one Legendary loot box and 5 Classic Loot Boxes for $4.99.*
            </CeleDesc>
            <CeleSmallDesc>
            *Limit one purchase per account. Available on participating platforms only.
            </CeleSmallDesc>
            <CeleButton>Buy loot box</CeleButton>
            </CeleTextWrap>
        </CelebrationWrapper>
    )
}

export default CeleLoot;