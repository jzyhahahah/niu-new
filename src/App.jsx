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
					path="/niu-new/a90"
					element={
						<NiuNew id="A90" time="16:33" phone="158****7975" isXixi={false} />
					}
				/>
				<Route
					path="/niu-new/a102"
					element={
						<NiuNew id="A102" time="16:33" phone="198****8179" isXixi={false} />
					}
				/>
				<Route
					path="/niu-new/a148"
					element={
						<NiuNew id="A148" time="16:38" phone="198****8179" isXixi={false} />
					}
				/>
				<Route
					path="/niu-new/a154"
					element={
						<NiuNew id="A154" time="16:38" phone="158****7975" isXixi={false} />
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
