import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import {ProjectContext} from '../contexts/ProjectContext'

// export class ProjectList extends Component {
//     static contextType = ThemeContext
//     render() {
//         const {isLightTheme, light, dark} = this.context;
//         const theme = isLightTheme ? light : dark
//         return (
//             <div className='project-list' style={{color: theme.syntax, background: theme.bg}}>
//                 <ul>
//                     <li style={{background: theme.ui}}>CLI</li>
//                     <li style={{background: theme.ui}}>Sinatra</li>
//                     <li style={{background: theme.ui}}>Rails</li>
//                     <li style={{background: theme.ui}}>JavaScript</li>
//                     <li style={{background: theme.ui}}>React</li>
//                 </ul>
//             </div>
//         )
//     }
// }

export const ProjectList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {projects} = useContext(ProjectContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className='project-list' style={{color: theme.syntax, background: theme.bg}}>
                <ul>
                    {projects.map(project => {
                        return <li key={project.id} style={{background: theme.ui}}>{project.title}</li>
                    })}
                    <li style={{background: theme.ui}}>CLI</li>
                    <li style={{background: theme.ui}}>Sinatra</li>
                    <li style={{background: theme.ui}}>Rails</li>
                    <li style={{background: theme.ui}}>JavaScript</li>
                    <li style={{background: theme.ui}}>React</li>
                </ul>
            </div>
    )
}

export default ProjectList

