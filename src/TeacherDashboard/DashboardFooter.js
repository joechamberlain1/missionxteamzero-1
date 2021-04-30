import React from "react";

// Main footer for Teacher dashboard / Student Project builder.
// Using inline styling as no need for a dedicated section in a CSS as it is only 1 text

const DashboardFooter = () => {
	return (
		<h2
			style={{
				textAlign: "center",
				fontSize: "1em",
				fontWeight: "bold",
				height: "5%",
			}}
		>
			© LevelUp Works 2020
		</h2>
	);
};

export default DashboardFooter;
