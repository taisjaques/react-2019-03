import React from "react";
import styled from "styled-components";
import { FaStopwatch, FaGamepad, FaCameraRetro, FaAtlas } from "react-icons/fa";
import MenuButtonComponent from "../../components/menu-button/menu-button.component";
import ChangeLayoutButton from '../../components/change-layout-button/change-layout-button.component'

const menuButtons = [
  {
    icon: <FaStopwatch />,
    path: "contador",
    title: "Contador"
  },
  {
    icon: <FaGamepad />,
    path: "jogo-da-velha",
    title: "Jogo da velha"
  },
  {
    icon: <FaCameraRetro />,
    path: "fotos",
    title: "Fotos"
  },
  {
    icon: <FaAtlas />,
    path: "fala",
    title: "Fala"
  }
];

class HomePage extends React.Component {
  render() {
    return (
      <StyledContainer>
        <ChangeLayoutButton />
        {menuButtons.map((menu, index) => (
          <MenuButtonComponent
            key={index}
            Icon={menu.icon}
            path={menu.path}
            title={menu.title}
          />
        ))}
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: space-evenly;
`;

export default HomePage;
