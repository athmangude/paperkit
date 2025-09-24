import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
  Card,
  Heading,
  Link,
  BodyText,
  Header
} from '../components';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <Header />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <Card elevation="high" padding="large" className="hero-card">
            <Heading level={2}>About Paper Kit</Heading>
            <BodyText>
              A design system born from the love of low-fidelity design and the desire to bring that aesthetic to React development.
            </BodyText>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="container">
          <div className="content-grid">
            <Card elevation="medium" padding="large" className="inspiration-card">
              <Heading level={3}>The Inspiration</Heading>
              <BodyText>
                Paper Kit was inspired by the joy of designing low-fidelity interfaces in Figma. 
                There's something beautiful about the simplicity and clarity that comes from 
                hand-drawn, paper-like designs that focus on functionality over flashy aesthetics.
              </BodyText>
              <BodyText>
                We wanted to continue that vibe in React development - creating components that 
                feel natural, approachable, and purposeful. Every component in Paper Kit is 
                designed to feel like it was sketched on paper first, then brought to life in code.
              </BodyText>
            </Card>

            <Card elevation="medium" padding="large" className="use-cases-card">
              <Heading level={3}>When to Use Paper Kit</Heading>
              <BodyText>
                Paper Kit is perfect for projects where you want to focus on user experience 
                and functionality without getting distracted by complex visual effects.
              </BodyText>
              
              <div className="use-case-list">
                <div className="use-case-item">
                  <Heading level={4}>No Design System in Place</Heading>
                  <BodyText>
                    When you're starting a new project and need a cohesive set of components 
                    that work well together out of the box.
                  </BodyText>
                </div>

                <div className="use-case-item">
                  <Heading level={4}>UX Flow Prototyping</Heading>
                  <BodyText>
                    Perfect for presenting user experience flows and wireframes that need 
                    to feel interactive and polished without overwhelming visual complexity.
                  </BodyText>
                </div>

                <div className="use-case-item">
                  <Heading level={4}>Rapid Development</Heading>
                  <BodyText>
                    When you need to build functional interfaces quickly while maintaining 
                    a professional, consistent look and feel.
                  </BodyText>
                </div>

                <div className="use-case-item">
                  <Heading level={4}>Content-Focused Applications</Heading>
                  <BodyText>
                    Ideal for applications where content is king - documentation sites, 
                    blogs, dashboards, and tools that prioritize usability over visual flair.
                  </BodyText>
                </div>
              </div>
            </Card>

            <Card elevation="medium" padding="large" className="philosophy-card">
              <Heading level={3}>Our Philosophy</Heading>
              <BodyText>
                We believe that great design is invisible. When users interact with your 
                application, they should focus on their tasks, not on the interface itself.
              </BodyText>
              <BodyText>
                Paper Kit embraces the "vibe coding" approach - building interfaces that 
                feel natural and intuitive, as if they were designed with a pencil and paper 
                before being translated into code.
              </BodyText>
            </Card>

            <Card elevation="medium" padding="large" className="cta-card">
              <Heading level={3}>Get Started</Heading>
              <BodyText>
                Ready to bring the paper aesthetic to your React projects? 
                Explore our components and start building interfaces that feel natural and purposeful.
              </BodyText>
              <div className="cta-actions">
                <RouterLink to="/showcase">
                  <Button variant="primary" size="large">View Showcase</Button>
                </RouterLink>
                <RouterLink to="/documentation">
                  <Button variant="outline" size="large">Read Documentation</Button>
                </RouterLink>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
