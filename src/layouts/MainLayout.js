import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Chatbot from './../components/Chatbot';

const MainLayout = props => {
  return (
    <div>
      <Header {...props} />
      <div className="main">
        {props.children}
      </div>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default MainLayout;
