import ExpensesForm from "@/components/expenses-form";
import ExpensesList from "@/components/expenses-list";

export default function Page() {
	return (
		<div>
			<h1 className="text-3xl font-bold text-white text-center">Dashboard</h1>

			<div className="w-full max-w-[600px] mx-auto">
				<ExpensesList />

				<ExpensesForm />
			</div>
		</div>
	);
}
