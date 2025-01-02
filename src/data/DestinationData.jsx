import React from 'react'


//import img 

import MOON from '../assets/destination/image-moon.png';
import MARS from '../assets/destination/image-mars.png';
import EUROPA from '../assets/destination/image-europa.png';
import TITAN from '../assets/destination/image-titan.png';




const DestinationData = [
    {
        id: 0,
        tabTitle: "Moon",
        title: "Moon",
        text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        avgDistance: "384,400 km",
        travelTime: "3 Days",
        img: MOON
    },

    {
        id: 1,
        tabTitle: "Mars",
        title: "Mars",
        text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        avgDistance: "225 mil. km",
        travelTime: "9 months",
        img: MARS
    },

    {
        id: 2,
        tabTitle: "Europa",
        title: "Europa",
        text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        avgDistance: "628 mil. km",
        travelTime: "3 days",
        img: EUROPA
    },

    {
        id: 3,
        tabTitle: "Titan",
        title: "Titan",
        text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        avgDistance: "1.6 bil. km",
        travelTime: "7 years",
        img: TITAN
    },
]



export default DestinationData