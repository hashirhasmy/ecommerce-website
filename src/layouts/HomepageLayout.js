import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Chatbot from './../components/Chatbot';

const HomepageLayout = props => {
  return (
    <div className="fullHeight">
      <Header {...props} />
      {props.children}
      <Chatbot />
      <Footer />
    </div>
  );
};

export default HomepageLayout;
