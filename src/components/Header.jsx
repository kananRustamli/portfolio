import tw from "tailwind-styled-components";

const Header = () => {
  return (
    <Container>
      <TextContainer>
        <Title>KANAN RUSTAMLI</Title>
        <Description>Web Developer</Description>
      </TextContainer>
      <SkillContainer>
        <Skill src="/img/htmllogo.svg" alt="" />
        <Skill src="/img/csslogo.svg" alt="" />
        <Skill src="/img/jslogo.svg" alt="" />
        <Skill src="/img/reactlogo.svg" alt="" />
        <Skill src="/img/nextlogo.svg" alt="" />
        <Skill src="/img/tailwindlogo.svg" alt="" />
        <Skill src="/img/bootstraplogo.svg" alt="" />
        <Skill src="/img/gitlogo.svg" alt="" />
        <Skill src="/img/nodejslogo.svg" alt="" />
        <Skill src="/img/mongodblogo.svg" alt="" />
      </SkillContainer>
    </Container>
  );
};

const Container = tw.header`
  h-screen
  flex items-center justify-center flex-col
  bg-gradient-to-t from-indigo-200 to-white z-4
  dark:bg-gradient-to-t dark:from-indigo-900 dark:to-slate-900 dar:text-white
  lg:h-screen
`;

const TextContainer = tw.div`
text-center
`;

const Title = tw.span`
text-gray-600 dark:text-gray-100 text-extrabold text-2xl
sm:text-4xl
md:text-6xl
xl:text-7xl
`;
const Description = tw.p`
  text-red-500 dark:text-red-300
  text-xs
  sm:text-md
  md:text-xl
  xl:text-2xl
  `;
const SkillContainer = tw.div`flex items-center justify-center mt-10`;
const Skill = tw.img`h-4 mx-1 md:h-8 md:mx-2`;

export default Header;
