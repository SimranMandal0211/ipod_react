import React from "react";
import Display from './Display';
import Controller from './Controller';

const Ipod = (props) => {
    const {
        menu,
        screen,
        mouse,
        songsList,
        theme,
        controllerRef,
        progressRef,
        
        isMenuVisible,
        addClass,
        removeClass,
        tap,
        rotate,
        play,
        nextSong,
        prevSong,
        updateProgress,
    } = props;

    // changing the ipod theme shadow
    const themeIpod = () => {
        if(theme.themeIndex === 0){
            return {
                boxShadow: '1px 4px 15px 10px rgba(151, 151, 151, 0.72)',
                background: 'inear-gradient(90deg, #e3e4e5,#cacaca)',
            };
        }else{
            return {
				boxShadow: "0px 1px 15px 13px rgba(151, 151, 151, 0.72)",
				backgroundColor: "black",
			};
        }
    };

     // changing the ipod top container theme color
     const themeTopContainer = () => {
        if(theme.themeIndex === 0){
            return { background: 'linear-gradient(90deg, #e3e4e5, #cacaca)'};
        }
        else{
            return { backgroundColor: 'black'};
        }
    };

     // changing the ipod display container theme color
     const themeDisplayContainer = () => {
        if(theme.themeIndex === 0){
            return { background: 'linear-gradient(90deg, #e3e4e5, #cacaca)'};
        }
        else{
            return { backgroundColor: 'black'};
        }
    };

    // changing the Ipod Bottom Container Theme Color
    const themeBottomContainer = () => {
        if(theme.themeIndex === 0){
            return {
                background: 'linear-gradient(90deg, #e3e4e5, #cacaca)',
                transition: 'all 2s linear',
            };
        }else{
            return { backgroundColor: 'black', transition: 'all 2s linear'};
        }
    };


    return (
       <div className="ipod" style={themeIpod()}>
            <div className="top-container" 
                style={themeTopContainer()} 
                onMouseUp={(e) => {
                    e.stopPropagation();
                    removeClass('inner-circle', 'down');
                    return;
                }}>
                    <div className="display-container" style={themeDisplayContainer()}>
                        <Display />
                    </div>
            </div>
            <div className="bottom-container"
                style={themeBottomContainer()}>
                    <Controller />
            </div>
        </div>
    )
}

export default Ipod;