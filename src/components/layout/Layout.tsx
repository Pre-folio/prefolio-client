import React from 'react';
import styled from 'styled-components';
import { Header } from '../common/Header';
import ScrollToTop from '../common/ScrollToTop';
import { Section } from '../common/Wrapper';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <Section>{children}</Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;

  @media screen and (max-width: 1200px) {
    /* width: 1200px; */
  }
`;
