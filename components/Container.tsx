import Head from 'next/head';
import React, { ReactNode } from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import metadata from '../data/metadata';
import Image from './atoms/Image';

const Container = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Div>
        <Head>
          <title>Duck 블로그</title>
        </Head>
        <Header>
          <div className="img-con">
            <Image src="/home.jpg" alt="blog-img" autoSize={false} width={50} height={50} />
            <span className="title">{metadata.title}</span>
          </div>
          <Nav />
        </Header>
        <Main>{props.children}</Main>
      </Div>
    </>
  );
};

export default Container;

const Main = styled.main`
  width: 100%;
  max-width: 48rem;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
  .img-con {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 100%;
    .title {
      padding-left: 0.75rem;
    }
  }
  .con {
    border-radius: 100%;
  }
`;

const Header = styled.header`
  max-width: 48rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.25rem;
`;
