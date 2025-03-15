"use client";
import { deleteExpense } from "@/actions/actions";
import { Expense } from "@prisma/client";

type ExpensesListProps = {
	expenses: Expense[];
};

export default function ExpensesList({ expenses }: ExpensesListProps) {
	return (
		<ul className="h-[300px] bg-white rounded mt-4 shadow-md">
			{expenses.map((expense) => (
				<li key={expense.id} className="border-b flex items-center px-4 py-2">
					<p>{expense.description}</p>
					<p className="ml-auto font-bold mr-[15px]">${expense.amount}</p>
					<button
						onClick={async () => {
							await deleteExpense(expense.id);
						}}
						className="text-[10px] w-[20px] h-[20px] bg-red-500 hover:bg-red-600 text-white rounded"
					>
						X
					</button>
				</li>
			))}
		</ul>
	);
}
