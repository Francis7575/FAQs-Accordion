import IconPlus from '../../assets/icon-plus.svg'
import IconMinus from '../../assets/icon-minus.svg'
import IconStar from '../../assets/icon-star.svg'
import styles from './MainComponent.module.css'
import { useState } from 'react'

const MainComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index: number) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    }

    return (
        <main>
            <section className={styles.faqSection}>
                <div className={styles.headingContainer}>
                    <img
                        className={styles.starIcon}
                        src={IconStar}
                        alt="Star Icon" />
                    <h1 className={styles.heading}>FAQs</h1>
                </div>

                <div className={styles.faqWrapper}>
                    <div className={styles.questionsWrap} >
                        <summary className={styles.questionContainer} onClick={() => handleToggle(0)}>
                            <p className={styles.question}>
                                What is Frontend Mentor, and how will it help me?
                            </p>
                            <img src={activeIndex === 0 ? IconMinus : IconPlus} alt="Toggle Icon" />
                        </summary>
                        {activeIndex === 0 && (
                            <article className={styles.answer}>
                                <p>Frontend Mentor offers realistic coding challenges to help
                                    developers improve their frontend coding skills with projects
                                    in HTML, CSS, and JavaScript. It's suitable for all levels and
                                    ideal for portfolio building.
                                </p>
                            </article>
                        )}
                    </div>

                    <div className={styles.questionsWrap} >
                        <summary className={styles.questionContainer} onClick={() => handleToggle(1)}>
                            <p className={styles.question}>Is Frontend Mentor free?</p>
                            <img src={activeIndex === 1 ? IconMinus : IconPlus} alt="Toggle Icon" />
                        </summary>
                        {activeIndex === 1 && (
                            <article className={styles.answer}>
                                <p>
                                    Yes, Frontend Mentor offers both free and premium coding challenges,
                                    with the free option providing access to a range of projects suitable
                                    for all skill levels.
                                </p>
                            </article>
                        )}
                    </div>

                    <div className={styles.questionsWrap} >
                        <summary className={styles.questionContainer} onClick={() => handleToggle(2)}>
                            <p className={styles.question}>
                                Can I use Frontend Mentor projects in my portfolio?
                            </p>
                            <img src={activeIndex === 2 ? IconMinus : IconPlus} alt="Toggle Icon" />
                        </summary>
                        {activeIndex === 2 && (
                            <article className={styles.answer}>
                                <p>
                                    Yes, you can use projects completed on Frontend Mentor in your portfolio.
                                    It's anexcellent way to showcase your skills to potential employers!
                                </p>
                            </article>
                        )}
                    </div>

                    <div className={styles.questionsWrap} >
                        <summary className={styles.questionContainer} onClick={() => handleToggle(3)}>
                            <p className={styles.question}>
                                How can I get help if I'm stuck on a challenge?
                            </p>
                            <img src={activeIndex === 3 ? IconMinus : IconPlus} alt="Toggle Icon" />
                        </summary>
                        {activeIndex === 3 && (
                            <article className={styles.answer}>
                                <p>
                                    The best place to get help is inside Frontend Mentor's Discord community.
                                    There's a help channel where you can ask questions and seek support from other community members.
                                </p>
                            </article>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MainComponent;
