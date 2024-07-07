import React, { useState } from "react";

export default function DropdownAddOption({
	categories,
	selectedCategory,
	handleFormData,
}) {
	const [optionList, setOptionList] = useState(categories);
	const [newOption, setNewOption] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	function handleAddOption() {
		if (newOption.trim() !== "") {
			setOptionList([...optionList, newOption]);
			setNewOption("");
			setIsOpen(false);
		}
	}

	return (
		<div className="flex">
			<select
				value={selectedCategory}
				onChange={handleFormData}
				id="category"
				className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
			>
				<option value={newOption} disabled>
					Select
				</option>
				{optionList.map((opt, idx) => (
					<option value={opt} key={idx}>
						{opt}
					</option>
				))}
			</select>
			{isOpen ? (
				<div
					className="relative w-full 
        "
				>
					<input
						value={newOption}
						onChange={(e) => setNewOption(e.target.value)}
						type="text"
						id="category"
						className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
						placeholder="Add category"
						required
					/>

					<span
						onClick={() => setIsOpen((prev) => !prev)}
						className="absolute bottom-10 cursor-pointer text-white

right-0 material-symbols-outlined"
					>
						close
					</span>
					<button
						onClick={(e) => handleAddOption(e)}
						type="button"
						className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						<span className="material-symbols-outlined">add</span>
					</button>
				</div>
			) : (
				<button
					onClick={() => setIsOpen((prev) => !prev)}
					type="button"
					className="top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					<span className="material-symbols-outlined">add</span>
				</button>
			)}
		</div>
	);
}
