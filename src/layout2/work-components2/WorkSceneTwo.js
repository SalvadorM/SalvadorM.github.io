import React, { Component } from 'react'

import { workProjects  } from '../../files/works'

export default class WorkSceneTwo extends Component {

    componentDidMount() {
        console.log(workProjects)
    }

    render() {
        return (
            <div className="container">
                <h1>Layout 2</h1>
                <h1>Layout 2</h1>
            </div>
        )
    }
}