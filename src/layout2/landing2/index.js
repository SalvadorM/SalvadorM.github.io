import React, { Component } from 'react'

//styles
import '../styles/layout2.scss'
//images
import { landing } from '../../files/landing'

export default class LandingSceneTwo extends Component {

    state = {
        welcomeHeight: 0, 
        booleanSet: false,
        offY: 0,
        mobile: 0,
    }

    componentDidMount() {
        const welcomeHeight = document.getElementById('welcome-con')

        window.addEventListener('scroll', this.handleScroll);
        const offX = document.documentElement.clientWidth
        this.setState({
            welcomeHeight: welcomeHeight.clientHeight,
            offX
        })
    }  
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);

    }

    handleScroll = (e) => {
        const { welcomeHeight} = this.state

        const offY = window.scrollY
        const offX = document.documentElement.clientWidth

        const offsetWelcomeY = welcomeHeight- offY + 100
        const booleanSet = (offY >= offsetWelcomeY) ? true : false

        this.setState({
            booleanSet, offY, offX
        })
    }

    render() {
        const {offY, booleanSet, offX} = this.state
        const pageInfo = landing.langingPage

        const yCSS = offY * .3
        const imgStyle = {
            transform: `translate3d(0px, -${yCSS}px, 0px)`
        }

        let messageCSS = (booleanSet) ? 'message-content showText' : 'message-content hideText'
        const smallScreenSize = 600
        const setScreenSize = (offX < smallScreenSize) ? true : false

        if(setScreenSize) {
            messageCSS = 'message-content showText'
        }
        
        return(
            <div 
                className="layout2-container"
            >

                <div className="welcome-container" id="welcome-con">
                    <div className="img-container">
                        <img className="img-src" style={imgStyle} alt="background img of Salvador and a Project" src={pageInfo.img} />
                    </div>
                </div>


                <div className="bio text-center">
                    <div className="message-container"><p className={messageCSS}>Hi I'm salvador</p></div>
                    <div className="message-container"><p className={messageCSS}>Hi I'm salvador</p></div>
                    <div className="message-container"><p className={messageCSS}>Hi I'm salvador</p></div>
                    <div className="message-container"><p className={messageCSS}>Hi I'm salvador</p></div>

                </div>
            </div>
        )
    }
}