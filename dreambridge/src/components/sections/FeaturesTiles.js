import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
// import LoginForm from '../elements/LoginForm';
import Input from '../elements/Input';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Immigration Lawyers on DreamsBridge are pro bono',
    paragraph: 'We aim to provide an easy and simple way to get help with legal services from professionals that are often kept behind a high monetary barrier. Our platform is available to anyone that needs it!'
  };


  
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}></div>
          <div className="signup-form">
        <div className="form-box solid">
          <div className="signup-form" data-reveal-delay="400" >
          <form>
            <Input id="first-name" type="first-name" placeholder="First Name"/>
            <br></br>
            <Input id="last-name" type="last-name" placeholder="Last Name"/>
            <br></br>
            <Input id="email" type="email" placeholder="Email"/>
            <br></br>
            <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="#">
                    Sign up
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="#">
                    Already have an account?
                    </Button>
                </ButtonGroup>
          </form>
          </div>
        </div>
      </div>   
           

          
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;