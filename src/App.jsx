import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<Router>
				<header>
					<NavBar />
				</header>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/transactions"
							element={<Index setModalOpen={setModalOpen} />}
						/>
						<Route path="/transactions/:id" element={<Show />} />
						<Route path="/transactions/new" element={<New />} />
						<Route path="/transactions/:id/edit" element={<Edit />} />
					</Routes>
				</main>
				<Alert modalOpen={modalOpen} setModalOpen={setModalOpen} />
			</Router>
		</>
	);
}

export default App;
