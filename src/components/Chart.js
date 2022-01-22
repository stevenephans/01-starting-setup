import React from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
	const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	//creates an array of just the dataPoint values from the dataPoint object array

	const totalMaximum = Math.max(...dataPointValues);
	/* dataPointValues --> Math.max([val1, val2, etc]) --> array object is Math.max() method arg
	- - - - - - - - - - - - - - - - - - - - VERUS - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	...dataPointValues --> Math.max(val1, val2, etc) --> list of values IN array is Math.max() method arg */

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					label={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
				/>
			))}
		</div>
	);
};

export default Chart;
