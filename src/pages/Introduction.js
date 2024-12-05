import React from 'react'
import decisionTreeImg from '../assets/images/Decision-Trees-2.png'
import introImg2 from '../assets/images/intro-img-2.jpg'
import { NextButton } from '../components/NextButton'

const Introduction = () => {
    return <div className='dark:text-white md:mr-8 lg:h-[100vh] mt-16 md:mt-4'>
        <h1 className='text-center text-2xl shadow-md p-4 text-blue-400 rounded-md'>
            What is A Decision Tree ? 
        </h1>
        <div className='md:flex md:justify-center md:gap-2 mt-8'>
            <div className='m-auto text-[18px] md:w-full w-[95%] mx-auto md:mx-0 flex flex-col items-center text-center font-sans leading-6 shadow-md p-4 py-8 bg-white rounded-lg'>
                <p className='mb-4'>
                    A decision tree is a diagram that helps in making decisions. It looks like a tree, where each branch represents a different option or choice.
                </p>
                <p className='mb-4'>
                    In simple terms, it’s a step-by-step guide that shows which decision to make based on certain conditions.
                </p>
                <p>
                    Each question or condition forms a "node" in the tree, and the answers lead you down different branches until you reach a final decision. It’s like solving a puzzle by asking questions one step at a time!
                </p>
             
            </div>
            <img src={decisionTreeImg} alt='' className='md:w-[40%]  md:mt-0 mt-4 w-[95%] mx-auto shadow-md bg-white rounded-md'/>
        </div>
        <div className='md:flex md:flex-row md:justify-center md:gap-2 flex flex-col-reverse mt-4'>
            <img src={introImg2} alt='' className='md:w-[35%] md:mt-0 mt-4 w-[95%] mx-auto shadow-md rounded-md'/>
            <div className='text-[18px] md:w-full w-[95%] mx-auto md:mx-0 text-center font-sans leading-7 shadow-md p-4  h-auto justify-center flex items-center bg-white rounded-lg'>
                <div>
                <p className='mb-4'>
                For example, a decision tree could be used to help a company decide which city to move its headquarters to, or whether to open a satellite office. 
                </p>
                <p className='mb-4'>
                Decision trees are also a popular tool in machine learning, as they can be used to build predictive models. These types of decision trees can be used to make predictions, such as whether a customer will buy a product based on their previous purchase history
                </p>
                </div>
                
             
            </div>
        </div>
        <NextButton path={'/story'}/>
    </div>
}

export default Introduction
