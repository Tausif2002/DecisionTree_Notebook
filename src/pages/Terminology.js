import React from "react";
import terminology from '../assets/images/terminology.png'
import { NextButton } from "../components/NextButton";
import { PreviousButton } from "../components/PreviousButton";


const Terminology = () => {
    return <div className='dark:text-white md:mx-8 mt-16 md:mt-4 font-sans md:h-[100vh]'>
        <h1 className='text-center text-2xl shadow-md p-4 text-blue-400 rounded-md'>
        Terminologies related to Decision Trees
        </h1>
        <div className="text-[17px]">
            <div className="md:mt-16 mt-8 md:flex md:gap-4 md:items-center">
                <div className="md:w-[45%] shadow-md bg-white rounded-md pl-8 py-4 md:pr-4 pr-2 w-[95%] mx-auto">
                    <ol className="list-decimal flex flex-col gap-4 ">
                        <li>
                            <strong>Root Node: </strong>It represents the entire population or sample and this further gets divided into two or more homogeneous sets.
                        </li>
                        <li>
                            <strong>Splitting: </strong>It is a process of dividing a node into two or more sub-nodes
                        </li>
                        <li>
                            <strong>Decision Node:  </strong>When a sub-node splits into further sub-nodes, then it is called the decision node.
                        </li>
                        <li>
                            <strong>Leaf / Terminal Node: </strong>Nodes do not split is called Leaf or Terminal node.
                        </li>
                        <li>
                            <strong>Branch / Sub-Tree: </strong>A subsection of the entire tree is called branch or sub-tree.

                        </li>
                        <li>
                            <strong>Parent and Child Node:  </strong>A node, which is divided into sub-nodes is called a parent node of sub-nodes whereas sub-nodes are the child of a parent node.

                        </li>
                    </ol>
                </div>
                <div>
                    <img alt="" src={terminology} className="md:mt-0 mt-4 w-[95%] mx-auto shadow-md rounded-md"/>
                </div>
            </div>
        </div>
        <div className="flex gap-4 items-center justify-center">
            <PreviousButton path={'/story'}/>
            <NextButton path={'/decision-tree-in-ai'}/>
        </div>
    </div>
};

export default Terminology;
