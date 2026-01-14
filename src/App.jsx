import { Routes, Route } from "react-router-dom";
import { NavBar } from "antd-mobile";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NiuNew from "./pages/NiuNew";
import { useParams } from "react-router-dom";
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
				<Route
					path="/niu-new/a140"
					element={
						<NiuNew
							id="A140"
							time="17:19"
							phone="158****7975"
							shopName="baolong"
						/>
					}
				/>
				<Route
					path="/niu-new/a89"
					element={
						<NiuNew id="A89" time="17:00" phone="158****7975" shopName="xixi" />
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
