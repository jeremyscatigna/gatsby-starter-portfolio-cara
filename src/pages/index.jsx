import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatarJS.png'

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
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Jeremy Scatigna.
        </BigTitle>
        <Subtitle>I'm creating experiences for the next generation of consumer-facing companies.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Traffic light classifier"
            link="https://github.com/jeremyscatigna/Traffic_light_classifier"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project is my last project of Intro to Self Driving cars Nanodegree.
          </ProjectCard>
          <ProjectCard
            title="2D Histogram Filter in Python"
            link="https://github.com/jeremyscatigna/2D_histogram_filter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            This project is part of my Intro to Self Driving cars Nanodegree.
          </ProjectCard>
          <ProjectCard
            title="2D Histogram Filter in C++"
            link="https://github.com/jeremyscatigna/2D-HistogramFilterCPP"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            This project is part of my Intro to Self Driving cars Nanodegree.
          </ProjectCard>
          <ProjectCard
            title="Matrix Class"
            link="https://github.com/jeremyscatigna/matrix-class"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            This project is part of my Intro to Self Driving cars Nanodegree.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Jeremy Scatigna" />
          <AboutSub>
            Frenchy Software Engineer slightly geek on the edges and optionally a Tech lover. I'm pretty good at having
            fun and drinking beers and I developed some sniper skills at playing ping pong.
          </AboutSub>
        </AboutHero>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:hey@jeremyscatigna.tech">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/jeremyscatigna">Github</a> &{' '}
            <a href="https://twitter.com/scatigna_jeremy">Twitter</a>
          </ContactText>
        </Inner>
        <Footer />
      </Contact>
    </Parallax>
  </>
)

export default Index
