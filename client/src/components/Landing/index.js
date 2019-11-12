import React from 'react';
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import app_preview1 from '../../assets/screenshots/app-preview1.jpg';
import app_preview2 from '../../assets/screenshots/app-preview2.jpg';
import app_preview3 from '../../assets/screenshots/app-preview3.jpg';
import app_preview4 from '../../assets/screenshots/app-preview4.jpg';
import app_preview5 from '../../assets/screenshots/app-preview5.jpg';
import app_store_availability_sign from '../../assets/app-store-availability-sign.jpg';
import './index.css';

const Landing = () => (
    <React.Fragment>
        <div>
            <p className='summary'>
                A gaming app that  will teach about the fundamentals of budgeting and traveling.
            </p>
        </div>

        <div className='carousel'>
            <Carousel showArrows={true} autoPlay={true}>
                <div>
                    <img src={app_preview1} alt='app-preview1'/>
                </div>
                <div>
                    <img src={app_preview2} alt='app-preview2'/>
                </div>
                <div>
                    <img src={app_preview3} alt='app-preview3'/>
                </div>
                <div>
                    <img src={app_preview4} alt='app-preview4'/>
                </div>
                <div>
                    <img src={app_preview5} alt='app-preview5'/>
                </div>
            </Carousel>
        </div>

        <br></br>

        <div>
            <p className='company-description'>
                Forward Growth is company that focuses on providing a service for educational applications to tutoring and early learning resources. This company was created to bridge the gap between financial literacy and youth. Our commitment is to better serve lower income families with the ability to learn about saving money.
            </p>
        </div>


        <br></br>

        <div className='download'>
            <img src={app_store_availability_sign} alt='app-store-availability-sign'/>
            <Button>Download Today!</Button>
            {/* <Button onclick="linkToAppStore()">Download Today!</Button> */}
        </div>
        
    </React.Fragment>
);
export default Landing;