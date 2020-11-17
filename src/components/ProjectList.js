import React, { Component } from 'react'

export class ProjectList extends Component {
    render() {
        return (
            <div className='project-list'>
                <ul>
                    <li>CLI</li>
                    <li>Sinatra</li>
                    <li>Rails</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </div>
        )
    }
}

export default ProjectList
