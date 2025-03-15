import ExpensesForm from "@/components/expenses-form";
import ExpensesList from "@/components/expenses-list";
import { prisma } from "@/lib/db";

export default async function Page() {
	const expenses = await prisma.expense.findMany();

	return (
		<div>
			<h1 className="text-3xl font-bold text-white text-center">Dashboard</h1>

			<div className="w-full max-w-[600px] mx-auto">
				<ExpensesList expenses={expenses} />

				<ExpensesForm />
			</div>
		</div>
	);
}
