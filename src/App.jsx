import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Alert from "./components/Alert";
import { useState, useEffect } from "react";
import { fetchTransactions } from "./services/transactions.service";
function App() {
	const API = import.meta.env.VITE_APP_BUDGET_API;
	const [modalOpen, setModalOpen] = useState(false);
	const [transactions, setTransactions] = useState([]);
	const [categories, setCategories] = useState([]);
	const [toDeleteId, setToDeleteId] = useState(null);

	function handleDeleteTransaction() {
		fetch(`${API}/transactions/${toDeleteId}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((res) => {
				setTransactions((prev) =>
					prev.filter((tranx) => tranx.id !== toDeleteId)
				);
			})
			.catch((error) => {
				console.log(error, "error");
			});
	}

	function confirmBeforeDelete(id) {
		setModalOpen(true);
		setToDeleteId(id);
	}
	function updateTransaction(updatedTransaction) {
		setTransactions((prev) => {
			prev.map((tranx) => {
				if (tranx.id === updatedTransaction.id) {
					return { ...tranx, ...updatedTransaction };
				}
				return tranx;
			});
		});
	}

	async function getTransactions() {
		try {
			const data = await fetchTransactions();
			setTransactions(data);
			const categoryList = data.map((tranx) => tranx.category);
			setCategories(categoryList);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getTransactions();
	}, []);

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
							element={
								<Index
									onconfirmBeforeDelete={confirmBeforeDelete}
									transactions={transactions}
								/>
							}
						/>
						<Route path="/transactions/:id" element={<Show />} />
						<Route
							path="/transactions/new"
							element={
								<New categories={categories} onSetCategories={setCategories} />
							}
						/>
						<Route
							path="/transactions/:id/edit"
							element={
								<Edit
									categories={categories}
									onSetCategories={setCategories}
									onUpdateTransaction={updateTransaction}
								/>
							}
						/>
					</Routes>
				</main>
				<Alert
					modalOpen={modalOpen}
					setModalOpen={setModalOpen}
					onHandleDeleteTransaction={handleDeleteTransaction}
				/>
			</Router>
		</>
	);
}

export default App;
