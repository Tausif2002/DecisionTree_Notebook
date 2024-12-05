import React from "react";
import storyImg1 from '../assets/images/storyImg1.png'
import storyImg2 from '../assets/images/storyImg2.png'
import storyImg3 from '../assets/images/storyImg3.png'
import storyImg4 from '../assets/images/storyImg4.png'
import { NextButton } from "../components/NextButton";
import { PreviousButton } from "../components/PreviousButton";

const Story = () => {
    return <div className='dark:text-white md:mx-8 mt-16 md:mt-4 font-sans'>
        <h1 className='text-center text-2xl shadow-md p-4 text-blue-400 rounded-md'>
            A Fun Story
        </h1>
        <div className="md:m-16 m-6 text-center text-[18px]">
            <p>
                
                 Alright, let’s understand a decision tree like a fun story! Imagine you’re at a magical theme park called <strong>Adventure Land</strong> , and you need to decide where to go next. But there’s a twist—this theme park uses a <strong>decision tree 🌳</strong> to guide you! 
            </p>
        </div>
        <div className="text-[17px]">
            <div className="mt-16">
                <h2 className="text-[20px] text-center mb-8">
                    The Beginning: The Big Question
                </h2>
                <div className="md:flex md:justify-between">
                    <div className="shadow-md bg-white rounded-lg mt-2 md:w-[50%] w-[95%] mx-auto md:mx-0 flex flex-col justify-center">
                        <p className="mt-4 ml-4 w-[80%]">
                            You’re standing at the entrance of Adventure Land, and a big talking tree greets you. It asks:
                        </p>
                        <p className="mt-4 ml-4 border-l-2 border-blue-400 md:mb-0 p-2 mb-4 ">
                            "What do you like more: Rides or Animals?"
                        </p>
                    </div>
                    <img src={storyImg1} alt="" className="md:w-[30%] md:mt-0 mt-4 w-[95%] mx-auto"/>
                </div>
                
            </div>
        
            <div className="mt-16">
                <h2 className="text-[20px] text-center mb-8">
                    First Branch: Choosing Your Path
                </h2>
                <div className="md:flex md:justify-between">
                    <div className="shadow-md bg-white rounded-lg mt-2 md:w-[50%] w-[95%] py-4 md:py-0 mx-auto md:mx-0 flex flex-col justify-center">
                        <p className="pl-4 w-[80%]">
                            If you say Rides, the tree points you to the left branch.
                            If you say Animals, the tree points you to the right branch.
                        </p>
                        <li className="mt-4 ml-4">
                        You now have two branches leading to different adventures.
                        </li>
                    </div>
                    <img src={storyImg2} alt="" className="md:w-[40%] md:h-[200px] md:mt-0 mt-4 w-[95%] mx-auto"/>
                </div>
                
            </div>

            <div className="mt-16">
                <h2 className="text-[20px] text-center mb-8">
                    Second Layer: Narrowing Down Choices
                </h2>
                <div className="md:flex md:justify-end md:items-center md:align-middle">
                    <div>
                        <div className="shadow-md bg-white rounded-lg py-2 pb-4 mt-4 md:w-[100%] w-[95%] mx-auto md:mx-0">
                            <p className="md:mt-1 mt-4 ml-4">
                                If you chose Rides:
                            </p>
                            <p className="mt-2 ml-4">
                                The next magical tree asks:
                            </p>
                            <p className="mt-2 ml-4 border-l-2 border-blue-400 p-2">
                                "Do you prefer Thrill rides or Family rides?"
                            </p>
                        </div>
                        <div className="shadow-md bg-white rounded-lg py-2 pb-4 mt-4 md:w-[100%] w-[95%] mx-auto md:mx-0">
                            <p className="md:mt-1 mt-4 ml-4">
                                If you chose Animals:
                            </p>
                            <p className="mt-2 ml-4">
                                The next magical tree asks:
                            </p>
                            <p className="mt-2 ml-4 border-l-2 border-blue-400 p-2">
                                "Do you want to see Wild animals or Petting animals?"
                            </p>
                        </div>
                    </div>
                    <img src={storyImg3} alt="" className="md:w-[40%] md:mt-0 mt-4 w-[95%] mx-auto"/>
                </div>
                
            </div>

            <div className="mt-16">
                <h2 className="text-[20px] text-center mb-8">
                    Third Layer: Adding More Fun
                </h2>
                <p className="ml-4">
                    You walk further and meet a smaller but very wise tree. It now gets even more specific!
                </p>
                <div className="md:flex md:justify-between md:items-center">
                    <div>   
                        <div className="shadow-md bg-white rounded-lg  py-2 pb-4 mt-4 md:w-[100%] w-[95%] mx-auto md:mx-0">
                            <p className="md:mt-1 mt-4 ml-4">
                                If you chose Rides --&gt; Thrill:
                            </p>
                            <p className="mt-2 ml-4">
                                The wise tree asks:
                            </p>
                            <p className="mt-2 ml-4 border-l-2 border-blue-400 p-2">
                                "Do you want a water ride or a roller coaster?"
                            </p>
                            <p>
                                <li className="md:mt-1 mt-4 ml-4">
                                    If you say Water ride, it directs you to the Splash Mountain Adventure. 🌊
                                </li>
                                <li className="mt-4 ml-4">
                                    If you say Roller coaster, it directs you to the Dragon Loop Coaster. 🎢
                                </li>
                            </p>
                        </div>
                        <div className="shadow-md bg-white rounded-lg py-2 pb-4 mt-4 md:w-[100%] w-[95%] mx-auto md:mx-0">
                            <p className="md:mt-1 mt-4 ml-4">
                                If you chose Rides --&gt; Family:
                            </p>
                            <p className="mt-2 ml-4">
                                The wise tree asks:
                            </p>
                            <p className="ml-4 border-l-2 border-blue-400 p-2 mt-4">
                                "Do you want indoor rides or outdoor rides?"                            </p>
                            <p>
                                <li className="mt-4 ml-4">
                                    If you say Indoor, it directs you to the Glow-in-the-Dark Bumper Cars. 🚗✨
                                </li>
                                <li className="mt-4 ml-4">
                                    If you say Outdoor, it directs you to the Magic Carousel. 🎠
                                </li>
                            </p>
                        </div>
                        <div className="shadow-md bg-white rounded-lg py-2 pb-4 mt-4 md:w-[100%] w-[95%] mx-auto md:mx-0">
                            <p className="md:mt-1 mt-4 ml-4">
                                If you chose Animals --&gt; Wild:
                            </p>
                            <p className="mt-2 ml-4">
                                The wise tree asks:
                            </p>
                            <p className="mt-2 ml-4 border-l-2 border-blue-400 p-2">
                                "Do you want to see predators or herbivores?"
                            </p>
                            <p>
                                <li className="mt-4 ml-4">
                                    If you say Predators, it directs you to the Lion and Tiger Zone. 🦁🐯
                                </li>
                                <li className="mt-4 ml-4">
                                    If you say Herbivores, it directs you to the Elephant and Giraffe Zone. 🐘🦒
                                </li>
                            </p>
                        </div>
                        <div className="shadow-md bg-white rounded-lg py-2 mt-4 pb-4 md:w-[100%] w-[95%]  mx-auto md:mx-0">
                            <p className="md:mt-1 mt-4 ml-4">
                                If you chose Animals --&gt; Petting:
                            </p>
                            <p className="mt-2 ml-4">
                                The wise tree asks:
                            </p>
                            <p className="mt-2 ml-4 border-l-2 border-blue-400 p-2">
                                "Do you want to pet small animals or large animals?"
                            </p>
                            <p>
                                <li className="mt-4 ml-4">
                                    If you say Small, it directs you to the Bunny and Guinea Pig Garden. 🐰🐹
                                </li>
                                <li className="mt-4 ml-4">
                                    If you say Large, it directs you to the Pony and Goat Pen. 🐴🐐
                                </li>
                            </p>
                        </div>
                    </div>
                    <img src={storyImg4} alt="" className="md:w-[45%] md:h-[400px] md:mt-0 mt-4 w-[95%] mx-auto"/>
                </div>
                
            </div>
        </div>
        <div className="flex gap-4 items-center justify-center">
        <PreviousButton path={'/introduction'}/>
        <NextButton path={'/terminologies'}/>
        </div>
    </div>
};

export default Story;
