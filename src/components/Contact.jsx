import tw from "tailwind-styled-components";
import {
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillPhone,
} from "react-icons/ai";

const Contact = () => {
  return (
    <Container id="contact">
      <SectionTitle>Contact</SectionTitle>
      <Section>
        <Row>
          <Item>
            <a href="https://linkedin.com/kananrustamli">
              <AiFillLinkedin />
            </a>
          </Item>
          <Item>
            <a href="https://github.com/kananrustaml">
              <AiFillGithub />
            </a>
          </Item>
        </Row>
        <Col>
          <ColItem>
            <AiFillMail /> kenanrustamli@gmail.com
          </ColItem>
          <ColItem>
            <AiFillPhone /> + 994 50 470 40 96
          </ColItem>
        </Col>
      </Section>
    </Container>
  );
};

const Container = tw.div`
  w-full h-[50vh] px-10 py-20
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
const Section = tw.div`flex flex-1 items-center lg:items-start justify-center flex-col gap-10`;
const Row = tw.ul`flex`;
const Item = tw.li`text-5xl px-2 hover:text-6xl duration-200 ease-in-out`;

const Col = tw.ul`flex flex-col`;
const ColItem = tw.li`flex items-center gap-2 mb-2 md:text-2xl text-lg`;

export default Contact;
