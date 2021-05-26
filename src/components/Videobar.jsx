import React from 'react';
import styled from 'styled-components'
import '../../node_modules/video-react/dist/video-react.css';

const Mainview = styled.div`
display: flex;
`

const VideoWrap = styled.div`
display: flex;
flex-direction: column;
width:100%;
height: 880px;
overflow-y:hidden;
margin-top: -7.3em;
`

const NavWrap = styled.div`
display: flex;
position: absolute;
margin-top: 2.5em;
justify-content: center;
width: 100%;
`

const BlizzWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background: #F2F1ED;
height: 48px;
width: 80%;
padding: 0;
border-radius: 4px;
`

const BlizzLogo = styled.svg`
height: 48px;
width: 55px;
background: #353C42;
border-radius: 3px 0px 0px 3px;
`

const BlizzList = styled.ul`
display: flex;
align-items: center;
color: #4b535d;
list-style: none;
font-size: 20px;
line-height: 32px;
font-family: FuturaNo2D,Century Gothic,AppleGothic,sans-serif;
font-weight: 700;
`

const BlizzItems = styled.li`
text-transform: uppercase;
 padding:0 1em;
 border-right: solid lightgrey 1px;
 `

const BlizzItems1 = styled.li`
text-transform: uppercase;
 padding:0 1em;
 `

const BlizzCont = styled.ul`
display: flex;
align-items: center;
color: #4b535d;
list-style: none;
font-size: 20px;
line-height: 32px;
font-family: FuturaNo2D,Century Gothic,AppleGothic,sans-serif;
font-weight: 700;
`

const BlizzItems2 = styled.li`
padding:0 1em;
text-transform: uppercase;
border-left: solid lightgrey 1px;
`

const BlizzItems3 = styled.li`
text-transform: uppercase;
background: #F07229;
width: 100px;
height: 48px;
line-height: 50px;
padding: 0 1em;
color: white;
border-radius: 0px 4px 4px 0px;
`

const Mainbuttons = styled.div`
position: relative;
top: 155%;
display:flex;
flex-direction:row;
color: white;
text-transform: uppercase;
font-size: 20px;
text-align: center;
vertical-align: middle;
line-height: 45px;
font-style: normal;
font-weight: 700;
letter-spacing: .1px;
`

const Mainbutton1 = styled.div`
width: 270px;
height: 45px;
background: #0978C3;
margin-right: 1.5em;
opacity: 90%;
border-radius: 2px;
`

const Mainbutton2 = styled.div`
width: 270px;
height: 45px;
background: #E16117;
opacity: 90%;
border-radius: 2px;
`

const Pausebutton = styled.div`
display: flex;
flex-direction: row;
position: absolute;
width: 27px;
height: 27px;
left: 10%;
bottom: 23%;
background: #E16117;
border-radius: 2px;
text-transform: uppercase;
font-weight: bold;
font-size: 20px;
color: white;
`

const PauseText = styled.div`
margin-left: 1.8em;
text-align: center;
vertical-align: middle;
line-height: 23px;
`

const PauseDiv1 = styled.div`
position: absolute;
background: white;
margin: 6px 8px;
width: 11px;
height: 15px;
border-radius: 2px;
`

const PauseDiv2 = styled.div`
position:relative;
margin-left: 4px;
background: #E16117;
width: 3px;
height: 15px;
`

const BottomDiv1 = styled.div`
width: 250px;
height: 22px;
background: linear-gradient(245deg, transparent 20px, white 0px);
margin-top: auto;
`

const BottomDiv2 = styled.div`
width: 250px;
height: 22px;
background: linear-gradient(115deg, transparent 20px, white 20px);
margin-top: auto;
`

const ButtonWrap = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
position: relative;
top: 49%;
`

const BottomWrap = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
position: relative;
top: 87%;
`

const Under = styled.video`
positon: absolute;
width: 100%;
height: auto;
z-index: -2;

`
const Under2 = styled.source`
positon: absolute;
width: 100%;
height: auto;
z-index: -2;
`

const OverwatchHead = styled.div`
position: relative;
display: flex;
justify-content: center;
margin-bottom: -7.5em;
top: 39.5%;
`

const OverwatchBot = styled.div`
position: relative;
display: flex;
top: 61%;
justify-content: center;

`

const OverwatchBotIcon = styled.svg`
width: 170px; 
height:50px;
margin-right: 0.5em;
`
const OverwatchBotIconS = styled.svg`
width: 50px; 
height:50px;
margin-right: 1em;

