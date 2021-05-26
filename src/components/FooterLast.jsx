import React from 'react';
import styled from 'styled-components'

const CelebrationWrapper = styled.div`
display:flex;
background: #F0EDF2;
height: 170px;
justify-content: flex-end;
`
const CeleTextWrap = styled.div`
diplay:flex;
width: 49%;
padding-left: 0.5em;
`

const CeleDesc = styled.p`
width: 11%;
font-size: 12px;
margin-bottom: 10px;
padding-bottom: 10px;
border-bottom: 2px solid grey;
`

const CeleDesc1 = styled.p`
width: 20%;
font-size: 12px;
`
const IconWrap = styled.div`

`

const Icon = styled.img`
diplay:flex;
width: 50%;
align-content: right;
width: 70px;
height: 100px;
margin-top: 1em;
margin-left: 0.5em;
`

const FooterLast = () => {

    return(
        <CelebrationWrapper>
            <IconWrap>
            <Icon src="https://blznav.akamaized.net/img/legal/esrb-privacy-certified-ab875794f929a878.jpg" alt="Privacy Certified ESRB" loading="lazy"/>
            <Icon src="https://images.blz-contentstack.com/v3/assets/blt3d2b37a4c9c0ce28/blteda65bf57e501050/5cf6e294cf7aa6330ac66a99/t.424Bl.png"/>
            </IconWrap>
            <CeleTextWrap>
            <CeleDesc>
            Blood<br/>
            Use of Tobacco<br/>
            Violence<br/>

            </CeleDesc>
            <CeleDesc1>
            Users Interact<br/>
            In-Game Purchases<br/>
            </CeleDesc1>
            </CeleTextWrap>
        </CelebrationWrapper>
    )
}

export default FooterLast;