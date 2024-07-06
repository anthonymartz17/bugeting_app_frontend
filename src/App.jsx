import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";
import Edit from "./pages/Edit";
function App() {
	return (
		<Router>
			<header>
				<NavBar />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/transactions" element={<Index />} />
					<Route path="/transactions/:id" element={<Show />} />
					<Route path="/transactions/new" element={<New />} />
					<Route path="/transactions/:id/edit" element={<Edit />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
