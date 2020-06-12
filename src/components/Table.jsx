import React, { useState, useEffect, useCallback } from 'react';
import Cell from 'components/Cell';
import { capitaliseEachWord } from 'process/utility';

const headings = [
	'index',
	'first name',
	'last name',
	'gender',
	'age',
	'address',
	'country',
	'email',
	'phone',
	'mobile',
	'active',
	'premium'
];

const Table = (props) => {
	const { data, setData } = props;
	const [ tableEntries, setTableEntries ] = useState([]);

	const memoSetData = useCallback((entryIndex, cellKey, cellVal) => {
		setData((data) => {
			let newData = JSON.parse(JSON.stringify(data));
			newData[entryIndex][cellKey] = !cellVal;
			return newData;
		});
	}, []);

	useEffect(
		() => {
			const entries = data.map((entry, i) => {
				return (
					<tr key={i}>
						{Object.entries(entry).map(([ key, value ], i) => (
							<Cell
								memoSetData={memoSetData}
								cellKey={key}
								cellVal={value}
								entryIndex={entry.index}
								key={i}
							/>
						))}
					</tr>
				);
			});
			setTableEntries(entries);
		},
		[ data ]
	);

	const tableStyle = {
		display: 'block',
		height: '100%',
		width: '100%',
		overflowX: 'hidden',
		overflowY: 'scroll',
		border: '1px solid black'
	};

	return (
		<table style={tableStyle}>
			<thead>
				<tr>
					{headings.map((el, i) => (
						<th className={`${el} heading`} key={i}>
							{capitaliseEachWord(el)}
						</th>
					))}
				</tr>
			</thead>
			<tbody>{tableEntries}</tbody>
		</table>
	);
};

export default Table;
