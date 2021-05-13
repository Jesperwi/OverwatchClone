import React from 'react';
import styled from 'styled-components'

const NavWrap = styled.div`
background: #0B0D12;
height: 40px;
border-bottom: solid #2F3135 0.2px;
padding: 0 12em;
`
const BlizzLogo = styled.svg`
height: 40px;
width: 60px;
margin-right: 1.5em;
`

const BlizzardLogo = styled.path`
color: #009ae4;
`

const BlizzWrap = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 40px;

`

const BlizzList = styled.ul`
display: flex;
align-items: center;
color: #9A9A9C;
list-style: none;
line-height: 40px;
font-weight: 400;
font-size: 15px;
font-family: Open Sans,Helvetica,Arial,sans-serif;
`

const BlizzItems = styled.li`
text-transform: uppercase;
 padding-right: 2em;
`

const BlizzCont = styled.ul`
display: flex;
align-items: center;
color: #9A9A9C;
list-style: none;
line-height: 40px;
font-weight: 400;
font-size: 15px;
font-family: Open Sans,Helvetica,Arial,sans-serif;
`

const BlizzItems2 = styled.li`
padding-right: 2em;
`



const Navbar = () => {

return (
    <NavWrap>
        <BlizzWrap>
        <BlizzList>
    <BlizzLogo fill="#009ae4" viewBox="0 0 151.15 68.46" focusable="false" aria-hidden="true">
    <BlizzardLogo d="M129.67,4.74c1.13.18,1.95-.25,2.82,0,.31.09.38.46.72.58.56.18.95-.13,1.59,0a4.39,4.39,0,0,0,.51.58c.49.33,1.52.48,2.24.87.46.25.85.77,1.23.87s1-.15,1.52,0,.5.69.87.87c.52.09,1.11-.12,1.52,0s.35.41.65.58h2.1c.33,0,.27.46.5.58.76.18,1.55-.24,2.31,0,.36.11,1,1.14,1.38,1.45a11.69,11.69,0,0,1,1.52,1.3,11.39,11.39,0,0,1,.87,2,11,11,0,0,0,1.3,2.82c0,.89,0,1.76-.07,2.68a19.55,19.55,0,0,0-.07,2.6,15.34,15.34,0,0,0,.72,2.1,28.72,28.72,0,0,1,.14,4.12A12.92,12.92,0,0,1,154,32.3c-.16.57-.83,1.21-.94,1.88a14.56,14.56,0,0,0,.14,2.31,5.33,5.33,0,0,1-1.66,3.76c-.15.83-.1,1.75-.29,2.6a9.35,9.35,0,0,0-.43,1.88c0,.76.1,1.6.14,2.39a60.48,60.48,0,0,1,.14,7.09c-.06,1-.5,1.86-.58,2.75a36.63,36.63,0,0,1-.15,4.12c-.13.64-.39,1.25-.51,1.88s-.2,1.33-.36,2A12.52,12.52,0,0,1,148,68.1c-.43,0-.58.65-1,.94a13,13,0,0,1-3,.94c-.49.13-1,.27-1.52.43a7.2,7.2,0,0,1-1.45.51c-.55,0-1-.54-1.45-.65a6.55,6.55,0,0,1-4.49.79c0-.32.31-.62.51-.87a6,6,0,0,0,.58-6.44c.78-.52,2-.64,2.46-1.45,0-.38-.54-.18-.58-.51-.34-1-.78-2-1.23-3a4.8,4.8,0,0,1-.43-.94,14,14,0,0,1,.22-2.46c.24-2.3.53-4.9.8-7.23a15.4,15.4,0,0,1-1.45-2.68,12,12,0,0,1-1-3.11c-.05-.49.17-1.07.07-1.59-.06-.34-.49-.66-.58-1a12,12,0,0,1-.07-2,18.12,18.12,0,0,1,0-3c.05-.29-.36-.38-.43-.65-.22-.8.3-2.28.22-3.47-.05-.78-.42-1.5-.51-2.17a48.38,48.38,0,0,1,0-5.35V20.51a13.77,13.77,0,0,1,0-2.6c.1-.34.36-.31.51-.65.23-1.51-.32-2.72,0-3.9.08-.32.49-.49.58-.8a9.7,9.7,0,0,0,0-2.68c-.09-.35-.75-.93-1.16-1.3-1.31-1.21-2.62-2.36-3.76-3.61A.36.36,0,0,1,129.67,4.74ZM140,20.44a9.27,9.27,0,0,0,0,3.25c0,1.15,0,2.5.07,3.76a37.11,37.11,0,0,0,.07,3.76c.06.37.34.72.43,1.08a19.38,19.38,0,0,0,.65,2.82c.13.28.34.44.43.72,0,8.46-.13,16.7-.07,25.17a8.91,8.91,0,0,0,1.74-2.53,9.57,9.57,0,0,0,.58-1.66c.16-.66.09-1.28.22-2,.22-1.22,1.25-2.31,1.45-3.54a24.65,24.65,0,0,0,0-3.47c0-2.39.08-4.49.22-6.73a13.77,13.77,0,0,1,.29-3.25c.17-.5.73-.85.94-1.37s.25-1.63.51-2.39c.2-.59.64-1,.72-1.45a16.87,16.87,0,0,0,0-2.46,15.58,15.58,0,0,0,0-2.46c-.06-.27-.31-.44-.43-.72-.37-.85-.43-2.21-.72-2.82-.55-1.14-2.11-1.29-2-2.75-.89.16-1.16-.88-1.88-1.08-.92-.26-1.85.05-3.11-.07C140,20.23,140,20.33,140,20.44Z" transform="translate(-5.71 -4.48)"></BlizzardLogo>
    <BlizzardLogo d="M124.39,30.06c.06.59.18,1.35-.22,1.66a2.81,2.81,0,0,1,3,.8c.17.16.34.48.58.72s.56.37.65.58c.16.36,0,.88.14,1.16s.77.34,1.08.58c.18.79.27,1.66.51,2.53.06.24.24.48.29.72.31,1.48,0,3.15.21,4.63.11.72.47,1.33.51,2,.19.38.6-.21.72.14.48,2.57,1.36,5.63.65,8.32.05.33.61.17.72.43a8.47,8.47,0,0,1,.72,1.88c0,.25-.27.53-.29.79a11.7,11.7,0,0,0,.22,1.23,9.45,9.45,0,0,1-.07,1.66,11.44,11.44,0,0,0-.22,1.52c0,.33.26.64.29.94a9.12,9.12,0,0,1-.43,2.17c-.4,2.13-.73,4.37-1.23,6.36-.82-.37-1.57-.43-2.24-.8a12,12,0,0,1-1.81-1.59,5.3,5.3,0,0,0-4.41-1.74,7.32,7.32,0,0,1,.72-3c.33-.92.67-1.86.94-2.89a26,26,0,0,0,.36-7.23A31.36,31.36,0,0,0,125,49a14.38,14.38,0,0,0-1.38-4.12,1.51,1.51,0,0,0-.79-.72c0-1.47.73-2.66.5-4a5.8,5.8,0,0,0-.65-1.37,12.77,12.77,0,0,0-2.53-3.47,4,4,0,0,1-.58,2.46,6.18,6.18,0,0,0-.58,1.3,16.24,16.24,0,0,0,.29,3.54c.22,2.33.45,4.55.72,6.94a16.31,16.31,0,0,1,.36,3.4c0,.33-.31.55-.36.87.13.48.44.68.51,1.3a16.32,16.32,0,0,1-.07,4.12,11.22,11.22,0,0,0-.36,1.16,16.35,16.35,0,0,0,.36,2.82c.05.46.1,1,.14,1.45.09,1,.24,1.87-.51,2.24a15.26,15.26,0,0,1-.51,5.13c-.41-.42-.43-1-.65-1.52a15.46,15.46,0,0,0-4.77-5.93,8.41,8.41,0,0,1-2.39-1.88A57.17,57.17,0,0,1,114,56c.19-.4.57-.75.65-1.16A2.73,2.73,0,0,0,114,52.4V45.1c0-2.51.2-5,0-7.3,0-.53-.26-1-.36-1.59s0-1.26-.14-1.81-.49-.9-.58-1.37.05-1.06,0-1.59-.34-1.31-.43-2c-.06-.4,0-.8-.07-1.16s-.3-.71-.36-1.09,0-.67-.07-1-.12-.63-.15-.94a18.72,18.72,0,0,0,0-2.39c-.1-.45-.66-.68-.58-1.3-.08-.25-.41-.26-.51-.5a39.1,39.1,0,0,1,0-5.06c1.71-1.4,3.7-2.52,5-4.34a5.63,5.63,0,0,0-1.52-.5c-.28,0-.42.34-.72.43a1.79,1.79,0,0,1-1,0c-.63-2.29-2.55-3.28-4.2-4.56a8.46,8.46,0,0,1-1.08-.21c-.26-.07-.85,0-.79-.43s.66-.21,1-.22c.6,0,1.18,0,1.74-.07,1.57-.11,3.41.12,4.77-.07.53-.08.95-.43,1.45-.43a1.55,1.55,0,0,1,1.16.58c.76.1,1.68-.13,2.53,0a15.71,15.71,0,0,1,2.24.72,14.26,14.26,0,0,0,2.17.72c.55.08,1.1,0,1.59.07,1.6.39,2.27,1.82,3.54,2.39.54,1.4,1.35,2.85,2,4.27a5.77,5.77,0,0,1,.72,3.33,12,12,0,0,1-.07,1.45c-.1.53-.49.92-.58,1.45-.12.78.09,1.51,0,2.31A12.72,12.72,0,0,1,129.09,27,5.5,5.5,0,0,1,124.39,30.06Zm-5.21-16.71c.07,4.82-.1,10,0,14.68,0,.25-.13.67.14.87a3.08,3.08,0,0,0,1.74-.14c1.65-.62,1.85-2,2.46-3.76a8.64,8.64,0,0,0,.44-1c.08-.52-.06-1,.07-1.52.09-.34.44-.73.51-1.09a6.76,6.76,0,0,0-.22-3,12.66,12.66,0,0,0-2.1-3c-.85-1-1.87-2.17-2.89-2.24A.2.2,0,0,0,119.18,13.35Z" transform="translate(-5.71 -4.48)"></BlizzardLogo>
    <BlizzardLogo d="M36.81,6.33c.43.39.68,1,1.23,1.23A4.5,4.5,0,0,1,39,7.49c.85,1,1.67,1.95,2.61,2.82v2.6a12.48,12.48,0,0,1,0,2.53c-.1.35-.56.56-.58.87,0,.72.86.9,1.09,1.3-.13.73.17,1.68,0,2.32-.11.39-.43.38-.5.72V29a11.57,11.57,0,0,0,0,2.75c.13.42.85.69,1,1a6.65,6.65,0,0,1,.29,1.81,81.86,81.86,0,0,1-.14,8.24,7.92,7.92,0,0,1-.14,1.66c-.1.29-.44.49-.51.72-.32,1.12.24,2.59,0,3.62,0,.33.46.26.51.58a14.34,14.34,0,0,1,0,3.11c-.21.32-.52.28-.72.58a1.94,1.94,0,0,0-.29.79c0,.52.72.75.5,1.74-.07.3-.19.38-.5.72-.16.69.2,1.48,0,2.24-.07.28-.49.51-.58.8-.26.87.25,2.33,0,3.33-.08.33-.48.51-.5.94s.73,1,.5,1.74c.65,0,1.31.12,2,.14a5.54,5.54,0,0,0,2-.07c.34-.13.4-.5.65-.72a3.17,3.17,0,0,1,1.16-.65,5.64,5.64,0,0,1,2,.36c1.32.36,3.4.77,4.77,0,.33-.19.37-.48.79-.65a12.48,12.48,0,0,1,3.33-.36c4.73-.21,10.26,0,15.12.07v3.4a21.23,21.23,0,0,0,0,3.33c.18,1,1,1.64,1.23,2.39h-5.5a8.93,8.93,0,0,1-1.81,0c-.33-.1-.38-.42-.65-.58-1,.05-1.85.07-2.17-.58-.85.15-1-.35-1.52-.58H59.74c-1.61,0-3.07.25-3.54-.72-4.42-.11-8.93-.14-13.45-.15a4.11,4.11,0,0,0-3.47-.87,5.16,5.16,0,0,0-1.45.94c-.5.36-1,.7-1.37,1s-.6.79-.87,1c-1.44-.25-3.65-.64-4.92,0-.39-.14-.43-.62-.87-.72.18-.47.62-.68.65-1.3a12.06,12.06,0,0,0,3.4-2.39c.12-.72-.16-1.65,0-2.24.12-.44.48-.44.58-.8s-.51-.41-.58-.79c.23-1.53-.32-2.85,0-4.05.09-.31.49-.5.58-.79.16-.55-.15-1.08,0-1.59.09-.32.39-.36.51-.65.16-1.17-.61-1.41-1.09-2V47.7c.11-.28.5-.27.58-.58-.08-1-.37-2.76,0-3.76.13-.35.37-.44.51-.72V39.89a14.2,14.2,0,0,1,0-2.75c.14-.6.73-.92.72-1.52s-.49-.95-.72-1.3V28.47a10.52,10.52,0,0,0,0-2c-.09-.36-.35-.43-.51-.73v-2.1a9.31,9.31,0,0,1,0-2.1c.18-.59.91-.65,1.08-1.16-.07-1.36.59-3.91-.65-4.27a6.88,6.88,0,0,0,1-2.53,7.12,7.12,0,0,0-1-3.4,5.51,5.51,0,0,0-1.44-.15,5.37,5.37,0,0,0-1.74-2.17,7.55,7.55,0,0,1-1.08-.87c0-.18.58-.61.65-1.08,0-.1,0-.21.07-.22h.8c.34,0,.26.51.58.58Z" transform="translate(-5.71 -4.48)"></BlizzardLogo>
    <BlizzardLogo d="M104.43,72.94c-.09-1.3.13-2.31,0-3.33a16.28,16.28,0,0,0-.8-2.6c-.13-.42-.29-.85-.43-1.3a9.47,9.47,0,0,1-.36-1.3,18.23,18.23,0,0,0,0-1.88c-.23-1-1.91-1.88-2.39-3a2.82,2.82,0,0,1-.29-1.3c.06-.42,1-1.41,1.23-1.81a13.28,13.28,0,0,0,1.88-4,6.52,6.52,0,0,0,.36-2.6c-.12-.54-1-1-1.52-1.37-1.28-.84-2.42-1.36-3.69-2.1a3.06,3.06,0,0,0-2.1-.8,10,10,0,0,1,.43,4.12c.26.24.62.45.94.72a8.91,8.91,0,0,0,.94.72c-.17.75-.75,1.08-.94,1.81a42.53,42.53,0,0,0-4.34-.07,15.86,15.86,0,0,0-2.89,1c-1,.36-2,.67-2.89,1-.65-.34-.46-1.52-1-2a15.59,15.59,0,0,1,.94-1.37c.36-.41.93-.69,1.09-1.16s0-.91.14-1.3c.3-1,1-1.36,2-2,0-.39-.69-.39-.51-.72-.1-1,.43-2,.43-3.11,0-.73-.33-1.33-.22-2a2.08,2.08,0,0,1,.79-1.08c.12-.72-.16-1.51,0-2.1.11-.41.56-.48.58-.87-.21-.36-.48-.35-.58-.72s.14-1.06.14-1.45c0-1-.28-1.74.07-2.53.21-.47.63-.83.87-1.3a8.47,8.47,0,0,0,.65-3.11c.18-.28.54-.54.65-.79a22.1,22.1,0,0,0,.51-3.54,9.85,9.85,0,0,1,1.08-3c.24-.42.67-.77.72-1.09.09-.53-.23-.94-.15-1.37s.42-.63.72-.87a19.29,19.29,0,0,1,1.45-3.69c.2-.34.63-.61.72-.94.18-.66-.16-1.34,0-2a4.2,4.2,0,0,1,.87-1.23c.28-.24.68-.25.87-.51.2-1.19-.09-4,1.88-3.11,1,.44.87,1.84,1.16,3a7.9,7.9,0,0,0,.87,1.81c.33.6,1,1.15,1.08,1.59a11.62,11.62,0,0,1,0,1.88c.16,2.07,1.31,4.24,2,6.22.35,1.1.54,2.23.79,3.25.13.52.3,1,.43,1.59a11.62,11.62,0,0,0,.36,1.66c.14.33.54.53.65.8.1.75-.13,1.42,0,2,.07.33.5.59.58.94s-.14.57-.07.8.5.45.58.72c-.08.79.11,1.84,0,2.75,0,.22-.13.45-.14.65a22.13,22.13,0,0,0,.51,4.48,23.62,23.62,0,0,1,.36,3c.13,2.94.12,6.56,0,9.18a11.31,11.31,0,0,1-.15,2c-.12.45-.51,1-.72,1.59-.57,1.58-1,3.54-2,4.77-.14,1,.19,1.94,0,2.82-.07.34-.39.64-.51.94-.4,1-.43,2.23-1.08,3-.11.55.15,1.11,0,1.66-.07.25-.43.46-.5.72-.21.71.18,1.5,0,2.17-.1.35-.52.61-.8.79C105.14,72.87,104.9,72.69,104.43,72.94Zm-4.34-42.81c-.56.61-.67,1.65-1.23,2.1-.09.07-.38.1-.36.36-.15.63,0,1.22-.14,1.88s-.36,1.07-.43,1.59c-.23,1.63.32,3.15,0,4.85a6.2,6.2,0,0,1,4.12.87,5.09,5.09,0,0,0,2.24,1c.08-2.1.17-4.61.07-6.8a10.78,10.78,0,0,0,0-1.23c0-.2-.22-.51-.29-.79-.32-1.29-.15-3-.94-3.54s-1.39-.26-1.88-.65-.58-1-1.08-1.81C100.21,28.75,100,29.33,100.09,30.13Z" transform="translate(-5.71 -4.48)"></BlizzardLogo>
    <BlizzardLogo d="M96.48,7.2c.14.55-.26,1-.43,1.37A10.38,10.38,0,0,1,94.23,12a4.15,4.15,0,0,1-.36,2.68c-.33.54-1.12.9-1.23,1.37s.12.9.07,1.3c-.1.84-.63,1-1.16,1.59a26.17,26.17,0,0,1-.87,4.77A6.24,6.24,0,0,0,90,25.35a7.64,7.64,0,0,0,.07.87c0,.92-.1,1.89-.14,2.82a9.55,9.55,0,0,1-.07,2.24c-.08.25-.32.41-.43.65a20.79,20.79,0,0,0-.65,2.46,5.31,5.31,0,0,1-1,2.1v1.88c-.36.9-1.4,1.29-1.59,2.24a16.51,16.51,0,0,0,0,3,23.18,23.18,0,0,1,0,3,14.39,14.39,0,0,1-.8,2.31,18.37,18.37,0,0,0-.8,2.31c-.14,1,.08,1.87,0,2.68-.17,1.86-1.1,3.09-2,4.56,0,1.38-.78,2.3-.87,3.33.47.42.44-.46.87-.51.8.62,1.94,0,3,.07.39-.59.21-1.28.58-1.81.57-.83,1.78-.92,2.75-1.3.47-.19,1-.64,1.66-.94,1.44-.67,2.79-1.08,3.33-2.61.46.18.43.6.87.72.7.21,1.78-.22,2.46,0a2.4,2.4,0,0,1,1,1.52c0,.35-.42.74-.51,1.16a3.17,3.17,0,0,0,0,1c.07.41.41.67.51,1.16a15.89,15.89,0,0,1,0,2.53,12.08,12.08,0,0,1,0,2.46c-.1.36-.76.68-.58,1.16h-8c-.33-.06-.25-.52-.58-.58-.9,0-1.68-.42-2.39-.29s-1.3,1.15-2,1.3c-1.68.21-3.14-.1-4.63.14-1.08.18-2,1.1-3.18,1-.57-.52-.56-1.12-.51-2.31a15,15,0,0,1,0-2c.12-.45.65-.67.72-1A2.73,2.73,0,0,0,77,61.37c.23-.48.94-.55,1.16-1.16a3.21,3.21,0,0,0-.07-1.74c.2-.37.63-.45.72-.87s-.18-.92-.14-1.37.38-.82.51-1.23a6.21,6.21,0,0,0,.22-1.67,9.53,9.53,0,0,0-.22-2.46c-.1-.36-.45-.68-.58-1a11.25,11.25,0,0,1-.43-4.48,23.12,23.12,0,0,1,.43-4.56,22.16,22.16,0,0,1,.79-2.17c.77-2,1.69-4.25,2.39-6.29,0-.41-.46-.45-.51-1s.5-1,.72-1.59a8.33,8.33,0,0,0,.14-1.59,6.71,6.71,0,0,1,.8-1.59,5.81,5.81,0,0,0,.79-2c.07-.54-.09-1.13,0-1.74a8.09,8.09,0,0,1,.79-2,22.36,22.36,0,0,1,2.39-4.41c.24-.31.52-.48.58-.72.15-.56-.09-1.1,0-1.52s.39-.43.51-.87c-.74-.76-2,0-3-.29-.46-.16-.54-.74-.87-.87a2.5,2.5,0,0,0-1.3,0,4.75,4.75,0,0,0-1.16.29c-.85.47-1.35,2.75-1.59,4-.29,1.49-.42,3.63-1.37,4.12-.71.37-1.33-.15-1.52.79a5.56,5.56,0,0,1-1-.87,5.38,5.38,0,0,0,.29-1.16c0-.58-.33-1.17-.29-1.67s.67-.85.8-1.3a12.66,12.66,0,0,0,0-2.46V6.62a.54.54,0,0,1,.22-.15H95.32c.28.11.35.42.51.65C96,7.05,96.38,7,96.48,7.2Z" transform="translate(-5.71 -4.48)"></BlizzardLogo>
    <BlizzardLogo d="M25.24,28.25a2.3,2.3,0,0,0,1.3.87c.45.16,1.41.18,1.66.51.76,1-.87,2-.36,2.75.25.35.26-.06.58.07.64.52.93,1.39,1.59,1.88-.34,1.78-.92,4.58-.07,6.22.32.61.88.73,1.16,1.3-.79,3.1.87,7.52-.22,10.13-.15.36-.59.72-.65,1.09a6.65,6.65,0,0,0,.22,1.66,6.84,6.84,0,0,1-.14,3.47,11.56,11.56,0,0,1-.58,1.59,27.71,27.71,0,0,0-1.66,2.82,18.44,18.44,0,0,0-.72,3.76,20.89,20.89,0,0,0-4.27,2.46,4.89,4.89,0,0,0-1.81,1.88c-1.48.26-3.16.32-4.12,1.08-.55,0-.66-.76-1.23-.8s-.81.76-1.3.94a5.07,5.07,0,0,1-1.52.14A18.26,18.26,0,0,1,10,71.71c-.56.36-1.31,0-2.1,0a2,2,0,0,0-.44,0c-.1,0-.22.21-.22.22-.29-.05-1-.91-1.08-1a7.84,7.84,0,0,0,2-1c.33-1.61,1-3.08,1.16-4.7.07-.66,0-1.35,0-2,.06-1.43.21-2.91.22-4.34,0-2.56-.5-5.12-.65-7.74-.19-3.42.27-6.83.14-10.34.11-.32.65-.21.8-.51-.1-.91.09-1.77-.07-2.68-.06-.34-.37-.6-.44-.94a14.56,14.56,0,0,1,.07-2.89c0-.42-.06-.87,0-1.23s.48-.76.58-1.23a3.28,3.28,0,0,0-.65-2.75V18.41a15.62,15.62,0,0,1,0-3.33c.11-.39.37-.38.58-.72-.16-.6.1-1.08-.14-1.37s-.59,0-1.23-.14c-.22-.13-.1-.39-.22-.58-.4-.66-1.34-1.11-1.88-1.74a8.85,8.85,0,0,0-.65-.87c.16-.45,0-.93.07-1.3s.51-.6.65-.87c.77-.08,1.73.11,2.6,0,.52-.07,1-.28,1.52-.36C13.61,6.62,17.4,7,20.83,6.7a12.74,12.74,0,0,1,3.62.15c.3.14.26.48.43.72A7,7,0,0,0,26,8.5c1.89-.13,2.71,1.21,3.4,2.46a8.51,8.51,0,0,1,1.08,3.18c.07.74,0,1.6.14,2.46a7.53,7.53,0,0,1,.07,3,6.88,6.88,0,0,1-.65,1.16C28.68,23.27,27.13,26.56,25.24,28.25ZM18.66,15.09c-.08.28-.45.27-.5.58V25.72a1.89,1.89,0,0,1,1.23.07c.62-.43.69-1.27,1.08-1.88a3.16,3.16,0,0,1,2.46-1.37c.05-1.61-.21-3.54.51-4.48a4.57,4.57,0,0,1-.51-2c.19-.29.58-.39.8-.65-.64-.23-.87,0-1.45-.22s-.64-.9-1-1c-.77-.23-1.58.46-2.46.22,0-.1.32-.38,0-.36A3.3,3.3,0,0,0,18.66,15.09Zm-.5,22.56c-.05.23-.24.37-.29.58-.31,1.2.32,2.3.29,3.4,0,.87-.53,1.72-.51,2.6-.37.14-.6.35-.58.72s.42.44.58.72v9.91A2.12,2.12,0,0,0,16.92,57a33.9,33.9,0,0,0,0,4.27,8.59,8.59,0,0,0,.21,2c-.33.58-.65,1.18-.94,1.81,1.63.09,1.82-1.27,3.11-1.52a21.66,21.66,0,0,0,1.88-2,5.45,5.45,0,0,0,.65-.65c.66-1.09.16-2.77.51-4.34a14,14,0,0,0,1.16-5c0-.32-.38-.25-.43-.51.71-.39.3-1.16.07-1.81a3.49,3.49,0,0,1-.36-2c0-.22.48-.51.58-.94.25-1.11-.5-1.4-.72-2-.48-1.31.31-2.23.43-3.47,0-.26-.31-.27-.36-.51.67-.79-.31-1.87-.5-2.24.15,0,.47.09.5-.07a1.75,1.75,0,0,1-.43-.87c0-.3.29-.29.22-.65a4.69,4.69,0,0,0-1.66-1.66,24.16,24.16,0,0,1-2.67-2.39C18.08,34.33,18.49,36.07,18.15,37.65Z" transform="translate(-5.71 -4.48)"></BlizzardLogo>
    <BlizzardLogo d="M57.49,7.13c5.34-.22,10.78.07,16.2,0,.15.9-.19,2,0,3,.07.35.44.71.51,1a14.46,14.46,0,0,1,0,2.53v7.38c-.14.3-.43.46-.58.87a4.29,4.29,0,0,0,.07,2.53c-1.77,1.63-2.14,4.66-3.4,6.8v2.46c-1.57.72-3.5,1.69-2.68,4.48-.12.31-.54.4-.8.65a14.82,14.82,0,0,0-2.24,4c-.31.69-.59,1.48-.87,2.24a12.36,12.36,0,0,0-.79,2.31c-.06.43.08.93,0,1.37a18,18,0,0,1-.79,2c-.62,1.75-1.19,3.48-2,5.14-.13.28-.38.62-.29.94.63.54,1.33,0,1.88-.29a8.66,8.66,0,0,1,1.67-.87c.48-.1.88,0,1.3-.14a2.89,2.89,0,0,0,1.08-.36,5.57,5.57,0,0,0,1.08-1.59c.82-1.28,1.8-2.73,3.62-3a4.63,4.63,0,0,1,1.16-2.46c.25.14.25.52.51.65C73.38,48.48,73.3,46.88,74,46h1.59a8,8,0,0,0,.29,3.4c-.16.29-.51.24-.72.51-.08.11-.16.47-.29.72a2.84,2.84,0,0,0-.43.94c-.28,2.13.17,5.58.14,7.81a3.44,3.44,0,0,0-2.32,1.16H66.32c-.36-.05-.29-.54-.58-.65-.46.17-.67,0-1,.07-.71.2-.88,1.07-1.45,1.16-.77.11-1.41-.54-2.1-.87h-4c-.29-.31-.72-.59-.72-1s.52-.74.8-1.09c.19-1.17-.26-2.29,0-3.25.08-.31.46-.51.51-.79.13-.78-.71-1.85-1.16-2.24a2.09,2.09,0,0,0,.51-1.16c0-.43-.36-.79-.44-1.16A10.06,10.06,0,0,1,57,46c.12-.69.16-1.47.29-2,.08-.3.34-.58.43-.87.26-.81.18-1.69.43-2.39.46-1.27,1.49-2.1,2.1-3a8.41,8.41,0,0,1,2.31-4.56A35.57,35.57,0,0,1,63.86,28a3.76,3.76,0,0,1,2-2.46c.4-1.28,1.38-2,2.17-2.89a5,5,0,0,1,0-3.33c.2-.37.59-.54.87-.87,1-1.2,1.79-2.87,2.89-3.76V11.18c-1.08,0-2.12,0-3.18-.07a11,11,0,0,0-2.53,0,8.88,8.88,0,0,0-1.45.72A3.43,3.43,0,0,0,62.7,15.3a2.62,2.62,0,0,0-2.17,1.23c-.18,1.58.25,3.23,0,4.63A3.75,3.75,0,0,1,60,22.32a3.59,3.59,0,0,1-.72,1,1.39,1.39,0,0,1-.58-1.59c-.09-.35-.45-.42-.58-.72a15.88,15.88,0,0,0-.51-2.75c.25-1,.77-2.47.36-3.54-.21-.55-.6-.69-.94-1.09.21-1.59-.28-3.41,0-4.84.11-.59.7-.95.58-1.52C57.58,7.19,57.55,7.15,57.49,7.13Z" transform="translate(-5.71 -4.48)"></BlizzardLogo>
    <BlizzardLogo d="M43.46,7.2a42.65,42.65,0,0,0,10.2,0,2,2,0,0,1,.94,2.1c-1.09.35-3,1.35-2.89,2.82,0,.53.61.86.58,1.52s-.65.83-.8,1.38a14.22,14.22,0,0,0,.07,3c.14,3.29.27,7,.07,10.42,0,.61-.18,1.21-.14,1.66a5.9,5.9,0,0,0,.22.65c.21.92.39,1.81.58,2.75-.43.48-.91.69-1,1.45a25.25,25.25,0,0,0,.22,3.91c0,.39,0,.77.07,1.08s.19.48.22.72a5.6,5.6,0,0,1-.07,1.88c-.16.44-.91.84-1,1.3A5.44,5.44,0,0,0,51,45.6c.13.61.13,1.25.22,1.81a5.81,5.81,0,0,0,.36,1.08,7.44,7.44,0,0,1,.43,1,10.8,10.8,0,0,1-.15,2,7.69,7.69,0,0,1-.14,1.88c-.13.34-.74.69-.79,1.09a5.75,5.75,0,0,0,.58,2.31c.34.55,1.13.78,1.74,1.16s1.24.86,1.66,1.16c.11.64.15,1.34.29,2-.68-.26-2-.5-2.6,0a9.27,9.27,0,0,0-3.83-.22,9.21,9.21,0,0,0-2.32.29c-.56.22-.95,1-1.37,1-.61,0-1-.72-1.23-.94.8-1,1.41-2.11,2.6-2.68a34.09,34.09,0,0,0,.36-5.42,10,10,0,0,1,.07-1.81c.1-.37.46-.51.51-.87.07-.55-.39-.9-.51-1.52A4.6,4.6,0,0,1,47,47c.1-.34.43-.63.51-1a24.73,24.73,0,0,0,0-3.47c0-5.45-.14-11.21-.14-16.42a13.17,13.17,0,0,1,0-2.68c.1-.34.16-.31.51-.58,0-.3-.45-.18-.51-.43-.2-3-.42-6.91-.58-10.27a5.49,5.49,0,0,0-.15-1.37c-.36-1-1.87-.51-2.24-1.52a1.85,1.85,0,0,1-.72-.07,9,9,0,0,0-.94-.94A5,5,0,0,1,43.46,7.2Z" transform="translate(-5.71 -4.48)"></BlizzardLogo>
        </BlizzLogo>
            <BlizzItems>Games ❯</BlizzItems>
            <BlizzItems>Shop</BlizzItems>
            <BlizzItems>News</BlizzItems>
            <BlizzItems>Esports ❯</BlizzItems>
        </BlizzList>
        <BlizzCont>
            <BlizzItems2>Support</BlizzItems2>
            <BlizzItems2>My account ❯</BlizzItems2>
        </BlizzCont>
        </BlizzWrap>
    </NavWrap>
)

}

export default Navbar;