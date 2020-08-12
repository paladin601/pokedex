
import React from 'react';
import $ from 'jquery';

export default _ => {
    const navOpen = (event,asd) => {
        if(event.target.nodeName=="SPAN"){
            $(event.target.parentNode).toggleClass("open");
        }else{
            $(event.target).toggleClass("open");
        }
    }
    return (
        <div className="menu-toggle-btn" onClick={() => navOpen(event,this)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}