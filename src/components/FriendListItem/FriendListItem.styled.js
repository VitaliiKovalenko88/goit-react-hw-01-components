import styled from "@emotion/styled";

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #8a9fb7;
  box-shadow: 8px 10px 14px 0px rgb(34 60 80 / 20%);
`;

export const Status = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? `green` : `red`)};
`;

export const Avatar = styled.img`
  margin-right: 20px;
  background-color: #a6ea93;
  border-radius: 10px;
`;

export const Name = styled.p`
  font-weight: 800;
  font-size: 20px;
  line-height: 1.179;
`;
