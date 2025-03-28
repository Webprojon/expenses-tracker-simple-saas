import PurchaseBtn from "@/components/purchase-btn";
import { prisma } from "@/lib/db";
import {
	getKindeServerSession,
	LoginLink,
	RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const { isAuthenticated, getUser } = getKindeServerSession();
	const isLoggedIn = await isAuthenticated();
	let isPayingMember = false;
	const user = await getUser();

	if (user) {
		const membership = await prisma.membership.findFirst({
			where: {
				userId: user.id,
				status: "active",
			},
		});
		if (membership) {
			isPayingMember = true;
		}
	}

	return (
		<div className="bg-[#5DC9A8] min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10">
			<Image
				width={700}
				height={472}
				className="rounded-sm"
				alt="Expenses tracker app preview"
				src="https://bytegrad.com/course-assets/youtube/expensestracker/preview.png"
			/>

			<div>
				<h1 className="text-5xl font-semibold my-6 max-w-[500px]">
					Track your <span className="font-extrabold">expenses</span> with ease
				</h1>
				<p className="font-medium text-2xl max-w-[600px]">
					Use Expenses Tracker to easly keep track of your expenses. Get
					lifetime access for $99.
				</p>

				<div className="mt-10 space-x-3">
					{!isLoggedIn ? (
						<>
							<LoginLink className="bg-black text-white py-2 px-6 rounded-lg font-medium">
								Login
							</LoginLink>

							<RegisterLink className="bg-black/50 text-white py-2 px-6 rounded-lg font-medium">
								Register
							</RegisterLink>
						</>
					) : !isPayingMember ? (
						<PurchaseBtn />
					) : (
						<Link
							href="/app/dashboard"
							className="bg-black text-white py-2 px-6 rounded-lg font-medium"
						>
							Go to dashboard
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
