import React, { useEffect, useRef } from 'react';

    function useOutsideAlerter(ref,isOpen,handler) {
        useEffect(() => {
          function handleClickOutside(event) {
            if( isOpen && ref?.current && !ref.current.contains(event.target)){
                handler();
            };
          }
            document.addEventListener('click',handleClickOutside)
          return () => {
            document.removeEventListener("click", handleClickOutside);
          };
        }, [ref,handler]);
      }


export default function ClickOuter(props) {
    const {isOpen,setIsOpen} = props;
    const menuRef= useRef(null);
    useOutsideAlerter(menuRef,isOpen,() => setIsOpen(false));
    return <div ref={menuRef}>{props.children}</div>;
  }