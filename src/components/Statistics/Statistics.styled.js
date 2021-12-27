import styled from '@emotion/styled'

const getRandomHexColor=()=> {
 return  `#${(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)}`;
}

export const StatisticsCard = styled.section`
max-width: 420px;
margin: 0 auto;
margin-bottom: 20px;

background-color: #fff;
`

export const Title = styled.h2`
color: #6a6e73;
text-transform: uppercase;
font-weight: 500;
font-size: 20px;
line-height: 1.179;
padding: 30px 0 10px;
`

export const StatList = styled.ul`display: flex;`


export const Item = styled.li`
width: 100%;
display: flex;
flex-direction: column;
padding: 20px;
color: #ffffff;
background-color: ${getRandomHexColor};
`
