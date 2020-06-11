import React from 'react';

const Cell = (props) => {
	console.log('.');
	const { text, entryIndex, data, setData } = props;
	const selectable = typeof text === 'boolean';
	const handleClick = () => {
		if (selectable) {
			let newData = JSON.parse(JSON.stringify(data));
			newData[entryIndex]['active'] = !text;
			setData(newData);
		}
	};
	return (
		<td style={{ cursor: selectable ? 'pointer' : 'auto' }} onClick={handleClick}>
			{selectable ? text ? '✔' : '' : text}
		</td>
	);
};

export default Cell;
