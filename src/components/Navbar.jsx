import React from "react";
import tw from "tailwind-styled-components";
import { FiMenu, FiMoon } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <Nav>
      <Container>
        <Title>KANAN DEV</Title>
        <RightContainer>
          <Menu>
            <Item>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Intro
              </Link>
            </Item>
            <Item>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About me
              </Link>
            </Item>
            <Item>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
              >
                Projects
              </Link>
            </Item>
            <Item>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </Item>
          </Menu>
          <DarkMode onClick={props.themeSwitch} />
        </RightContainer>
        <MenuResponsive onClick={() => setSidebar(!sidebar)} />
      </Container>
      <Sidebar open={sidebar}>
        <DarkModeResp onClick={props.themeSwitch} />
        <SideMenu>
          <SideItem>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setSidebar(false)}
            >
              Home
            </Link>
          </SideItem>
          <SideItem>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setSidebar(false)}
            >
              About me
            </Link>
          </SideItem>
          <SideItem>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onClick={() => setSidebar(false)}
            >
              Projects
            </Link>
          </SideItem>
          <SideItem>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setSidebar(false)}
            >
              Contact
            </Link>
          </SideItem>
        </SideMenu>
      </Sidebar>
    </Nav>
  );
};

const Nav = tw.nav`w-full fixed top-0 bg-white dark:bg-slate-900 dark:text-white`;
const Container = tw.div`container mx-auto px-2 py-4 flex justify-between items-center`;
const Title = tw.span`text-xl font-bold text-indigo-900 dark:text-indigo-100`;
const RightContainer = tw.div`flex justify-end items-center uppercase`;
const Menu = tw.ul`hidden md:flex items-center`;
const Item = tw.li`px-5 text-gray-600 text-sm font-bold hover:text-gray-500 dark:text-gray-300 cursor-pointer`;
const MenuResponsive = tw(FiMenu)`
  md:hidden w-8 h-8 p-1 flex bg-white rounded z-50 dark:bg-slate-900 dark:text-white
`;
const DarkMode = tw(FiMoon)`hidden md:flex w-8 h-8 p-1`;
const DarkModeResp = tw(FiMoon)`
  absolute w-8 h-8 right-6 bottom-4 p-1 rounded text-white z-10
`;

const Sidebar = tw.div`
  flex items-center justify-center relative fixed z-40
  w-screen h-[50vh] bg-indigo-600 left-0 z-40
  duration-200 ease-in-out
  ${(props) => (props.open ? "top-0" : "top-[-100vh]")}
  `;
const SideMenu = tw.ul`flex flex-col h-3/4 justify-around`;
const SideItem = tw.li`text-white text-xs font-bold uppercase`;

export default Navbar;
