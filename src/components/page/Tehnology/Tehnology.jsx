import React, { useState } from 'react'
import titleName from '../../../hooks/useTitle';


//import css
import styles from './Tehnology.module.css';


//  Import img
import tehnologyBg from '../../../assets/BGimages/Bgtechnology-desktop.jpg';

//import fetch data
import TehnologyData from '../../../data/TehnologyData';

//  Import components
import ContentLayout from '../../layouts/ContentLayout/ContentLayout';
import Button from '../../layouts/Buttons/Button';



const Tehnology = () => {
    titleName('Space Tourism - Tehnology');

    // Use state to track the selected destination
    const [selectedData, setSelectedData] = useState(TehnologyData[0]);

    const activeTab = (tehDataId) => {
        const tehData = TehnologyData.find((data) => data.id === tehDataId);
        setSelectedData(tehData);
    };
    return (
        <ContentLayout backgroundImage={tehnologyBg}>
            <section className={styles.tehPageSection}>
                <h1 className={styles.tehPageTitle}>03 Space lauch</h1>
                <div className={styles.tehPageContent}>
                    <div className={styles.tehPageContentBtns}>
                        {TehnologyData.map((tech) => (
                            <Button key={tech.id} variant="btnTabs"
                                onClick={() => activeTab(tech.id)}
                                className={
                                    selectedData.id === tech.id
                                        ? `${styles.btnTabs} ${styles.active}`
                                        : styles.btnTabs
                                }>
                                {tech.tabTitle}
                            </Button>

                        ))}
                    </div>

                    {/* Text Info */}
                    <div className={styles.tehPageContentTextInfo}>
                        <h4 className={styles.textInfoTitle}>The terminology...</h4>
                        <p className={styles.textInfoInfo}>{selectedData.aboutTeh}</p>
                    </div>
                    {/* Text Info */}

                    {/* Image */}
                    <div className={styles.tehPageContentImg}>
                        <img src={selectedData.img} alt={selectedData.tehName} className={styles.tehImg} />
                    </div>
                    {/* Image */}
                </div>
            </section>
        </ContentLayout>
    )
}

export default Tehnology