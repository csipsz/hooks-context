import React, {createContext, useState } from 'react';

export const ProjectContext = createContext(); 

const ProjectContextProvider = (props) => {
    const [projects, setProjects] = useState([
        {title: "Critics of the Pure Mind", id: Math.random()},
        {title: "Sein und Zeit", id: Math.random()},
        {title: "The Phenomenology of Spirit", id: Math.random()},
        {title: "Zarathustra", id: Math.random()}
    ])
    return (
        <ProjectContext.Provider value={{projects}}>
            {props.children}
        </ProjectContext.Provider>
    );
}

export default ProjectContextProvider