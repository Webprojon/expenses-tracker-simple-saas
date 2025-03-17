"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
	{
		label: "Dashboard",
		path: "/app/dashboard",
	},
	{
		label: "Account",
		path: "/app/account",
	},
];

export default function AppHeader() {
	const pathname = usePathname();

	return (
		<header className="flex items-center border-b border-white/20 py-3">
			<Link href="/app/dashboard">
				<Image
					alt="logo"
					width={25}
					height={25}
					src="https://bytegrad.com/course-assets/youtube/expensestracker/logo.png"
				/>
			</Link>

			<nav className="ml-auto">
				<ul className="flex gap-3">
					{routes.map((route) => (
						<li key={route.path}>
							<Link
								href={route.path}
								className={`px-2 py-1 hover:text-white transition-all text-white/100 rounded-sm
                   ${pathname === route.path && "bg-black/10"}`}
							>
								{route.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<LogoutLink className="text-white/70 ml-[10px]">Logout</LogoutLink>
		</header>
	);
}
