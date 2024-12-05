import React from "react";
import thinkingChild from '../assets/images/thinkingChild.jpeg'
import pizzaBurger from '../assets/images/pizzaBurger.png'
import VideoGame from '../assets/images/videoGame.jpg'
import argumentImg from '../assets/images/argumentImg.jpg'
import studyChoice from '../assets/images/studyChoice.jpg'
import predictionImg from '../assets/images/predictionImg.jpg'
import sportImg from '../assets/images/sportImg.png'
import shoppingImg from '../assets/images/shoppingImg.png'
import { PreviousButton } from "../components/PreviousButton";

const UsefullnessDT = () => {
    return <div className='dark:text-white md:mr-8 mt-16 md:mt-4 font-sans'>
        <h1 className='text-center text-2xl shadow-md p-4 text-blue-400 rounded-md'>
            Usefullness Of Decision Tree
        </h1>
        <div className="text-[17px]">
            <div className="mt-16">
                <h2 className="text-[20px] text-center mb-8">
                    1. Easy to Understand
                </h2>
                <div className="md:flex md:justify-between">
                    <div className="shadow-md bg-white rounded-lg mt-2 md:w-[50%] w-[95%] mx-auto md:mx-0 flex flex-col justify-center pl-4 py-2 md:pl-8">
                        <p className="mt-1  md:w-[80%]">
                         A decision tree is like a map with questions. For example:
                        </p>
                        <li>“What should I eat for lunch?”</li>
                        <p className="mt-1 ml-4 border-l-2 border-blue-400 p-2">
                            It helps you decide step-by-step, making it super simple!
                        </p>
                    </div>
                    <img src={thinkingChild} alt="" className="md:w-[30%] rounded-lg md:h-[210px] h-[180px] md:mt-0 mt-4 w-[95%] mx-auto md:mx-0"/>
                </div>
                
            </div>
            <div className="mt-16">
                <h2 className="text-[20px] text-center mb-8">
                    2. Works for All Kinds of Choices
                </h2>
                <div className="md:flex md:justify-between">
                    <div className="shadow-md bg-white rounded-lg mt-2 md:w-[50%] w-[95%] mx-auto md:mx-0 flex flex-col justify-center pl-4 py-2 md:pl-8">
                        <p className="mt-1  md:w-[80%]">
                        Whether it’s numbers (e.g., how much money to spend) or words (e.g., picking between pizza and burgers), a decision tree can handle both.
                        </p>
                    </div>
                    <img src={pizzaBurger} alt="" className="md:w-[30%] rounded-lg md:h-[210px] h-[180px] md:mt-0 mt-4 w-[95%] mx-auto md:mx-0"/>
                </div>
                
            </div>
            <div className="mt-16">
                <h2 className="text-[20px] text-center mb-8">
                3. Breaks Big Problems Into Small Steps
                </h2>
                <div className="md:flex md:justify-between">
                    <div className="shadow-md bg-white rounded-lg mt-2 md:w-[50%] w-[95%] mx-auto md:mx-0 flex flex-col justify-center pl-4 py-2 md:pl-8">
                        <p className="mt-1  md:w-[80%]">
                        It’s like a video game where you clear one level before moving to the next. A decision tree takes a big problem and breaks it into smaller, easy-to-solve parts.
                        </p>
                    </div>
                    <img src={VideoGame} alt="" className="md:w-[30%] rounded-lg md:h-[210px] h-[180px] md:mt-0 mt-4 w-[95%] mx-auto md:mx-0"/>
                </div>
                
            </div>
            <div className="mt-16">
                <h2 className="text-[20px] text-center mb-8">
                4. Helps You See Why You Made a Decision
                </h2>
                <div className="md:flex md:justify-between">
                    <div className="shadow-md bg-white rounded-lg mt-2 md:w-[50%] w-[95%] mx-auto md:mx-0 flex flex-col justify-center pl-4 py-2 md:pl-8">
                        <p className="mt-1  md:w-[80%]">
                        Ever argued with a friend about what to watch? A decision tree shows exactly how you reached your choice—no arguments needed! 😄
                        </p>
                    </div>
                    <img src={argumentImg} alt="" className="md:w-[30%] rounded-lg md:h-[210px] h-[180px] md:mt-0 mt-4 w-[95%] mx-auto md:mx-0"/>
                </div>
                
            </div>
            <div className="mt-16">
                <h2 className="text-[20px] text-center mb-8">
                5. Finds the Best Option
                </h2>
                <div className="md:flex md:justify-between">
                    <div className="shadow-md bg-white rounded-lg mt-2 md:w-[50%] w-[95%] mx-auto md:mx-0 flex flex-col justify-center pl-4 py-2 md:pl-8">
                        <p className="mt-1  md:w-[80%]">
                        When faced with too many choices (e.g., "Should I study Math, Science, or English first?"), a decision tree helps you pick the best one based on your goals.
                        </p>
                    </div>
                    <img src={studyChoice} alt="" className="md:w-[30%] rounded-lg md:h-[210px] h-[180px] md:mt-0 mt-4 w-[95%] mx-auto md:mx-0"/>
                </div>
                
            </div>
            <div className="mt-16">
                <h2 className="text-[20px] text-center mb-8">
                6. Can Predict Outcomes
                </h2>
                <div className="md:flex md:justify-between">
                    <div className="shadow-md bg-white rounded-lg mt-2 md:w-[50%] w-[95%] mx-auto md:mx-0 flex flex-col justify-center pl-4 py-2 md:pl-8">
                        <p className="mt-1  md:w-[80%]">
                        Imagine if a tree could predict your test score based on how much you study. Decision trees do this by learning patterns from past data!
                        </p>
                    </div>
                    <img src={predictionImg} alt="" className="md:w-[30%] rounded-lg md:h-[210px] h-[180px] md:mt-0 mt-4 w-[95%] mx-auto md:mx-0"/>
                </div>
                
            </div>
            <div className="mt-16">
                <h2 className="text-[20px] text-center mb-8">
                7. Helps You Focus on Important Things
                </h2>
                <div className="md:flex md:justify-between">
                    <div className="shadow-md bg-white rounded-lg mt-2 md:w-[50%] w-[95%] mx-auto md:mx-0 flex flex-col justify-center pl-4 py-2 md:pl-8">
                        <p className="mt-1  md:w-[80%]">
                        Decision trees point out what really matters. For example:
                        </p>
                        <li className="mt-2">
                        In deciding which sport to play, it might show that “having fun” is more important than “winning medals.”
                        </li>
                    </div>
                    <img src={sportImg} alt="" className="md:w-[30%] rounded-lg md:h-[210px] h-[180px] md:mt-0 mt-4 w-[95%] mx-auto md:mx-0"/>
                </div>
                
            </div>
            <div className="mt-16 mb-16">
                <h2 className="text-[20px] text-center mb-8">
                8. Works in Real Life Everywhere
                </h2>
                <div className="md:flex md:justify-between">
                    <div className="shadow-md bg-white rounded-lg mt-2 md:w-[50%] w-[95%] mx-auto md:mx-0 flex flex-col justify-center pl-4 py-2 md:pl-8">
                        <p className="mt-1  md:w-[80%]">
                        Decision trees are not just for fun; they’re used in real life:
                        </p>
                        <li className="mt-2">
                        Doctors use them to figure out what sickness someone has.
                        </li>
                        <li className="mt-2">
                        Online shopping sites use them to suggest what you might like to buy.
                        </li>
                        <li className="mt-2">
                        Schools can use them to decide which teaching methods work best for students.
                        </li>
                    </div>
                    <img src={shoppingImg} alt="" className="md:w-[30%] rounded-lg md:h-[210px] h-[180px] md:mt-0 mt-4 w-[95%] mx-auto md:mx-0"/>
                </div>
                
            </div>
        </div>
        <PreviousButton path={'/decision-tree-in-ai'}/>
    </div>
};

export default UsefullnessDT;
