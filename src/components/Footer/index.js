 import React from 'react';
 import './styles.scss';

// const Footer = props => {
//   return (
//     <footer className="footer">
//       <div className="wrap">
//         © Ruby Gold House 2021
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import Logo from './../../assets/logo.png';
import Phone from './../../assets/phone.png';
import Email from './../../assets/email.png';
import Address from './../../assets/address.png';

function Footer() {
  return (
    <footer className="footer" style={{ marginBottom: '100rem' }}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-content-brand">
            <a href="/" className="logo">
              <img
                className="logo-image"
                src={Logo}
                alt="image not found"
              />
            </a>
            <br />
            <br />
            <div className="paragraph"></div>
          </div>
          <div className="social-media-wrap">
            <h4 className="footer-heading">
              <b> Contact us:</b>
            </h4>
            <span>
              <img src={Phone} alt="phone number" />
              <a
                href="tel:0777487720 "
                style={{ marginLeft: '20px', fontWeight: 'bold' }}
                className="footer-link2"
              >
                077 222 1030{' '}
              </a>
              <a
                href="tel:0765807720 "
                style={{ marginLeft: '10px', fontWeight: 'bold' }}
                className="footer-link2"
              >
                076 680 8389{' '}
              </a>
            </span>{' '}
            <br />
            <span className="email-add">
              <img src={Email} alt="email address" />
              <a
                href="mailto:hashirhasmy111@gmail.com "
                style={{ marginLeft: '20px', fontWeight: 'bold' }}
                className="footer-link2"
              >
               rgh.hasmy@gmail.com{' '}
              </a>
            </span>
            <br />
            <span className="email-add">
              <img src={Address} alt="address" />
              <a
                href="#"
                style={{ marginLeft: '20px', fontWeight: 'bold' }}
                className="footer-link2"
              >
                88, Veyangalla-Agalawatta
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-bot-wrapper">
        © 2021 <b> rgh.hasmy (PVT) Ltd. </b> All Rights Reserved
        <br />
        Website Designed and Developed by{' '}
        <a
          href="mailto:hashirhasmy111@gmail.com"
          target="_blank"
          className="footer-link2"
        >
          <b>rgh.hasmy (PVT) Ltd </b>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
