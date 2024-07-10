import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Alert from "./components/Alert";
import { useState, useEffect } from "react";
import {
	fetchTransactions,
	deleteTransaction,
} from "./services/transactions.service";
function App() {
	const API = import.meta.env.VITE_APP_BUDGET_API;
	const [modalOpen, setModalOpen] = useState(false);
	const [transactions, setTransactions] = useState([]);
	const [categories, setCategories] = useState([]);
	const [toDeleteId, setToDeleteId] = useState(null);
	const [currentBalance, setCurrentBalance] = useState(0);

	async function handleDeleteTransaction() {
		try {
			await deleteTransaction(toDeleteId);
			setTransactions((prev) =>
				prev.filter((tranx) => tranx.id !== toDeleteId)
			);
		} catch (error) {
			console.log(error);
		}
	}
	function updateBalance(transactions) {
		setCurrentBalance(
			transactions.reduce(
				(acc, curr) =>
					curr.isDeposit
						? (acc += Number(curr.amount))
						: (acc -= Number(curr.amount)),
				0
			)
		);
	}

	function confirmBeforeDelete(id) {
		setModalOpen(true);
		setToDeleteId(id);
	}
	function updateTransaction(updatedTransaction) {
		setTransactions((prev) =>
			prev.map((tranx) =>
				tranx.id === updatedTransaction.id
					? { ...tranx, ...updatedTransaction }
					: tranx
			)
		);
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
		updateBalance(transactions);
	}, [transactions]);

	useEffect(() => {
		getTransactions();
		console.log(currentBalance);
	}, []);

	return (
		<>
			<Router>
				<header>
					<NavBar currentBalance={currentBalance} />
				</header>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/transactions"
							element={
								<Index
									onConfirmBeforeDelete={confirmBeforeDelete}
									transactions={transactions}
								/>
							}
						/>
						<Route
							path="/transactions/:id"
							element={<Show onConfirmBeforeDelete={confirmBeforeDelete} />}
						/>
						<Route
							path="/transactions/new"
							element={
								<New
									categories={categories}
									onSetCategories={setCategories}
									onSetTransactions={setTransactions}
								/>
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
