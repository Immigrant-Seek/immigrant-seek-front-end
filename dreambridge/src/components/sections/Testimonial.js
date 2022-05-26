import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Meet the Team',
    paragraph: 'Vitae aliquet nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <img src='https://photos.smugmug.com/photos/i-Jx2RggZ/0/S/i-Jx2RggZ-S.jpg' className='team-img'/>
                  <h4 className="text-md mb-0">Mark Rodriguez</h4>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                <span className="testimonial-item-name text-color-high social-margin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fillRule="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.240h2.401zm-1.2-8.212c.837 0 1.408-.554 1.408-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.409.54-1.409 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.409c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.40c0-2.22-1.184-3.402-2.764-3.402-1.274 0-1.845.7-2.165 1.193v.040h-.016a5.54 5.54 0 0 1 .016-.040V6.169h-2.4c.03.678 0 7.240 0 7.240h2.4z"/>
                  </svg>
                  </span>
                  <span className="text-color-low social-margin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fillRule="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.40.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content team-card">
                  <img src="https://media-exp1.licdn.com/dms/image/C4E03AQETqePL3W8Ywg/profile-displayphoto-shrink_200_200/0/1633988476472?e=1658966400&v=beta&t=3tk2QdHTL-NirZFma9OGGtTuQL2HiQ-O32F0Z1e1RGY" className='team-img liam-img'/>
                  <h4 className="text-md mb-0">Liam Reboseno</h4>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high social-margin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fillRule="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.240h2.401zm-1.2-8.212c.837 0 1.408-.554 1.408-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.409.54-1.409 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.409c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.40c0-2.22-1.184-3.402-2.764-3.402-1.274 0-1.845.7-2.165 1.193v.040h-.016a5.54 5.54 0 0 1 .016-.040V6.169h-2.4c.03.678 0 7.240 0 7.240h2.4z"/>
                  </svg>
                  </span>
                  <span className="text-color-low social-margin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fillRule="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.40.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <img src='https://photos.smugmug.com/photos/i-7zsbnPd/0/S/i-7zsbnPd-S.jpg' className='team-img'/>
                  <h4 className="text-md mb-0">Jared Moore</h4>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                <span className="testimonial-item-name text-color-high social-margin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fillRule="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.240h2.401zm-1.2-8.212c.837 0 1.408-.554 1.408-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.409.54-1.409 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.409c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.40c0-2.22-1.184-3.402-2.764-3.402-1.274 0-1.845.7-2.165 1.193v.040h-.016a5.54 5.54 0 0 1 .016-.040V6.169h-2.4c.03.678 0 7.240 0 7.240h2.4z"/>
                  </svg>
                  </span>
                  <span className="text-color-low social-margin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fillRule="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.40.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;