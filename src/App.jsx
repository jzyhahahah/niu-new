import { Routes, Route } from "react-router-dom";
import { NavBar } from "antd-mobile";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Routes>
				<Route
					path="/"
					element={
						<>
							<NavBar className="app-navbar">
								<div className="app-header">
									<span className="header-emoji">🎬</span>
									<span className="header-title">影视爱好者</span>
								</div>
							</NavBar>
							<Home />
						</>
					}
				/>
				<Route path="/movie/:id" element={<MovieDetail />} />
			</Routes>
		</div>
	);
}

export default App;
