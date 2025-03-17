import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
	// Authentication check
	const { isAuthenticated, getUser } = getKindeServerSession();

	if (!(await isAuthenticated())) {
		redirect("/api/auth/login");
	}

	// Get user info
	const user = await getUser();

	return (
		<div className="text-center">
			<h1 className="text-3xl font-bold text-white">Account</h1>
			<p className="text-white mt-2">
				Logged in with email: <span className="font-bold">{user.email}</span>
			</p>
		</div>
	);
}