`

const Videobar = () => {

return (
    <Mainview>
    <NavWrap>
        <BlizzWrap>
        <BlizzList>
        <BlizzLogo viewBox="0 -50 281.5 375">
            <path fill="#F79D19" d="M79 61.1c36.5-27.8 87.1-27.8 123.6 0l25.2-31C176.6-9.8 104.9-9.8 53.7 30L79 61.1z"></path>
            <path fill="#fff" d="M235.6 36.6l-25.2 31.1c33.6 31.4 41.1 81.9 17.9 121.7l-55.5-53.3-25.9-58.3v88.6l54.9 52.8c-36.1 26.9-85.7 26.9-121.8 0l54.9-52.7V77.7l-26 58.3-55.5 53.3C30.2 149.6 37.6 99.1 71.2 67.7L45.9 36.6c-29.3 26.3-46 63.8-46 103.1 0 77 63.1 139.5 140.8 139.5 77.7 0 140.8-62.5 140.7-139.5.1-39.3-16.6-76.8-45.8-103.1zM271.2 217.6h1.4c.5 0 1.1 0 1.6.1.3 0 .6.2.8.4.4.4.7.9.6 1.5.1.9-.5 1.8-1.5 1.9l2 2.7h-1.8l-1.6-2.5v2.5h-1.5v-6.6zm1.4 1.2v1.7h.1c.3 0 .6 0 .9-.1.2-.2.4-.4.4-.7 0-.3-.1-.5-.3-.7-.3-.2-.6-.2-.9-.2h-.2zm.7 7.9c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8c3.2 0 5.8 2.6 5.8 5.8 0 3.3-2.6 5.8-5.8 5.8zm4.8-5.7c0-2.6-2.1-4.8-4.8-4.8-2.6 0-4.8 2.1-4.8 4.8 0 2.6 2.1 4.8 4.8 4.8 2.7-.1 4.8-2.2 4.8-4.8z"></path>
        </BlizzLogo>
            <BlizzItems>Game ❯</BlizzItems>
            <BlizzItems>Heroes</BlizzItems>
            <BlizzItems>Events ❯</BlizzItems>
            <BlizzItems>Media</BlizzItems>
            <BlizzItems>News ❯</BlizzItems>
            <BlizzItems>Esports ❯</BlizzItems>
            <BlizzItems1>Community ❯</BlizzItems1>
        </BlizzList>
        <BlizzCont>
            <BlizzItems2>Gear❯</BlizzItems2>
            <BlizzItems2>Login</BlizzItems2>
            <BlizzItems3>Buy Now</BlizzItems3>
        </BlizzCont>
        </BlizzWrap>
    </NavWrap>
        <Pausebutton>
            <PauseDiv1>
                <PauseDiv2/>
            </PauseDiv1>
            <PauseText>Pause</PauseText>
        </Pausebutton>
    <VideoWrap>
    <OverwatchHead>
    <svg fill="#fff" viewBox="-43 27 150 9.4">
        <g>
            <polygon fill="rgb(255,156,0)" points="10.71 27.11 12.11 29.09 9.32 29.09 10.71 27.11"></polygon>
            <polygon points="34.85 29.15 33.74 31.79 33.74 31.79 32.59 29.15 31.38 29.15 30.23 31.75 29.14 29.15 27.3 29.15 29.58 34.33 30.73 34.33 31.9 31.72 33.05 34.33 34.29 34.33 36.55 29.15 34.85 29.15"></polygon>
            <polygon points="60.55 29.15 60.55 30.97 57.38 30.97 57.38 29.15 55.6 29.15 55.6 34.33 57.38 34.33 57.38 32.33 60.55 32.33 60.55 34.33 62.31 34.33 62.31 29.15 60.55 29.15"></polygon>
            <polygon points="38.65 29.15 35.18 34.33 37.1 34.33 39.26 31 41.39 34.33 43.38 34.33 39.99 29.15 38.65 29.15"></polygon>
            <polygon points="14.56 29.15 12.61 29.15 10.64 32.3 8.7 29.15 6.7 29.15 9.96 34.33 11.17 34.33 14.56 29.15"></polygon>
            <polygon points="42.01 29.15 42.01 30.51 44.26 30.51 44.26 34.33 46.03 34.33 46.03 30.51 47.81 30.51 48.71 29.15 42.01 29.15"></polygon>
            <path d="M6,29.53a2.1,2.1,0,0,0-.61-.08H1.45c-.9,0-1.45.45-1.45,1.17v2.83a1.07,1.07,0,0,0,.61,1l.07,0,1.08-1.09V30.8h3.3v2.46H2.64L1.27,34.62h4.1c.86,0,1.46-.48,1.46-1.17V30.76L6,29.54Z" transform="translate(0 -0.29)"></path>
            <path d="M53.41,29.44H49.87l-.28,0h-.05l-.15.24h0l-1,1.47v2.27c0,.69.6,1.17,1.45,1.17h3.53a1.31,1.31,0,0,0,1.46-1.17v-.89H53.1v.7H50.18V30.8H53.1v.6h1.77v-.78C54.87,29.91,54.29,29.44,53.41,29.44Z" transform="translate(0 -0.29)"></path>
            <polygon points="14.47 30.45 14.47 34.33 19.95 34.33 19.95 32.97 16.24 32.97 16.24 32.31 18.74 32.31 18.74 31.13 16.24 31.13 16.24 30.51 19.95 30.51 19.95 29.15 15.37 29.15 14.47 30.45"></polygon>
            <path d="M25.66,32.68c.63,0,1.31-.33,1.31-.94V30.5c0-.65-.51-1.06-1.33-1.06H20.73v5.18H22.5V30.77h2.77s0,0,0,.05v.78h0a.19.19,0,0,1-.1,0H23.3v1l2.17,1.95h2.42l-2.23-1.94Z" transform="translate(0 -0.29)"></path>
            <polygon fill="rgb(255,156,0)" points="39.28 36.31 37.88 34.33 40.67 34.33 39.28 36.31"></polygon>
            <path d="M63.32,29.59h.26l.07,0a.16.16,0,0,1,.05.13.15.15,0,0,1-.13.17l.18.24h-.16l-.15-.22v.22h-.13Zm.13.1v.15h.09a.07.07,0,0,0,0-.06.07.07,0,0,0,0-.06l-.08,0Z" transform="translate(0 -0.29)"></path>
            <path d="M63.5,30.37a.5.5,0,1,1,.5-.5A.5.5,0,0,1,63.5,30.37Zm.41-.5a.41.41,0,1,0-.41.41A.41.41,0,0,0,63.91,29.87Z" transform="translate(0 -0.29)"></path>
        </g>
    </svg>
    </OverwatchHead>
        <ButtonWrap>
            <Mainbuttons>
                <Mainbutton1>Watch trailer</Mainbutton1>
                <Mainbutton2>Buy Now</Mainbutton2>
            </Mainbuttons>
        </ButtonWrap>
            <OverwatchBot>
            <OverwatchBotIconS fill="#fff" viewBox="0 5 35 5" preserveAspectRatio="xMinYMin" role="img"><title>PC</title>
                    <path d="M10.7,6.8c-2.1,0-4.2,0-5.6,0H3.1v18H5v-6.7c0.9,0,3.4,0,6,0c3.2,0,3.4-2.6,3.4-5.8C14.4,9,14.4,6.8,10.7,6.8z M12.7,12.6
                        c0,2,0,3.6-2,3.6c-1.6,0-4.6,0-5.6,0V8.5c1.2,0,3.8,0,5.6,0C12.9,8.5,12.7,10.6,12.7,12.6z"></path>
                    <path d="M26.8,18.3c0,0,1,4.9-3.7,4.9c-3.5,0-4-1.4-4.1-3.1v-8.3c0.1-1.7,0.5-3.1,4.1-3.1c4.7,0,3.7,3.6,3.7,3.6h2.1
                        c0-3.4-0.2-5.4-5.7-5.4c-4.8,0-5.8,2.2-6,4.1l0,0v0.5c0,0.3,0,0.6,0,0.9v7.3c0,0.3,0,0.6,0,0.9v1.2h0.1c0.4,1.7,1.7,3.4,5.8,3.4
                        c5.9,0,5.7-3.4,5.7-6.8h-2.1V18.3z"></path>
                </OverwatchBotIconS><OverwatchBotIcon fill="#fff" viewBox="0 0 240 32" preserveAspectRatio="xMinYMin" role="img"><title>Switch</title>
                    <g>
                        <path  d="M7.41,14.28A4.48,4.48,0,1,0,11.89,9.8h0a4.47,4.47,0,0,0-4.47,4.47ZM19.12,43.75H12.2a8.38,8.38,0,0,1-8.37-8.36V12.2A8.36,8.36,0,0,1,12.2,3.84h6.92ZM22.6,0H12.2A12.2,12.2,0,0,0,0,12.2V35.39a12.2,12.2,0,0,0,12.2,12.2H22.6a.35.35,0,0,0,.35-.35h0V.35A.35.35,0,0,0,22.61,0ZM37.13,21.36a4.81,4.81,0,1,1-4.71,4.71A4.8,4.8,0,0,1,37.13,21.36ZM28.06,47.59h7.33a12.2,12.2,0,0,0,12.2-12.2V12.2A12.2,12.2,0,0,0,35.39,0H28a.3.3,0,0,0-.31.3h0V47.24a.35.35,0,0,0,.34.35Z"></path>
                    </g>
                    <path  d="M187.62,11.51h-2.89V3.81h2.89a3.85,3.85,0,0,1,0,7.7ZM187.49,1H182V14.3h5.49a6.74,6.74,0,0,0,6.83-6.64A6.74,6.74,0,0,0,187.49,1ZM177.32,25.84a8,8,0,0,1,6.87,3.88l4.08-3.53a13.36,13.36,0,1,0,0,14.9l-4.08-3.54a8,8,0,0,1-6.87,3.89,7.8,7.8,0,1,1,0-15.6Zm-38.62.56h8V46.13h5.38V26.4h7.83V21.09H138.7V26.4ZM210.87,31h-11.7V21.09H194v25h5.18v-10h11.7v10h5.18v-25h-5.18ZM225.29,42.4l-.94,2.73-.94-2.73h-1v3.73H223V43.28l1,2.82v0h.65l0,0,1-2.82v2.85h.66V42.4ZM210,11.8a4.14,4.14,0,1,1,4.13-4.13A4.14,4.14,0,0,1,210,11.8ZM210,.58A7.09,7.09,0,1,0,217,7.67,7.09,7.09,0,0,0,210,.58Zm8.55,42.54h1.14v3h.72v-3h1.13v-.71h-3v.71ZM147.87,11.84h-7.63V8.73h7V6.33h-7V3.46h7.63V1H137.55V14.3h10.32V11.84Zm22.9,2.46V1h-2.69V9.75L161.55,1h-2.68V14.3h2.69V5.43l6.59,8.87Zm-88.51,0h2.95V1H82.26V14.3ZM70.74,30.92c-3.62-.59-5.95-1.26-5.95-3,0-1.95,2.6-2.69,6.09-2.69A21.46,21.46,0,0,1,78.55,27l1.78-4.33a27.86,27.86,0,0,0-9.7-1.93c-5.41,0-11.17,2.64-11.17,7.53,0,4,2.8,6,10,7.22,5.07.88,7.85,1.35,7.77,3.53,0,1.2-1,3.21-6.67,3.21a17.63,17.63,0,0,1-9-2.34l-2.37,4.28a24.64,24.64,0,0,0,11,2.65c8,0,12.17-2.76,12.17-8,0-3-1-6.18-11.61-7.92Zm39.76,8.34-5.3-18.17h-4.44l-5.29,18.1-4.81-18.1H85.21l7.08,25h6L103,29.63l4.64,16.5h6l7.13-25h-5.45L110.5,39.26ZM97.92,5.43l6.59,8.87h2.62V1h-2.69V9.75L97.91,1H95.22V14.3h2.7ZM127,46.13h5.57v-25H127ZM127.83,1H116.58V3.85h4.24V14.3h2.86V3.85h4.14V1ZM63,5.43l6.6,8.87h2.61V1H69.56V9.75L63,1H60.35V14.3H63V5.43Z"></path>
                </OverwatchBotIcon><OverwatchBotIcon fill="#fff" viewBox="0 10 155 32" role="img"><title>PS4</title>
                    <path d="M39.017,31.1a0.113,0.113,0,0,1-.053-0.076c0-.03-0.008-0.073-0.012-0.135l-0.01-.225a0.4,0.4,0,0,0-.061-0.235,0.325,0.325,0,0,0-.1-0.086,0.469,0.469,0,0,0,.13-0.129,0.477,0.477,0,0,0,.069-0.269,0.434,0.434,0,0,0-.256-0.431,0.742,0.742,0,0,0-.328-0.06h-0.8v1.76h0.3V30.491h0.471a0.572,0.572,0,0,1,.187.026,0.2,0.2,0,0,1,.1.191l0.014,0.28c0.006,0.066.008,0.111,0.012,0.138a0.232,0.232,0,0,0,.02.066L38.7,31.213H39.04v-0.1ZM38.6,30.17a0.409,0.409,0,0,1-.227.055h-0.48v-0.5H38.4a0.373,0.373,0,0,1,.167.032,0.212,0.212,0,0,1,.106.21A0.237,0.237,0,0,1,38.6,30.17Zm0.754-.921a1.516,1.516,0,0,0-1.1-.467,1.589,1.589,0,0,0-1.1,2.7,1.532,1.532,0,0,0,2.2,0A1.607,1.607,0,0,0,39.352,29.248Zm-1.1,2.431a1.257,1.257,0,0,1-.913-0.386,1.332,1.332,0,0,1,0-1.859,1.268,1.268,0,0,1,1.824,0A1.32,1.32,0,0,1,38.253,31.679ZM6.675,25.863a7.091,7.091,0,0,0,3.975-.208l3.283-1.213v3.514l-0.653.11a21.165,21.165,0,0,1-10.233-.839C-0.166,26.306-.7,24.388.763,23.281a15.573,15.573,0,0,1,3.658-1.789l9.513-3.442v3.923l-6.846,2.5C5.876,24.91,5.694,25.538,6.675,25.863Zm33.69-1.371a7.615,7.615,0,0,1-2.745,1.753l-14.5,5.3v-3.91L33.79,23.764c1.212-.441,1.4-1.066.415-1.393a7.109,7.109,0,0,0-3.975.207L23.116,25.13V21.072l0.408-.141a24.076,24.076,0,0,1,4.945-1.07,20.8,20.8,0,0,1,9.208,1.119C40.809,21.987,41.16,23.472,40.365,24.492ZM24.5,17.833v-10c0-1.171-.212-2.25-1.3-2.557-0.829-.275-1.342.512-1.342,1.683V32l-6.638-2.145V0a79.212,79.212,0,0,1,9.145,2.548c5.618,1.967,7.523,4.411,7.523,9.917C31.889,17.831,28.634,19.867,24.5,17.833Zm120.3,5.256-4.024,0h0.14a0.14,0.14,0,0,1-.14-0.138V9.675c0-2.039-1.387-2.708-3.332-1.485l-23.354,14.6c-0.918.574-1.226,1.222-1,1.7a1.685,1.685,0,0,0,1.706.7l21.69,0a0.137,0.137,0,0,1,.124.1v1.863a0.139,0.139,0,0,0,.134.143h3.9a0.141,0.141,0,0,0,.136-0.143V25.338a0.141,0.141,0,0,1,.136-0.143h3.888a0.141,0.141,0,0,0,.14-0.141V23.225A0.14,0.14,0,0,0,144.795,23.089Zm-8.19-.149a0.14,0.14,0,0,1-.137.143h-18.18a0.24,0.24,0,0,1-.246-0.093,0.212,0.212,0,0,1,.133-0.226l18.094-11.341a0.205,0.205,0,0,1,.336.186V22.94Zm-59.3-4.755H60.975c-1.508,0-2.562,1.3-2.562,3.156v5.825a0.137,0.137,0,0,1-.136.139H54.394a0.137,0.137,0,0,1-.137-0.139l0-5.825c0-3,1.993-5.265,4.638-5.265H75.931c1.826,0,2.692-1.338,2.692-3.195s-0.868-3.2-2.692-3.2H54.394a0.138,0.138,0,0,1-.138-0.139V7.715a0.137,0.137,0,0,1,.136-0.137H77.308c3.674,0,5.471,2.305,5.471,5.307S80.982,18.185,77.308,18.185Zm37.418-8.5h-11.29c-1.824,0-2.69,1.337-2.69,3.2V22c0,3-1.8,5.3-5.475,5.3H81.99a0.137,0.137,0,0,1-.136-0.139V25.334a0.136,0.136,0,0,1,.134-0.139H93.9c1.825,0,2.692-1.336,2.692-3.194v-9.12c0-3,1.8-5.3,5.471-5.3l12.667,0a0.137,0.137,0,0,1,.134.139V9.545A0.135,0.135,0,0,1,114.726,9.681ZM150.715,27.3V25.5l-0.594,1.8h-0.284l-0.594-1.8v1.8h-0.284V25.083h0.4l0.624,1.883,0.627-1.883H151V27.3h-0.285Zm-2.745-1.965V27.3h-0.276V25.333h-0.72v-0.25h1.708v0.25H147.97Z"></path>
                </OverwatchBotIcon><OverwatchBotIcon fill="#fff" viewBox="0 0 155 32" preserveAspectRatio="xMinYMin" role="img"><title>XBox</title>
                    <path d="M101.725,25.848l-6.069-8.321-6.063,8.322H87.1l7.3-10.054L87.728,6.654h2.5l5.43,7.454,5.43-7.454h2.5l-6.659,9.137,7.3,10.056h-2.5Zm-47.3,0L47.125,15.792l6.664-9.137h-2.5L45.859,14.11,40.433,6.654H37.942L44.6,15.792,37.3,25.844h2.5l6.063-8.318,6.068,8.318h2.5Zm13.887-9.326a5.32,5.32,0,0,0-1.246-.8,4.354,4.354,0,0,0,2.285-3.844c0-1.228-.448-5.221-6.176-5.221H55.466v8.274H52.9c-0.333.439-1.091,1.494-1.379,1.926h3.948v8.991l7.716,0c4.18,0,6.776-2.143,6.776-5.6a4.758,4.758,0,0,0-1.64-3.724M57.6,8.656h5.583c1.51,0,4.041.38,4.041,3.05,0,2.018-1.474,3.221-4.041,3.221H57.6V8.656h0ZM63.18,23.844H57.6V16.858H63.18c2.116,0,4.649.59,4.649,3.342,0,3.169-2.912,3.643-4.649,3.643M79.993,6.212c-5.337,0-9.067,4.123-9.067,10.027s3.73,10.032,9.067,10.032,9.052-4.119,9.052-10.032S85.325,6.212,79.993,6.212m0,18.029c-4.066,0-6.915-3.292-6.915-8s2.849-8,6.915-8,6.892,3.29,6.892,8-2.832,8-6.892,8M4.725,4.6L4.71,4.614v0A16.115,16.115,0,0,0,3.236,25.689a0.07,0.07,0,0,0,.085.027,0.064,0.064,0,0,0,.018-0.082C2.132,21.863,8.3,12.722,11.492,8.89a0.085,0.085,0,0,0,.023-0.047,0.073,0.073,0,0,0-.03-0.052C6.122,3.4,4.69,4.631,4.71,4.614M26.948,4.6l0.015,0.013v0a16.117,16.117,0,0,1,1.472,21.074,0.069,0.069,0,0,1-.085.027,0.068,0.068,0,0,1-.018-0.082c1.207-3.771-4.959-12.919-8.146-16.752a0.075,0.075,0,0,1-.023-0.045,0.069,0.069,0,0,1,.03-0.054c5.365-5.393,6.787-4.151,6.769-4.168M15.837,0a15.5,15.5,0,0,1,8.249,2.342,0.059,0.059,0,0,1-.05.106c-3.066-.669-7.726,2.007-8.166,2.274a0.05,0.05,0,0,1-.068,0c-1.169-.678-5.477-2.959-8.189-2.257a0.063,0.063,0,0,1-.077-0.029,0.064,0.064,0,0,1,.027-0.079A15.48,15.48,0,0,1,15.837,0m0,12.831a0.089,0.089,0,0,1,.05.025C20.626,16.5,28.737,25.5,26.26,28.041l0,0,0,0h0a15.708,15.708,0,0,1-20.849,0l0,0,0,0C2.938,25.5,11.048,16.5,15.782,12.857a0.1,0.1,0,0,1,.055-0.025M141.09,6.654V22.4L129.6,6.643l-1.883,0V25.816h2.114v-15.4l11.25,15.413,2.12,0V6.654H141.09Zm-24.347-.446c-5.336,0-9.068,4.125-9.068,10.027s3.732,10.039,9.068,10.039,9.052-4.126,9.052-10.039-3.72-10.027-9.052-10.027m0,18.032c-4.066,0-6.915-3.292-6.915-8.005s2.849-8,6.915-8,6.892,3.292,6.892,8-2.832,8.005-6.892,8.005m30.964-.288v-7.1h10.452V14.981H147.707V8.517h11.161V6.641H145.581v19.19H159V23.953H147.707Z"></path>
                </OverwatchBotIcon>
            </OverwatchBot>
        <BottomWrap>
                <BottomDiv1/>
                <BottomDiv2/>
        </BottomWrap>
            <Under width="100%" height="100%" autoPlay muted loop>
            <Under2 src="https://static.playoverwatch.com/video/pages/home/header-04cd3f46c6.webm" type="video/webm"/>
        </Under>
        </VideoWrap>
    </Mainview>
)

}

export default Videobar;