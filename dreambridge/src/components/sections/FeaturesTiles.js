import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
// import LoginForm from '../elements/LoginForm';
import Input from '../elements/Input';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
import Context from '../../context/Context';

import { Form } from 'react-bootstrap';

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

  // Sign Up

      // state to keep track of the user that signs up, initailzied to object with values of empty strings
      const [userInfo, setUserInfo] = React.useState({})
      const context = React.useContext(Context);
  
      // when a user submits the form, we want to grab all the data from the form and update the state of the userInfo
      const handleSubmit = (event) => {
          event.preventDefault();
          const userFirstName = event.target.firstName.value;
          // console.log(userFirstName)
          const userLastName = event.target.lastName.value;
          const userEmail = event.target.email.value;
          const userPassword = event.target.passwrd.value;
          console.log(userFirstName, userLastName, userEmail, userPassword);
  
          setUserInfo({
              firstName : userFirstName,
              lastName : userLastName,
              email : userEmail,
              password : userPassword
          })
      }
      
      const postNewUser = async (userData) => {
          const response = await fetch("http://localhost:3030/signup", {
              method : "POST",
              headers: {
                  "Content-Type" : "application/json",
              },
              body: JSON.stringify(userData)
          })
          const data = await response.json()
          return data;
      }
  
      React.useEffect(() => {
          postNewUser(userInfo).then(newUserData => {
              console.log(newUserData);
              context.updateToken(newUserData.token)
          })
      }, [userInfo])


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
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicFirstName">
              <Input name="firstName" type="text" placeholder="Enter your first name"/>
            </Form.Group>
            <br></br>
            <Form.Group controlId="formBasicLastName">
              <Input name="lastName" type="text" placeholder="Enter your last name"/>
            </Form.Group>
            <br></br>
            <Form.Group controlId="formBasicEmail">
              <Input name="email" type="text" placeholder="Enter Email"/>
            </Form.Group>           
             <br></br>
             <Form.Group controlId="formBasicPassword">
              <Input name="password" type="text" placeholder="Password"/>
            </Form.Group>
            <br></br>
            <Form.Group controlId="formBasicFirstName">
              <Input name="password" type="text" placeholder="Confirm Password"/>
            </Form.Group>
            <br></br>
            <ButtonGroup>
                  <Button color="primary" wideMobile type="submit">
                    Sign up
                    </Button>
                  <Button color="dark" wideMobile href="login">
                    Already have an account?
                    </Button>
                </ButtonGroup>
          </Form>
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