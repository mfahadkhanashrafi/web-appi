import React,{useEffect,useState} from 'react';

export const useScrollToTop = (initialScrollState = false) => {
    //useState hook using
    const [scrollToTop, setScrollToTop] = useState(initialScrollState);
  
    useEffect(() => {
      if (scrollToTop) {
        setScrollToTop(false);
        try {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } catch (error) {
          window.scrollTo(0, 0);
        }
      }
    }, [scrollToTop, setScrollToTop]);
  
    return setScrollToTop;
  };


  export default function scrollTop(){
    console.log('scrollTop scrollTo')
    window.scrollTo(0,0);
}