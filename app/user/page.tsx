"use client";

import Link from "next/link";
import NewUser from "../components/NewUser";

const Page = async () => {
	return (
		<div className="conatiner m-auto">
			<div className="flex items-center justify-between h-screen">
				<NewUser />
				<div className="flex flex-col w-1/2 items-center justify-center">
					<p className="font-bold text-7xl mb-10">New Blog</p>
					<Link href="/">[ホームに戻る]</Link>
				</div>
			</div>
		</div>
	);
};
export default Page;
