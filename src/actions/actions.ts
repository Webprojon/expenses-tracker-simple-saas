"use server";

import { prisma } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addExpense(formData: FormData) {
	// Authentication check
	const { isAuthenticated, getUser } = getKindeServerSession();
	if (!(await isAuthenticated())) {
		redirect("/api/auth/login");
	}

	const user = await getUser();

	await prisma.expense.create({
		data: {
			description: formData.get("description") as string,
			amount: Number(formData.get("amount")),
			creatorId: user.id,
		},
	});

	revalidatePath("/app/dashboard");
}

//export async function updateExpense(formData: FormData, id: number) {
// Authentication check
//const { isAuthenticated } = getKindeServerSession();
//if (!(await isAuthenticated())) {
//	redirect("/api/auth/login");
//}

//	await prisma.expense.update({
//		where: {
//			id: id,
//		},
//		data: {
//			description: formData.get("description") as string,
//			amount: Number(formData.get("amount")),
//		},
//	});

//	revalidatePath("/app/dashboard");
//}

export async function deleteExpense(id: number) {
	// Authentication check
	const { isAuthenticated } = getKindeServerSession();
	if (!(await isAuthenticated())) {
		redirect("/api/auth/login");
	}

	await prisma.expense.delete({
		where: {
			id: id,
		},
	});

	revalidatePath("/app/dashboard");
}
