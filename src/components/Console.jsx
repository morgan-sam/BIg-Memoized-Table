import React from 'react';

const Console = React.forwardRef((props, ref) => {
	const containerStyle = {
		width: '10rem',
		height: '100%',
		boxSizing: 'border-box',
		overflowY: 'scroll',
		border: '1px solid black'
	};
	const titleStyle = {
		fontSize: '1.2rem',
		padding: '1rem',
		textDecoration: 'underline'
	};
	const consoleStyle = {
		boxSizing: 'border-box',
		margin: '1rem'
	};
	return (
		<div style={containerStyle}>
			<div style={titleStyle}>Console log: </div>
			<div style={consoleStyle} ref={ref} />
		</div>
	);
});

export default Console;
