import React, { Component } from 'react'

//scss
import './styles/landing.scss'

//images
import imgBG from '../images/test.jpeg'

class LandingScene extends Component {


    render(){
        return(
            <div className="landing-container">
                <div className="img-bg"><img src={imgBG} alt="bg pic" /></div>
                <div className="jumbotron">
                    <div className="jumbo-info">
                        <a href="https://docs.google.com/document/d/18zfojTsrhx_k7-cFAclSVcuP9cCk1xB4cx0ZjvGamGs/edit?usp=sharing" rel="noopener noreferrer" target="_blank"><h1 id="jumbo-title">Salvador Munoz Castillo</h1></a>
                        <div className="extra-info">
                            <h3 className="college-info" >Hunter College, CUNY</h3>
                            <p className="major-info" >Bachelors of Arts in Media Studies | Minor: Computer Science </p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default LandingScene