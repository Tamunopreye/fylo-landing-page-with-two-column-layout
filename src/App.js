// import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
	return (
		<div className="App">
			<Router>
				<Header />
				<Article />
				<Footer />
			</Router>
		</div>
	);
};

export default App;
