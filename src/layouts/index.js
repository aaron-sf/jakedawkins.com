import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

import { Header, Footer } from '../components';
import './index.css';
import siteData from '../info';

const Wrapper = styled.div({
  flex: 1,
  margin: '8px 16px 16px 16px',
  flexGrow: 1,
});

const Body = styled.div({
  borderStyle: 'solid',
  flexDirection: 'column',
  borderColor: '#dddddd',
  borderRadius: 3,
  borderWidth: 1,
  margin: '0 auto 16px auto',
  maxWidth: 960,
  width: '100%',
  flexGrow: 1,
});

const Content = styled.div({
  padding: 48,
  wordWrap: 'break-word',
  flexGrow: 1,
});

const TemplateWrapper = ({ children }) => {
  return (
    <Wrapper>
      <Helmet
        title="Jake Dawkins"
        meta={[
          {
            name: 'description',
            content: 'Personal site of Jake Dawkins, Software Engineer in NYC',
          },
          {
            name: 'keywords',
            content: 'software, engineering, javascript, technology, tech',
          },
        ]}
      />
      <Body>
        <Header title={siteData.title} />
        <Content>{children()}</Content>
        <Footer />
      </Body>
    </Wrapper>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
