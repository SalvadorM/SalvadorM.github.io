import React, { Component } from 'react'

//router
import { withRouter, Link } from 'react-router-dom'

//scss
import './styles/navbar.scss'

//images
import logo from '../images/websiteicon.png'

class NavBar extends Component {
    constructor(props){
        super(props)

        this.state = {
            scrolled: false,
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll )
    }

    componentWillUnmount(){
        window.removeEventListener('scroll')
    }

    handleScroll = () => {
        let isTop = window.scrollY

        if(isTop > 100){
            this.setState({ scrolled: true })
        } else {
            this.setState({ scrolled: false })
        }

    }

    render(){

        let { scrolled } = this.state

        let navClass = (!scrolled)? 'nav' : 'nav scrolled'

        return(

            <div className={navClass}>
                <div className="nav-container">
                    
                    <div className="nav-logo-container">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>
                    
                    <div className="nav-links">

                        <div className="link-container">
                            <Link to="/work">Work</Link>
                        </div>

                        <div className="link-container">
                            <a href="https://github.com/SalvadorM" rel="noopener noreferrer" target="_blank">Github</a>
                        </div>

                        <div className="link-container">
                            <a href="https://www.linkedin.com/in/salvador-munozcast/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(NavBar)