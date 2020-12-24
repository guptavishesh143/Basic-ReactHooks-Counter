import React, { useState } from "react";
import "./CounterExample.css";

const CounterExample = () => {
	const [count, setcount] = useState(0);
  //const [Reset, setReset] = useState(0);

    return (
		<div className='MainBox' style={{ color: "#1890ff" }}>
			<h1>Counter Program </h1>
			<h1>{count ? count : 0}</h1>

			<div className='Box1'>
				<ul>
					<dl>
						<button
							id='buttoncss'
							onClick={() => {
								setcount(0);
							}}
						>
							Reset the Counter
						</button>
					</dl>
					<dl>
						<button 
                        id='buttoncss'
							onClick={() => {
								setcount(count + 1);
							}}
						>
							Incrementing
						</button>
					</dl>
					<button id='buttoncss'
                    onClick={() => setcount(count - 1)}>Decrementing</button>
					<dl></dl>
				</ul>
			</div>
		</div>
	);
};

export default CounterExample;
