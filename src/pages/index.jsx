import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax } from 'react-spring/renderprops-addons.cjs';

// Components
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

// Elements
import Inner from '../elements/Inner';
import { Title, BigTitle, Subtitle } from '../elements/Titles';

// Views
import Hero from '../views/Hero';
import Projects from '../views/Projects';
import About from '../views/About';
import Contact from '../views/Contact';

import avatar from '../images/sana.jpeg';

// icon

import { Yelp } from 'styled-icons/fa-brands/Yelp';
import { Phone } from 'styled-icons/icomoon/Phone';
// import { Facebook } from 'styled-icons/fa-brands/Facebook';

// pic
// import oil from './../images/oil.jpeg';

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Button = styled.a`
  background-color: #d2b300;
  color: white;
  height: 40px;
  text-transform: uppercase;
  font-family: 'Square Market', 'helvetica neue', helvetica, arial, sans-serif;
  letter-spacing: 1px;
  line-height: 38px;
  padding: 0 28px;
  border-radius: 3px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
`;
const Map = styled.iframe`
              
              
              frameborder:"0";
              border:0";
              allowfullscreen`;

// const Logo = styled.image``;

const Index = () => (
  <>
    <Layout />

    <Parallax pages={5.5}>
      <Hero offset={0}>
        <BigTitle>Sana Thai Massage Malibu</BigTitle>
        <Subtitle>Experience the best healing from the best healer.</Subtitle>
        <Button
          target="_blank"
          href="https://squareup.com/appointments/book/ES1N5GVDKNW0X/sana-thai-massage-malibu-malibu-ca"
          rel="noopener noreferrer"
        >
          Book an appointment now
        </Button>
      </Hero>
      <Projects offset={1}>
        <Title>Services</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Traditional Thai Massage"
            bg="#D76F24"
            // bg={oil}
          >
            Authentic Thai massage is a traditional healing system that combines
            with acupressure (derived from acupuncture) and assisted yoga
            posture. Thai massage heals by focusing on tense areas to simulate
            energy flow and clear blockages that cause pain or discomfort. It
            eases anxiety, creates improved mood, migraines, immune function and
            offers relief for osteoarthritis. If you have a health condition
            that may be concerning, please inform Sana before you book this.
            <p>60 min $80 | 90 min $110</p>
          </ProjectCard>
          <ProjectCard title="Swedish Massage" bg="#C24936">
            Swedish massage is more relaxing and releases tension by using
            pressure and stroke method that results in holistic effects that can
            aid chronic pain, tension headaches, and muscle tightness. There are
            five primary strokes you can experience with Swedish massage.
            <p>60 min $80 | 90 min $110</p>
          </ProjectCard>
          <ProjectCard title="Deep tissue Massage" bg="#CE5173">
            Deep tissue massage is more slow-moving and more geared towards
            issues with muscle and posture. It is considered more therapeutic
            than soothing, but it is not uncomfortable for painful. It is meant
            for people experiencing persistent pain in muscle and joints.
            <p>60 min $80 | 90 min $110</p>
          </ProjectCard>
          <ProjectCard title="TMJ, Neck & Shoulder Massage" bg="#9E4566">
            TMJ Massage therapy is a specialty work that is in high demand for
            improving symptoms for those suffering from temporomandibular joint
            dysfunction.
            <p>60 min $85</p>
          </ProjectCard>
          <ProjectCard title="Extra Stretching Massage" bg="#3C3952">
            Stretch incorporated with massage has many great results including
            enhanced flexibility, an increase of range of motion, better
            circulation, mobility, and improved posture. After the stretch
            massage, you will experience better performance due to the better
            nutrition that is given to the joint surfaces.
            <p>60 min $85</p>
          </ProjectCard>
          <ProjectCard
            title="CBD Oil add-on"
            bg="linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"
          >
            CBD oil is proven to add a more intense result to any massage
            therapy. It is an endocannabinoid system which includes CB1 and CB2.
            The cannabinoid oil interacts well with the CB1 receptors on cell
            surfaces of the body to provide better results. CBD oil also offers
            relief from soreness or any tension in the muscle.
            <p>Add-On $50</p>
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3.5}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Sana" />
          <AboutSub>
            Sana is a licensed massage practitioner in Los Angeles. She is
            originally from Bangkok, Thailand where she learned massage at the
            Wat Pho Thai Traditional medical and massage school and Chiva Som
            Academy. She discovered she had a passion for healing people using
            massage therapy. She came to America in 2009 and began working as a
            physical therapist assistant for ten years. After she owned and
            worked at Malibu Thai Bodyworks in Malibu for five years.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Sana is an expert at healing areas where there is a lot of tension or
          limited mobility. Her services include Thai, TMJ, Swedish, deep
          tissue. She recently incorporated CBD oil into her massage services
          and that is an available option if you are looking for extra healing.
          When Sana is not a masseuse you will always find her traveling to
          expand her masseuse experiences and enjoying new cuisines and sights.
          She has traveled and massaged at New York, her other home as well. She
          lives with her husband, son, and Siberian Husky in Los Angeles. She
          lives with her youngest son in New York. She believes massage is very
          important if done routinely and correctly because it comes with a mass
          side of benefits and a more refreshed feeling. Sana is always open for
          ways to enhance and improve her massage. She can take requests or
          anything to provide the best possible experience. Recently, she has
          incorporated CBD oil with her technique to improve muscle and mind.
        </AboutDesc>
      </About>

      <Contact offset={4.6}>
        <Inner>
          <Title>By Appointment Only</Title>

          <ContactText>
            <Phone size="35" color="green" />
            <a className="mobilesOnly" href="tel:8183596516">
              Call (818) 359-6516
            </a>{' '}
            or find me on <Yelp size="35" color="red" />
            <a
              href="https://www.yelp.com/biz/sana-thai-massage-malibu-malibu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yelp
            </a>
            <p>21241 Pacific Coast Hwy Malibu, CA 90265 </p>
            <Map src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d261.5150628572078!2d-118.63778236214873!3d34.03738608395676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a1ff554461f0d08!2sSana+Thai+Massage+Malibu!5e0!3m2!1sen!2sus!4v1553724022923" />
          </ContactText>
          <Button
            target="_blank"
            href="https://squareup.com/appointments/book/ES1N5GVDKNW0X/sana-thai-massage-malibu-malibu-ca"
            rel="noopener noreferrer"
          >
            Book an appointment now
          </Button>
        </Inner>

        <Footer />
      </Contact>
    </Parallax>
  </>
);

export default Index;
