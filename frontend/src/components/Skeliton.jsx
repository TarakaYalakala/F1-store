import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css' 
import { SkeletonTheme } from 'react-loading-skeleton';
import "./Skeliton.css"

function Skeliton() {
  return (
    <div className='mains'>
      <div className="ske-container" style={{height:"300px",width:"250px",backgroundColor:"rgb(88, 81, 81)"}}>
      <SkeletonTheme baseColor="rgb(88, 81, 81)" highlightColor="pink">
    <div className='ske-ctr'>
      <Skeleton count={1} height={"150px"}/>
    </div>
    <div className="cs">
    <Skeleton count={1} height={"15px"}/>
    <Skeleton count={1} height={"15px"}/>    
    </div>
    <div className="btns">
    <Skeleton count={1} height={"25px"} width={"120px"}/>    
    </div>
  </SkeletonTheme>

      </div>
      {/* 2 */}
      <div className="ske-container" style={{height:"300px",width:"250px",backgroundColor:"rgb(88, 81, 81)"}}>
      <SkeletonTheme baseColor="rgb(88, 81, 81)" highlightColor="pink">
    <div className='ske-ctr'>
      <Skeleton count={1} height={"150px"}/>
    </div>
    <div className="cs">
    <Skeleton count={1} height={"15px"}/>
    <Skeleton count={1} height={"15px"}/>    
    </div>
    <div className="btns">
    <Skeleton count={1} height={"25px"} width={"120px"}/>    
    </div>
  </SkeletonTheme>

      </div>
      {/* 3 */}
      <div className="ske-container" style={{height:"300px",width:"250px",backgroundColor:"rgb(88, 81, 81)"}}>
      <SkeletonTheme baseColor="rgb(88, 81, 81)" highlightColor="pink">
    <div className='ske-ctr'>
      <Skeleton count={1} height={"150px"}/>
    </div>
    <div className="cs">
    <Skeleton count={1} height={"15px"}/>
    <Skeleton count={1} height={"15px"}/>    
    </div>
    <div className="btns">
    <Skeleton count={1} height={"25px"} width={"120px"}/>    
    </div>
  </SkeletonTheme>

      </div>
      {/* 4 */}
      <div className="ske-container" style={{height:"300px",width:"250px",backgroundColor:"rgb(88, 81, 81)"}}>
      <SkeletonTheme baseColor="rgb(88, 81, 81)" highlightColor="pink">
    <div className='ske-ctr'>
      <Skeleton count={1} height={"150px"}/>
    </div>
    <div className="cs">
    <Skeleton count={1} height={"15px"}/>
    <Skeleton count={1} height={"15px"}/>    
    </div>
    <div className="btns">
    <Skeleton count={1} height={"25px"} width={"120px"}/>    
    </div>
  </SkeletonTheme>

      </div>
    </div>
  )
}

export default Skeliton
