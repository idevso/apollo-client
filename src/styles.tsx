import styled from "styled-components";


export const HeaderContainer = styled.div`
  position: relative;
  height: 160px;
  width: 100%;
  top: 0 !important;
  background-color: white;
  color: black;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  cursor: default;
  
`

export const CategoriesContainer = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
  top: 0 !important;
  background-color: white;
  color: black;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  cursor: default;
`

export const HeaderText = styled.h1`
  position: absolute;
  border: 1px solid white;
  font-size: 70px;

`

export const MessageContainer = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  top: 0 !important;
  background-color: white;
  color: black;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  cursor: default;
`

export const JokeButtonContainer = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
  color: black;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  cursor: pointer;
`

export const RequestJokeButton = styled.div`
    min-width: 200px;
    height: 60px;
    background-color: #12043e;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RequestJokeButtonText = styled.p`
    color: white;

`;

// categories 

export const CategoryList = styled.div`
    position: absolute;
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;
    display: flex;
    overflow-x: auto;
    

`;

export const CategoryItem = styled.div<{ active: boolean }>`
    position: relative;
    right : 0;
    left: 0;
    margin-left: 10px;
    min-width: 150px;
    height: 50px;
    top: 10px;
    border-radius: 5px;
    background-color: ${props => (props.active ?  "#280886" : "rgba(0, 0, 0, 0.1)" )};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${props => (props.active ?  "white" : "black" )};
    cursor: pointer;
`

// message 

export const MessageValueContainer = styled.div`
    position: absolute;
    width: 50%;
    height: 80%;
    left: 25% !important;
    top: 10%;
    text-align: center;
`;

export const Text = styled.p`
    color: black;
`;