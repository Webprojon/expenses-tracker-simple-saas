"use client";

import { createCheckoutSession } from "@/actions/actions";

export default function PurchaseBtn() {
	return (
		<button
			onClick={async () => {
				await createCheckoutSession();
			}}
			className="bg-black text-white py-2 px-6 rounded-lg font-medium"
		>
			Purchase
		</button>
	);
}
