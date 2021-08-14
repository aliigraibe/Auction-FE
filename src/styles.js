import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

export const Center = styled.div``;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-top: 50px;
  border-radius: 4%;
`;

export const ProductsStyle = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin-bottom: 100px;
`;

export const Item = styled.div`
  text-align: center;

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4%;
  }

  p {
    font-weight: bold;
  }
`;

export const ItemDetail = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  height: 25 rem;

  display: flex;
  justify-content: center;
`;

export const DetaledImage = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 5%;
  position: absolute;

  left: 390px;
  top: 270px;
  border: 0px solid;
  box-shadow: 0px 0px 7px 7px rgba(86, 148, 255, 0.5);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 18rem;
  border-radius: 1%;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  display: block;
`;

export const StyledButton = styled.button`
  box-shadow: inset 0px 1px 3px 0px #91b8b3;
  background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
  background-color: #768d87;
  border-radius: 12px;
  border: 2px solid #566963;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 28px;
  font-weight: bold;
  padding: 0px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #2b665e;
  margin-bottom: 20px;
  :hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;

export const NavB = styled.nav`
  background-color: ${(props) => props.theme.backGroundColor};
  padding: 5px;
  /* border-bottom: 1px solid ${(props) => props.theme.thirdColor}; */
  display: flex;
  justify-content: space-between;
`;
export const LinkItem = styled(NavLink)`
  background-color: ${(props) => props.theme.backGroundColor};
  color: ${(props) => props.theme.textColor};
  padding: 5px;

  &.active {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.backGroundColor};
    padding: 5px;
    margin: 5px;
  }
`;

export const Logo = styled(Link)`
  padding: 5px;
  display: flex;
  letter-spacing: 2px;
  img {
    width: 50px;
    margin-right: 15px;
  }
`;

export const ButtonLink = styled(Link)`
  padding: 5px;
  width: 50px;
`;

export const FlexStyle = styled.div`
  /* margin-top: 20px; */

  display: flex;
  justify-content: center;
`;

export const FlexStyleVer = styled.div`
  /* margin-top: 20px; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormCenter = styled.form`
position: absolute;
  top:150px;
  left:600px;
  width: 500px;
  border: 3px solid #394BF2;
  border-radius: 30px;
  padding: 20px;
  color: white;
  text-align: center;
  animation-name: example;
animation-duration: 2s;
animation-iteration-count: infinite;
animation-direction: alternate;
}
@keyframes example {
  from {border: 5px solid #394BF2;;}
  to {border: 5px solid white;;}
}
`;

export const GlobalStyle = createGlobalStyle`


body{
  
  background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/750px-Black_flag.svg.png") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
`;

export const ButtonsStyle = styled.div`
  display: flex;
  justify-content: left;
`;
export const theme = {
  light: {
    textColor: "black", // main font color
    backGroundColor: "#11224B", // main background color
    secoundColor: "gray",
    thirdColor: "#a9f1df",
  },

  dark: {
    textColor: "black", // main font color
    backGroundColor: "#11224B", // main background color
    secoundColor: "#2940d3",
    thirdColor: "#a9f1df",
  },
  reverse: {
    textColor: "black", // main font color
    backGroundColor: "#11224B", // main background color
    secoundColor: "#2940d3",
    thirdColor: "#a9f1df",
  },
};

export const ChatDiv = styled.div`
  margin-top: 200px;
  width: 80%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const DivStyle = {
  overflowY: "scroll",
  border: "1px solid red",
  width: "500px",
  float: "left",
  height: "500px",
  position: "relative",
};
export const SearchBarStyled1 = styled.input`
  width: 313px;
  height: 43px;
  position: absolute;
  top: 0.9px;
  border: 0px solid;
  border-radius: 30px;
  right: 1px;
`;
