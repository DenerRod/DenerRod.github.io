import React from 'react';
import { Link } from 'react-router-dom';
import AboutMe from '../Components/AboutMe';

const InitialPage = () => {
    return (
        <div>
            <h1>Hello of InitialPage!</h1>
            <AboutMe />
            <p>Projetos:</p>
            <Link to="/lessons-learned">
                <button type='button'>LessonsLearned</button>
            </Link>
        </div>
    )
}

export default InitialPage;