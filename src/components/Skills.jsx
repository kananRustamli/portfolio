import tw from "tailwind-styled-components";

const Skills = () => {
  return (
    <Container id="skills">
      <SectionTitle>Skills</SectionTitle>
      <Section>
        <Row>
          <Skill>
            <Name>HTML</Name>
            <Percent>100%</Percent>
          </Skill>
          <Skill>
            <Name>CSS</Name>
            <Percent>100%</Percent>
          </Skill>
          <Skill>
            <Name>JavaScript</Name>
            <Percent>100%</Percent>
          </Skill>
          <Skill>
            <Name>React</Name>
            <Percent>90%</Percent>
          </Skill>
          <Skill>
            <Name>Tailwind</Name>
            <Percent>100%</Percent>
          </Skill>
          <Skill>
            <Name>Bootstrap</Name>
            <Percent>80%</Percent>
          </Skill>
        </Row>
        <Row>
          <Skill>
            <Name>Node/Express</Name>
            <Percent>30%</Percent>
          </Skill>
          <Skill>
            <Name>MongoDB</Name>
            <Percent>30%</Percent>
          </Skill>
          <Skill>
            <Name>Problem Solving</Name>
            <Percent>100%</Percent>
          </Skill>
          <Skill>
            <Name>Analytical thinking</Name>
            <Percent>100%</Percent>
          </Skill>
          <Skill>
            <Name>Googling</Name>
            <Percent>100%</Percent>
          </Skill>
        </Row>
      </Section>
    </Container>
  );
};

const Container = tw.div`
  w-full h-screen px-10 py-20
  flex items-center justify-center flex-col
  lg:flex-row
  dark:bg-slate-900 dark:text-white
  `;
const SectionTitle = tw.span`
  text-xl font-bold flex-1
  sm:text-4xl
  md:text-5px
  lg:text-6xl
  `;
const Section = tw.div`w-full flex flex-1 flex-col md:flex-row items-center lg:items-start justify-center md:gap-10`;
const Row = tw.div`w-full`;
const Skill = tw.div`font-lg md:font-2xl my-2 flex w-full justify-between border-b-4 border-red-500`;
const Name = tw.div``;
const Percent = tw.div``;

export default Skills;
