import AppHeader from "@/components/app-header";
import BackgroundPattern from "@/components/background-pattern";
import React from "react";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<BackgroundPattern />

			<div className="flex flex-col gap-y-10 max-w-[1100px] mx-auto px-4 min-h-screen">
				<AppHeader />
				{children}
			</div>
		</>
	);
}
