import "./App.css";
import CounterExample from "./Components/CounterExample";

const imageuri = "https://media.giphy.com/media/3o6Zt6fzS6qEbLhKWQ/giphy.gif";

function App() {
	return (
		<div className='App' style={{ padding: 20 }}>
			<img src={imageuri} alt='ImageUri' style={{ height: 100, width: 300,alignItems:"center" }} />
			<CounterExample />
		</div>
	);
}

export default App;
