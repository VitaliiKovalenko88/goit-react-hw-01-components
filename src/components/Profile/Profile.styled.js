import styled from '@emotion/styled'

export const ProfileContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: #caffcd;
  border: 1px solid #cccccc;
  box-shadow: 8px 10px 14px 0px rgba(34, 60, 80, 0.2);
`;

  export const Avatar = styled.img`
    width: 140px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 50%;
    background-color: #89fff7;
    overflow: hidden;
  `;

  export const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.179;`

  export const Text = styled.p`
  color: #7d8687`

  export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  `
export const StatsItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
width: 100%;
background-color: #e5e5e5;
border: 1px solid #cccccc;
`
export const LabelEl = styled.span`
color: #7d8687
`

export const QuantityEl = styled.span`
font-size: 20px;
font-weight: 700;
line-height: 1.179
`