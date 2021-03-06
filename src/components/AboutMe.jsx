import tw from "tailwind-styled-components";

const info = "";

const AboutMe = () => {
  return (
    <Container id="about">
      <SectionTitle>About me...</SectionTitle>
      <Section>
        <ImageContainer>
          <Image src="/img/i.jpg" alt="" />
        </ImageContainer>
        <Paragraph>
          I am a web developer with strong JavaScript knowledge. My main stack
          is front-end but I also have fundamental back-end skills and high
          interest on mastering MERN stack. I can build modern responsive web
          apps with HTML/CSS, React, NextJS and connect it with back-end API. I
          am a fast learner and constantly self-improving by researching
          subjects I am not fully familiar with.
        </Paragraph>
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
const Section = tw.div`flex flex-[2] justify-center items-center flex-col gap-10`;
const Paragraph = tw.span`text-lg md:text-2xl xl:text-3xl text-justify`;
const ImageContainer = tw.div`flex items-center justify-center`;
const Image = tw.img`
  object-cover rounded-full
  w-24 h-24
  sm:w-32 sm:h-32
  md:w-36 md:h-36
  lg:w-48 lg:h-48`;

export default AboutMe;
