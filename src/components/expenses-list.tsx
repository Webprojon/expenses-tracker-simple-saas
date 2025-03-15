export default function ExpensesList() {
	const expenses = [
		{
			id: "e1",
			description: "Car insurance",
			amount: 294.67,
		},
	];

	return (
		<ul className="h-[300px] bg-white rounded mt-4 shadow-md">
			{expenses.map((expense) => (
				<li key={expense.id} className="border-b flex items-center px-4 py-2">
					<p>{expense.description}</p>
					<p className="ml-auto font-bold mr-[15px]">{expense.amount}</p>
					<button className="text-[10px] w-[20px] h-[20px] bg-red-500 hover:bg-red-600 text-white rounded">
						X
					</button>
				</li>
			))}
		</ul>
	);
}
