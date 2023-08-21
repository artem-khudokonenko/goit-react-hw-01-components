import styled from 'styled-components';


const getColor = props => {
if (props.color.isOnline) {
    return "green"
} else {
    return "red"
}

  };
export const ListFrends = styled.ul`
  background-color: #c8ccca;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 300px;
  border: 1px solid black;
`;

export const ItemFrend = styled.li`
display: flex;
justify-content: center;
align-items: center;
`;
export const Span=styled.span`
width: 10px;
height: 10px;
background-color: ${getColor};
border-radius: 50%;
`
