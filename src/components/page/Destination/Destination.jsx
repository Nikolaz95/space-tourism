import React, { useState } from 'react'
import titleName from '../../../hooks/useTitle';


//import css
import "./Destination.css";


//import components
import ContentLayout from '../../layouts/ContentLayout/ContentLayout';

//  Import img
import destinationBg from '../../../assets/BGimages/Bgcdestination-desktop.jpg';
import MOON from '../../../assets/destination/image-moon.png';
import Button from '../../layouts/Buttons/Button';

// Data
import DestinationData from "../../../data/DestinationData"


const Destination = () => {
    titleName('Space Tourism - Destination');

    // Use state to track the selected destination
    const [selectedData, setSelectedData] = useState(DestinationData[0]);

    const activeTab = (tehDataId) => {
        const tehData = DestinationData.find((data) => data.id === tehDataId);
        setSelectedData(tehData);
    };

    return (
        <ContentLayout backgroundImage={destinationBg}>
            <main className='destinationPageContent'>
                <div className="destinationPageContent-left">
                    <h1 className='destinationTitle'>01 Pick your destination</h1>
                    <img src={selectedData.img} alt={selectedData.tehName} className='imgDestination' />
                </div>
                <div className="destinationPageContent-right">
                    <div className='mainDestination'>
                        <div className="tabsDestination">
                            <nav className="tab-nav">
                                <ul className="tab-list" role="tablist" aria-orientation="horizontal">
                                    {DestinationData.map((tech) => (
                                        <Button key={tech.id} variant="btnTabs"
                                            onClick={() => activeTab(tech.id)}
                                            className={selectedData.id === tech.id ? 'active' : ''}>
                                            {tech.tabTitle}
                                        </Button>

                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <article className="articleContent">
                            <h1 className='articleTitle'>{selectedData.title}</h1>
                            <p className='articleText'>{selectedData.text}</p>
                            <div className="bottomPartArtickle">
                                <div className="line"></div>
                                <div className='bottomPartArtickleContent'>
                                    <div className="avgContent">
                                        <h3 className='articleTitleboton'>Avg. distance</h3>
                                        <p className='articleTextboton'>{selectedData.avgDistance}</p>
                                    </div>
                                    <div className="travelInfo">
                                        <h3 className='articleTitleboton'>Est. travel time</h3>
                                        <p className='articleTextboton'>{selectedData.travelTime}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                </div>
            </main>
        </ContentLayout>
    )
}

export default Destination