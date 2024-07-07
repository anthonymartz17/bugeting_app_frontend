const API = import.meta.env.VITE_APP_BUDGET_API;

export function fetchTransactions() {
	return fetch(`${API}/transactions`)
		.then((res) => {
			if (!res.ok) {
				if (res.status === 404) {
					throw new Error("Transactions not found");
				} else {
					throw new Error("Server error: " + res.status);
				}
			}
			return res.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => {
			throw error;
		});
}
