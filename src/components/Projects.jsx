import { useState } from "react";
import tw from "tailwind-styled-components";

const projectData = [
  {
    index: 0,
    name: "Uber Clone",
    img: "img/uber.jpg",
    description:
      "A functional UBER clone with mapbox api, geocoding, login/logout and firebase integration.",
    techUsed: "NextJS, React, Styled COmponents, TailwindCSS, Firebase,",
    link: "https://uber-clone-bice-psi.vercel.app/",
    github: "https://github.com/kananRustamli/uber-clone",
  },
  {
    index: 1,
    name: "Dictionary App",
    img: "img/ribbon.jpg",
    description:
      "A dictionary app that uses outisde api to fetch words and enables to save them to localstorage",
    techUsed: "NextJS, React, Styled COmponents, TailwindCSS, Firebase,",
    link: "https://ribbondict.netlify.app/",
    github: "https://github.com/kananRustamli/ribbondict",
  },
  {
    index: 2,
    name: "Face Detection",
    img: "img/face.jpg",
    description: "A realtime face, age and gender detection app",
    link: "https://face-detection-99.netlify.app/",
    github: "https://github.com/kananRustamli/face-detection",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(projectData[0]);

  return (
    <Container id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectsContainer>
        <ProjectsSection>
          {projectData.map((project) => (
            <SingleProject
              key={project.index}
              onClick={() => setSelected(projectData[project.index])}
              selection={project.index === selected.index ? "true" : "false"}
            >
              <SingleImageContainer>
                <SingleImage src={project.img} alt="" />
              </SingleImageContainer>
              <SingleTitle>{project.name}</SingleTitle>
            </SingleProject>
          ))}
        </ProjectsSection>
        <SelectedProject>
          <ImageContainer>
            <Image src={selected.img} alt="" />
          </ImageContainer>
          <SelectedTitle>{selected.name}</SelectedTitle>
          <SelectedDescription>{selected.description}</SelectedDescription>
          <ButtonBox>
            <a href={selected.link}>
              <Button color="primary">Visit</Button>
            </a>
            <a href={selected.github}>
              <Button color="secondary">Source Code</Button>
            </a>
          </ButtonBox>
        </SelectedProject>
      </ProjectsContainer>
    </Container>
  );
};

const Container = tw.div`w-full min-h-[calc(100vh-7rem)] lg:px-5 dark:bg-slate-900 dark:text-white`;

const SectionTitle = tw.h1`
  text-2xl text-center font-bold lg:text-4xl lg:text-left`;

const ProjectsContainer = tw.div`
  flex flex-col items-start justify-between
  h-full w-full py-4
  md:flex-row-reverse
  lg:pt-12
`;
const ProjectsSection = tw.div`
  h-full w-full
  grid
  grid-cols-3
  md:gri-cols-2
  lg:grid-cols-3
  xl:grid-cols-5
`;

const SingleProject = tw.div`
  w-full h-40 mb-2
  md:h-64
  lg:h-72
  hover:dark:bg-indigo-800 hover:bg-indigo-300 cursor-pointer
  dark:text-white
  ${(props) =>
    props.selection === "true"
      ? "bg-indigo-500 dark:bg-indigo-500 text-white"
      : "bg:white dark:bg-slate-900"}
  `;
const SingleImageContainer = tw.div`
  flex items-center justify-center
  w-full h-32 p-1
  md:h-36 md:p-2
  lg:h-48
  xl:h-56
  `;
const SingleImage = tw.img`
  h-full w-full
  object-cover object-top
  `;
const SingleTitle = tw.h1`text-xs md:text-xl text-center w-full my-1`;

const SelectedProject = tw.div`
    w-full h-3/4 md:w-[480px] bg-indigo-300 lg:h-[36.5rem] p-5
    dark:bg-slate-700 dark:text-white
  `;

const ImageContainer = tw.div`flex justify-center items-center h-72 w-full p-2`;
const Image = tw.img`w-full h-full object-cover object-left`;
const SelectedTitle = tw.h1`text-2xl text-bold mt-2`;
const SelectedDescription = tw.p``;
const ButtonBox = tw.div`flex items-center justify-start mt-2 gap-2`;
const Button = tw.div`bg-blue-500 justify-center items-center text-white text-xl px-4 py-2`;

export default Projects;
