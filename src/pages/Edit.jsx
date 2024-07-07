import React from "react";
import FormTransaction from "../components/ FormTransaction";
import { useParams } from "react-router-dom";
export default function Edit({ categories, onSetCategories }) {
	const { id } = useParams();
	return (
		<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<FormTransaction
				id={id}
				categories={categories}
				onSetCategories={onSetCategories}
			/>
		</div>
	);
}
