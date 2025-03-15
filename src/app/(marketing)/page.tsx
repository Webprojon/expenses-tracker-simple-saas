import Image from "next/image";

export default function Home() {
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
			</div>
		</div>
	);
}
