import {useState} from 'react'

import './index.css'




export const TimeLine = () => {
  const [isHover,setIsHover] = useState("")
  return(
    <>
        <div className="container-timeline" >
      <div className='circle-icon' ></div>
      <div className='line' ></div>
      <div className='transition-line' ></div>
      <div className='timeline-card'>
        <p className='timeline-title'>Diploma in Web Development</p>
        <p className='timeline-info'>BSE In CSE (2004 - 2008)</p>
        <p className='timeline-content'>Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
      </div>
        </div>
        <div className="container-timeline">
      <div className='circle-icon' ></div>
      <div className='line' ></div>
      <div className='transition-line' ></div>
      <div className='timeline-card'>
        <p className='timeline-title'>Diploma in Web Development</p>
        <p className='timeline-info'>BSE In CSE (2004 - 2008)</p>
        <p className='timeline-content'>Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
      </div>
        </div>
        <div className="container-timeline">
      <div className='circle-icon' ></div>
      <div className='line' ></div>
      <div className='transition-line' ></div>
      <div className='timeline-card'>
        <p className='timeline-title'>Diploma in Web Development</p>
        <p className='timeline-info'>BSE In CSE (2004 - 2008)</p>
        <p className='timeline-content'>Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
      </div>
        </div>
    </>
  )
  
};