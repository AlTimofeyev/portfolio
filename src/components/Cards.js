import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>MOST RECENT PROJECTS</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        url='https://github.com/AlTimofeyev/portfolio'
                        src='/images/PortfolioShowcase.png'
                        alt='Portfolio'
                        lable='React | JavaScript | CSS | HTML'
                        text='Portfolio Website using React'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        url='https://github.com/AlTimofeyev/pypalex'
                        src='/images/DaoTrongLe-Reindeer-Example.PNG'
                        alt='PyPalEx'
                        lable='Python'
                        text='Python Palette Extractor (PyPalEx)'
                    />
                    <CardItem 
                        url='https://github.com/AlTimofeyev/Optimization-Algorithm-Visualizer'
                        src='/images/OptimizationVisualizationExample.png'
                        alt='Visualizer'
                        lable='Java | Processing'
                        text='Optimization Algorithm Visualizer'
                    />
                    <CardItem 
                        url='https://github.com/AlTimofeyev/BenchmarkFunctionOptimization'
                        src='/images/BenchmarkOptimization.png'
                        alt='Optimization'
                        lable='C | C++'
                        text='Benchmark Function Optimization'
                    />
                </ul>
            </div>
        </div>
        <h1>OTHER PROJECTS</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        url='https://github.com/AlTimofeyev/Machine-Learning-Visualization'
                        src='/images/PatterDiscovery.png'
                        alt='Pattern Discovery'
                        lable='C | C++'
                        text='Interactive Patter Discovery in Multi-Dimensional Data'
                    />
                    <CardItem 
                        url='https://github.com/AlTimofeyev/SimpleCalculator'
                        src='/images/Calculator.png'
                        alt='Calculator'
                        lable='Java'
                        text='Simple Calculator Application'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        url='https://github.com/AlTimofeyev/DataStructures'
                        src='/images/DataStructures.png'
                        alt='Data Structures'
                        lable='C | C++'
                        text='Custom Data Structures Library'
                    />
                    <CardItem 
                        url='https://github.com/AlTimofeyev/CWUShell'
                        src='/images/CWUShell.png'
                        alt='CWU Shell'
                        lable='C | C++'
                        text='Mini Shell with Four Personal Commands'
                    />
                    <CardItem 
                        url='https://github.com/AlTimofeyev/Client-ServerAirfare'
                        src='/images/Client-Server.png'
                        alt='Client-Server'
                        lable='C | C++'
                        text='Client-Server Airfare Application'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Cards;