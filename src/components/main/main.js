import React from 'react';
import { Form } from './form/form';
import { Preview } from './preview/preview';
import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import './main.css';

export const Main = () => {

    const { language } = useSelector((state) => state.language);
    const { top, right, bottom, left } = useSelector(
      (state) => state.site.margins
    );
  
    const printRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => printRef.current,
    });
  
    const getPageMargins = () => {
      return `@page { margin: ${top}px ${right}px ${bottom}px ${left}px !important; }`;
    };
  
    useEffect(() => {
      document.documentElement.lang = language;
    }, [language]);

    
    return (
        <div className='app'>
            <Form handlePrint={handlePrint}/>
            <div className='print'>
                <style>{getPageMargins()}</style>
                <Preview ref={printRef} />
            </div>
        </div>
    );
}

export default Main;