import React , { useState, useEffect } from 'react';

const Statewise = () => {

	const [data , setData] = useState([]);

	const getCovidData = async () => {
		const res = await fetch('https://data.covid19india.org/data.json');
		const actualData = await res.json();
		//console.log(actualData.statewise);
		setData(actualData.statewise);
	}

	useEffect(() => {
		getCovidData();
	} , []);

	return (
		<>
			<div className="container-fluid mt-5">
			   <div className="main-heading">
					<h1 className="text-center">India Covid-19 Dashboard</h1>
			   </div>

			   <div className="table-responsive">
			   		<table className="table table-hover">
			   			<thead className="thead-dark dark">
			   				<tr className="text-center">
			   					<th> State </th>
				   				<th> Confirmed </th>
				   				<th> Recovered </th>
				   				<th> Deaths </th>
				   				<th> Active </th>
				   				<th> Updated </th>
				   			</tr>
			   			</thead>
			   			<tbody>

			   				{
			   					data.map((curElem,ind,a)=>{
			   					return (
				   					<tr className="text-center" key={ind}>
					   					<td className="green"> { curElem.state } </td>
						   				<td className="green"> { curElem.confirmed } </td>
						   				<td className="green"> { curElem.recovered } </td>
						   				<td className="red"> { curElem.deaths } </td>
						   				<td className="green"> { curElem.active } </td>
						   				<td className="green"> { curElem.lastupdatedtime } </td>
					   				</tr>
			   					);
			   				})

			   			   }

			   			</tbody>
			   		</table>
			   </div>

			</div>
		</>
	);
}

export default Statewise;