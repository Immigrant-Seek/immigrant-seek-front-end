import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="nav-top">
        <div className={innerClasses}>
          <div className="hero-content sticky-top">
            <h1 className="mt-0 mb-16 reveal-from-bottom dreamsbridge" data-reveal-delay="200">
              DreamsBridge
            </h1>
            <div className="nav-items">
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button className="signin-btn" tag="a" wideMobile >
                    <Link to={"/login"}> Sign In </Link>
                    </Button>

                  <Button tag="a" color="light" wideMobile>
                  <Link to={"/lawyer/signup"} className="lawyer-signup-btn"> Join our platform as a lawyer </Link>
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className='landing-page-container'>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://www.youtube-nocookie.com/embed/UzYDqQDNFzc"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src='https://cloudfront-us-east-2.images.arcpublishing.com/reuters/L2LSWLHDORINLDIMDESV2EGQIY.jpg'
                alt="Hero"
                width={850}
                height={500} />
            </a>
            <div className='mission-statement'>
          <h1 className="m-0 mb-32 reveal-from-bottom " data-reveal-delay="400">
            Helping DACA recipents through the renewal process.</h1>
          </div>
          </div>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube-nocookie.com/embed/UzYDqQDNFzc"
            videoTag="iframe" />
            
        </div>
      </div>
    </section>
    
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;