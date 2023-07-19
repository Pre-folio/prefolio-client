import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/theme';
import { Header } from '../common/Header';
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

    ${media.mobile} {
        margin: 0px 16px 0px 16px;
    }
`;
