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

export function fetchTransactionById(id) {
	return fetch(`${API}/transactions/${id}`)
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
export function updateTransaction(transaction) {
  return fetch(`${API}/transactions/${transaction.id}`, {
    method: "PUT",
    headers: {
      "Content-Type":"application/json"
    },
    body:JSON.stringify(transaction)
  })
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
