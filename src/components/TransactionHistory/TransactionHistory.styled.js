import styled from "@emotion/styled";

export const Table = styled.table`
  margin: 0 auto;
  padding: 20px;
  width: 350px;
  background: #f5ffff;
  border-collapse: collapse;
}
`;

export const Title = styled.th`
  border-top: 1px solid #777777;
  border-bottom: 1px solid #777777;
  box-shadow: inset 0 1px 0 #999999, inset 0 -1px 0 #999999;
  background: linear-gradient(#9595b6, #5a567f);
  color: white;
  padding: 10px 15px;
  position: relative;
`; 

export const Data = styled.td`
  border: 1px solid #e3eef7;
  padding: 10px 15px;
  position: relative;
  transition: all 0.5s ease;
`;