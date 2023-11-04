import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CodeEditor from '../components/CodeEditor';
import { useRef } from 'react';

const Problem = () => {

   const [language, setLanguage] = useState('python');
   const {id} = useParams();
   const descriptionRef = useRef(null);



   const problem = {
      name:'Two Sum',
      tag:'Easy',
      number:'1',
      discription:"Given an array of integers <span>nums</span> and an integer <span>target</span>,return indices of the two numbers such that they add up to <span>target</span>.<br/> <br/> You may assume that each input would have <span>exactly one solution,</span> and you may not use the same solution twice. <br/><br/> You can return the answer in any order.",
      likes:52158,
      dislikes:1712,
      submissions:'21.7M',
      accepted:'11M',
      FollowUp:'Can you come up with an algorithm that is less than <span>O(n2)</span> time complexity?'
   }

   useEffect(()=>{descriptionRef.current.innerHTML = problem.discription},[])

  return (
        <div className="problem">
            {/* Problem I */}
      <div className="problem-info-section">
        <div className="problem-info-header">
          <ul>
            <li className='' ><a href="#">Description</a></li>
            <li><a href="#">Solution</a></li>
            <li className='active' ><a href="#">Discuss</a></li>
            <li><a href="#">Submissions</a></li>
          </ul>
        </div>
        <div className="problem-description">
           <h3 className='problem-name' >{problem.number}. {problem.name}</h3>
           <div className='problem-header' >
              <div className={problem.tag} >{problem.tag}</div>
              <div>{problem.likes}</div>
              <div>{problem.dislikes}</div>
              <div>Add to List</div>
              <div>Share</div>
           </div>
           <div className='problem-story' >
            <p ref={descriptionRef} >
             
            </p>
           </div>
        </div>
        <div className="problem-footer-left">
            <div className='left'>
              <button className='footer-btn' >Problems</button>
              <button className= 'footer-btn' >Pick One</button>
            </div>
            <div className='right'>
              <button className='footer-btn' >Prev</button>
              <div className='' >211/2898</div>
              <button className='footer-btn' >Next</button>
            </div>
        </div>
      </div>
      <div className="resize-handle--x"></div>
      <div className="editor-section">
        <div className="editor-header">
            <div className="editor-header-left">
            <div>
                <select name="language" id="language" onChange={(e)=>{setLanguage(e.target.value);}} >
                    <option value="python">Python3</option>
                    <option value="c++">C++</option>
                    <option value="java">Java</option>
                    <option value="javascript">Javascript</option>
                    <option value="typescript">Typescript</option>
                    <option value="ruby">Ruby</option>
                    <option value="c">C</option>
                    <option value="go">Go</option>
                    <option value="rust">Rust</option>
                </select>
            </div>
            <div className='autocomplete' >
                Autocomplete
            </div>
            </div>
            <div className='editor-header-right' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
    </svg>
    <svg className='svg' xmlns="http://www.w3.org/2000/svg" fill="none"   strokeWidth={1.5} stroke="currentColor" height="1em" viewBox="0 0 448 512"><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/></svg>
            </div>
        </div>
      <CodeEditor language={language} />
      <div className="problem-footer-right">
        <div className='left' >
            <div>Console</div>
            <div>Contribute</div>
        </div>
        <div className="right">
            <button className="run-code">
                Run Code
            </button>
            <button className="submit">
               Submit
            </button>
        </div>
      </div>
      </div>
    </div>

  )
}

export default Problem
