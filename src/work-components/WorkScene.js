import React, { Component } from 'react'

//images
import tintuBG from '../images/tintu.png'
import porfolioBG from '../images/porfolio.png'
import classhubBG from '../images/classhub.png'
import soccerBG from '../images/soccer.png'
import climateBG from '../images/climate.png'
import kinectBG from '../images/kinect.jpeg'


//styles 
import './styles/workscene.scss'

class WorkScene extends Component {


    render(){
        return(

            <div className="work-container">

                <div className="work-row">

                    <div className="work-img">
                        <img src={tintuBG} alt="tintu chat" />
                    </div>

                    <div className="work-info">
                        <div className="info-container">
                        <a href="https://github.com/buhotech/Slide/tree/master/slide" rel="noopener noreferrer" target="_blank"><h2 className="info-title">Tintu Chat</h2></a>
                            <p className="info-text"> Chat application that matches users based on similar likes and user can send instant messages</p>
                        </div>
                    </div>

                </div>  

                <div className="work-row">

                    <div className="work-img">
                        <img src={porfolioBG} alt="tintu chat" />
                    </div>
 
                    <div className="work-info">
                        <div className="info-container">
                        <a href="https://salvadormunoz.herokuapp.com/" rel="noopener noreferrer" target="_blank"><h2 className="info-title">Porfolio Site</h2></a>
                            <p className="info-text">Previous porfolio site</p>
                        </div>
                    </div>

                </div>  

                <div className="work-row">

                    <div className="work-img">
                        <img src={classhubBG} alt="tintu chat" />
                    </div>
 
                    <div className="work-info">
                        <div className="info-container">
                        <a href="https://classhub-hunter.herokuapp.com/" rel="noopener noreferrer" target="_blank"><h2 className="info-title">ClassHub Mobile App</h2></a>
                            <p className="info-text">An application that lets you find and add classmates, post notes and comment!</p>
                        </div>
                    </div>

                </div>  

                <div className="work-row">

                    <div className="work-img">
                        <img src={soccerBG} alt="tintu chat" />
                    </div>

                    <div className="work-info">
                        <div className="info-container">
                        <a href="https://github.com/SalvadorM/midterm-project--spring-2019--web-programming/tree/dev" rel="noopener noreferrer" target="_blank"><h2 className="info-title">Soccer Ball Game</h2></a>
                            <p className="info-text">An interactive application that uses p5.js library and ml5 poseNet()!</p>
                        </div>
                    </div>

                </div>
                
                <div className="work-row">

                    <div className="work-img">
                        <img src={climateBG} alt="tintu chat" />
                    </div>

                    <div className="work-info">
                        <div className="info-container">
                        <a href="https://github.com/collaborative-project-medp341/collab-project" rel="noopener noreferrer" target="_blank"><h2 className="info-title">The Climate Phenon</h2></a>
                        <p className="info-text">Collaborative web project that promotes climate change awareness!</p>
                        </div>
                    </div>

                </div>  

                <div className="work-row"> 
                <div className="work-img">
                    <img src={kinectBG} alt="kinect" />
                </div>

                <div className="work-info">
                    <div className="info-container">
                    <a href="https://iart.shashafeng.com/2018/11/20/location-sim/" rel="noopener noreferrer" target="_blank"><h2 className="info-title">Location Sim</h2></a>
                    <p className="info-text">Interactive installation using Max 8, Microsoft Kinect, and dp.kinect 2 Library!</p>
                    </div>
                </div>
                </div>

            </div>

        )
    }
}


export default WorkScene