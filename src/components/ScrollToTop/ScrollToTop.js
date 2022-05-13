import React ,{useState,useEffect} from 'react'
import "./ScrollToTop.css";

const ScrollToTop = () => {
      const [isVisible , setIsVisible ]=useState(false);

      const toogleVisibility=()=>{
            if(window.pageYOffset>300){
                  setIsVisible(true)
            }else
            {
                  setIsVisible(false)
            }
      }

      const ScrollToTop =()=>{
            window.scrollTo({
                  top:0,
                  behavior:"smooth"
            })
      }

      useEffect(()=>{
            window.addEventListener("sroll",toogleVisibility);

            return ()=>{
                  window.removeEventListener("scroll",toogleVisibility)
            };
      },[]);


  return (
        <div className='scroll-to-top'>

        
        {isVisible && (
              <div onClick={ScrollToTop}>
              <i className='fas fa-arrow-circle-up fa-3x'></i>
              </div>
        )}  
        </div>
  );
};

export default ScrollToTop;