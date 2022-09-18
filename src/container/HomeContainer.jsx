import React from 'react';
import Intro from '../components/intro';
import Infocard from '../components/infocard';
import Carrusel from '../components/Carrusel';

const HomeContainer = () => {
    return (
        <div>
            <Carrusel/>
            <Intro/>
            <Infocard/>
        </div>
    );
}

export default HomeContainer;
