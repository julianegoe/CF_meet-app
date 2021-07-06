import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

export default function EventGenre({ events }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(() => getData());
	}, [events]);

	const getData = () => {
		const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
		const data = genres.map((genre) => {
			const number = events.filter((event) =>
				event.summary.includes(genre)
			).length;
			if (number > 0) {
				return { genre, number };
			}
		});
		console.log(data);
		return data;
	};

	return (
		<ResponsiveContainer height={400}>
			<PieChart width={500} height={500}>
				<Pie
					data={data}
					cx='50%'
					cy='50%'
					labelLine={false}
					innerRadius={80}
					outerRadius={150}
					fill='#8884d8'
					dataKey='number'
					label={({ genre, percent }) => {
						return `${(percent * 100).toFixed(0)}% ${genre}`;
					}}></Pie>
			</PieChart>
		</ResponsiveContainer>
	);
}
