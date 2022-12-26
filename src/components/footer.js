import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-content">
        <main className="footer-main-content">
          <div className="footer-content1">
            <header className="footer-main">
              <div className="footer-header">
                <img
                  alt={props.Branding_alt}
                  src={props.Branding_src}
                  className="footer-branding"
                />
                <span className="footer-text">{props.Text}</span>
              </div>
              <div className="footer-socials">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link"
                >
                  <img
                    alt={props.LinkedIn_alt}
                    src={props.LinkedIn_src}
                    className="social"
                  />
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link1"
                >
                  <img
                    alt={props.Instagram_alt}
                    src={props.Instagram_src}
                    className="social"
                  />
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link2"
                >
                  <img
                    alt={props.Twitter_alt}
                    src={props.Twitter_src}
                    className="social"
                  />
                </a>
              </div>
            </header>
            <header className="footer-categories">
              <div className="footer-category">
                <div className="footer-header1">
                  <span className="footer-header">{props.Text2}</span>
                </div>
                <div className="footer-links">
                  <span className="footer-link">{props.Text3}</span>
                  <span className="footer-link">{props.Text4}</span>
                  <span className="footer-link">{props.Text5}</span>
                  <span className="footer-link">{props.Text6}</span>
                  <span className="footer-link">{props.Text7}</span>
                </div>
              </div>
              <div className="footer-category1">
                <div className="footer-header2">
                  <span className="footer-header">{props.Text8}</span>
                </div>
                <div className="footer-links1">
                  <span className="footer-link">{props.Text9}</span>
                  <span className="footer-link">{props.Text10}</span>
                  <span className="footer-link">{props.Text11}</span>
                  <span className="footer-link">{props.Text12}</span>
                  <span className="footer-link">{props.Text13}</span>
                  <span className="footer-link">{props.Text14}</span>
                </div>
              </div>
            </header>
          </div>
          <section className="footer-copyright">
            <span className="footer-text14">{props.text1}</span>
          </section>
        </main>
        <main className="footer-subscribe">
          <main className="footer-main1">
            <h1 className="footer-heading">{props.Heading}</h1>
            <div className="footer-input-field">
              <input
                type="email"
                placeholder={props.textinput_placeholder}
                className="footer-input input"
              />
              <div className="footer-buy button">
                <span className="footer-text15">{props.Text1}</span>
                <span className="footer-text16">Subscribe</span>
              </div>
            </div>
          </main>
          <h1 className="footer-notice">{props.Notice}</h1>
        </main>
        <section className="footer-copyright1">
          <span className="footer-text17">{props.text}</span>
        </section>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  LinkedIn_alt: 'image',
  Text12: 'Partners',
  Text5: 'Design to Code',
  Heading: 'Subscribe to our newsletter',
  Text11: 'News',
  rootClassName: '',
  Text13: 'Careers',
  Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  text: '© 2022 latitude. All Rights Reserved.',
  text1: '© 2022 latitude. All Rights Reserved.',
  Notice:
    'By subscribing to our newsletter you agree with our Terms and Conditions.',
  Text9: 'About',
  Text1: '->',
  Instagram_alt: 'image',
  Text8: 'Company',
  Twitter_src: '/playground_assets/twitter-200h.png',
  Text4: 'Responsive Prototypes',
  Text3: 'Responsive Web Design',
  Text7: 'Static Website Generator',
  Text6: 'Static Website Builder',
  Text2: 'Solutions',
  Text10: 'Team',
  textinput_placeholder: 'Enter your email',
  Text14: 'Press & Media',
  Instagram_src: '/playground_assets/instagram-200h.png',
  Branding_alt: 'image',
  Twitter_alt: 'image',
  LinkedIn_src: '/playground_assets/linkedin-200h.png',
  Branding_src: '/playground_assets/tinada-1%20%5B2%5D-200h.png',
}

Footer.propTypes = {
  LinkedIn_alt: PropTypes.string,
  Text12: PropTypes.string,
  Text5: PropTypes.string,
  Heading: PropTypes.string,
  Text11: PropTypes.string,
  rootClassName: PropTypes.string,
  Text13: PropTypes.string,
  Text: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  Notice: PropTypes.string,
  Text9: PropTypes.string,
  Text1: PropTypes.string,
  Instagram_alt: PropTypes.string,
  Text8: PropTypes.string,
  Twitter_src: PropTypes.string,
  Text4: PropTypes.string,
  Text3: PropTypes.string,
  Text7: PropTypes.string,
  Text6: PropTypes.string,
  Text2: PropTypes.string,
  Text10: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  Text14: PropTypes.string,
  Instagram_src: PropTypes.string,
  Branding_alt: PropTypes.string,
  Twitter_alt: PropTypes.string,
  LinkedIn_src: PropTypes.string,
  Branding_src: PropTypes.string,
}

export default Footer
