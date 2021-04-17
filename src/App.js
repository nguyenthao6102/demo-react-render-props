import "./App.css";
import Counter from "./components/Counter";
import List from "./components/List";

const data = ["A", "B", "C"];
function App() {
	return (
		<div className="App">
			<List
				data={data}
				render={(item, index) => <div key={index}>{item}</div>}
			/>
			<List
				data={data}
				render={(item, index) => <div key={index}> -{item}</div>}
			/>
			<List
				data={data}
				render={(item, index) => <div key={index}> +{item}</div>}
			/>
			<Counter>{(value) => <h1>{value}</h1>}</Counter>
		</div>
	);
}

export default App;
