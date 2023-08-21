import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  border: 1px solid #000;
`;
export const CardUser = styled.div`
  text-align: center;
`;
export const ImgUser = styled.img`
  width: 100%;
  display: block;
`;
export const TextUserName = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
export const TextUser = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 8px;
`;
export const List = styled.ul`
  display: flex;
  background-color: #c8ccca;
  list-style-type: none;
  padding: 0;
  justify-content: space-around;

  margin: 0;
`;
export const FlexsSpan = styled.li`
  display: flex;
  flex-direction: column;
  align-content: space-around;


  padding-bottom: 30px;
  padding-top: 30px;
`;
export const TextSpan = styled.span`
  margin: auto;
`;
