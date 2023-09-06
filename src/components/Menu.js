import React from "react";
import arrowR from '../assets/images/arrowR.png';

const Menu = (props) => {

    const { menu } = props;
    const {
        optionsIndex,
		musicIndex,
		settingsIndex,
		options,
		musicVisible,
		menuVisible,
		settingsVisible,
	} = menu;

	const arrowRImg = { arrowR };
    let show = "No Show Available";
    let menuArray, musicArray, settingsArray, value;

    // To check the menu visiblity
    if (menuVisible === "yes") {
		show = "menu";
		menuArray = options.map((object) => {
			const temp = Object.keys(object);
			return temp[0];
		});
		const val = menuArray[optionsIndex];
		value = val;
	}
	if (musicVisible === "yes") {
		show = "music";
		musicArray = options[optionsIndex].music;
		const val = musicArray[musicIndex];
		value = val;
	}
	if (settingsVisible === "yes") {
		show = "settings";
		settingsArray = options[optionsIndex].settings;
		const val = settingsArray[settingsIndex];
		value = val;
	}



    // used in JSX rendering 
    const divStyling = (item) => {
		if (value === item) {
			return { backgroundColor: "cyan" };
		}
		return {};
	};
	const imgStyling = (item) => {
		if (value === item) {
			return { display: "initial" };
		}
		return {};
	};


    // menu to be rendered
    let RenderMenu = "Will be rendered in the future";
	// Main Menu
	if (show === "menu") {
		RenderMenu = menuArray.map((item) => {
			return (
				<div className={item} style={divStyling(item)} id="options">
					<p style={styles.text}>{item}</p>
					<img
						src={arrowRImg.arrowR}
						alt="select"
						style={imgStyling(item)}
					/>
				</div>
			);
		});
	}
	// Music Menu
	else if (show === "music") {
		RenderMenu = musicArray.map((item) => (
			<div className={item} style={divStyling(item)} id="options">
				<p style={styles.text}>{item}</p>
				<img
					src={arrowRImg.arrowR}
					alt="select"
					style={imgStyling(item)}
				/>
			</div>
		));
	}
	// Settings Menu
	else if (show === "settings") {
		RenderMenu = settingsArray.map((item) => (
			<div className={item} style={divStyling(item)} id="options">
				<p style={styles.text}>{item.replace("-", " ")}</p>
				<img
					src={arrowRImg.arrowR}
					alt="select"
					style={imgStyling(item)}
				/>
			</div>
		));
	}

    // rendering the menu as a whole
    return (
        <div
			className={menuVisible === "no" ? "menu hide" : "menu"}
			style={styles.menu}
		>
			<div className="ipod-title" style={styles.title}>
				<p style={{ borderRadiusTopLeft: "10%" }}>IPOD APP</p>
			</div>
			{RenderMenu}
		</div>
    )
}

const styles = {
	title: {
		fontSize: "1.3rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textShadow: "1px 2px 0px cyan",
		borderRadiusTopLeft: "10%",

	},
	text: {
		marginLeft: "1rem",
		textTransform: "capitalize",
	},
	menu: {
		backgroundColor: "rgb(187, 200, 200)",
		borderRadiusTopLeft: "10%",
	},
};

export default Menu;