import React from 'react'
import CodeEditor from './CodeEditor';

const Problem = () => {
  return (
    <div className='problem' >
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
           <h3 className='problem-name' >1. Two Sum</h3>
           <div className='problem-header' >
              <div className='easy' >Easy</div>
              <div>52145</div>
              <div>1712</div>
              <div>Add to List</div>
              <div>Share</div>
           </div>
           <div className='problem-story' >
            <p>
             Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. <br /> <br />
             You may assume that each input would have exactly one solution,you may not use the same element twice. <br /> <br />
             You can return the answer in any order.
            </p>
           </div>
        </div>
      </div>
      <CodeEditor/>
    </div>
  )
}

export default Problem;
