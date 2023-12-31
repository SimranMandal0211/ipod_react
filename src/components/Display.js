import React from "react";
import Menu from './Menu';
import Allsongs from './Allsongs';

const Display = (props) => {

    const { menu, screen, songsList, updateProgress, progressRef, theme } =
		props;
	const { wallpaper, screenIndex } = screen;

    // Changing the ipod display theme color
    const themeDisplay = () => {
        if (theme.themeIndex === 0) {
			return { background: "linear-gradient(90deg, #e3e4e5,#cacaca)" };
		} else {
			return { backgroundColor: "black" };
		}
    };


    return (
        <div className="display"
            style={themeDisplay()}
        >
            {/* screenIndex === 7 is images.allsongs from this.state.screen ojects wallpaper */}
            {screenIndex === 7 && (
                <Allsongs 
                    songsList={songsList}
                    progressRef={progressRef}

                    updateProgress={updateProgress}
                />
            )}
            {screenIndex !== 7 && (
                <img src={wallpaper[screenIndex]}
                    alt="DISPLAY SCREEN"
                    style={{
						height: "100%",
						width: "100%",
						borderRadius: "10%",
						zIndex: 2,
					}}
                />
            )}

            <Menu menu={menu} />
        </div>
    )
}

export default Display;