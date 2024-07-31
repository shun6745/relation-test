"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export type User = {
	id: number;
	name: string;
	email: string;
};

export type Post = {
	id: number;
	title: string;
	content: string;
	posts: Post[];
};

const UserDetail = () => {
	const [users, setUsers] = useState<User[]>([]);

	const [reload, setReload] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchUsers = async () => {
			setIsLoading(true);
			try {
				const res = await fetch("/api/user/{id}");
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				const users = await res.json();
				setUsers(users);
			} catch (error) {
				console.error("Error fetching users:", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchUsers();
	}, [reload]);

	const handleReload = () => {
		setReload(!reload);
	};

	return (
		<div className="flex flex-col items-center scroll-py-5">
			<div className="flex justify-between mb-5">
				<p className="text-center pr-3 mr-3 font-bold text-5xl">UEHARA BLOG</p>

				{isLoading ? (
					<p>Reloading...</p>
				) : (
					<button
						onClick={handleReload}
						type="button"
						className="bg-blue-500 text-white px-2 py-1">
						Reload
					</button>
				)}
			</div>
			<Link
				className="px-5 py-1 border-2 rounded-lg text-green-800 border-green-700 bg-green-100"
				href="/user">
				新しい投稿
			</Link>
			<div className="w-2/3 px-4 py-2 space-y-4 flex flex-col items-center pb-10 mt-5 border rounded-lg border-gray-700">
				<div className="w-full space-y-4 flex flex-col items-center pb-10 mt-5">
					{users.map((users: User) => (
						<div
							key={users.id}
							className="w-2/3 px-4 py-2 border rounded-lg border-gray-700">
							<div className="flex justify-between">
								<h1 className="font-bold text-xl">{users.name}</h1>
								<div className="space-x-2"></div>
							</div>
							<div></div>
							<h2 className="text-sm border-b-2"></h2>
							<div className="p-4">{users.email}</div>
							<ul>
								{users.posts.map((post: Post) => (
									<li key={post.id} className="mb-2">
										<h1>投稿内容</h1>
										<h3 className="font-bold">{post.title}</h3>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default UserDetail;

// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";

// interface Post {
// 	id: number;
// 	title: string;
// 	content: string;
// }

// interface User {
// 	// map(
// 	// 	arg0: (users: User) => import("react").JSX.Element
// 	// ): import("react").ReactNode;
// 	id: number;
// 	name: string;
// 	email: string;
// 	posts: Post[];
// }

// const UserDetail = () => {
// 	const [users, setUsers] = useState<User[]>([]);
// 	const [reload, setReload] = useState(false);
// 	const [isLoading, setIsLoading] = useState(false);

// 	useEffect(() => {
// 		const fetchUsers = async () => {
// 			setIsLoading(true);
// 			{
// 				const res = await fetch("/api/user/");
// 				const users = await res.json();
// 				setUsers(users);
// 			}
// 			setIsLoading(false);
// 		};
// 		fetchUsers();
// 	}, [reload]);

// 	const handleReload = () => {
// 		setReload(!reload);
// 	};

// 	return (
// 		<div className="flex flex-col items-center scroll-py-5">
// 			<div className="flex justify-between  mb-5">
// 				<p className="text-center  pr-3 mr-3 font-bold text-5xl">UEHARA BLOG</p>

// 				{isLoading ? (
// 					<p>Reloading...</p>
// 				) : (
// 					<button
// 						onClick={handleReload}
// 						type="button"
// 						className="bg-blue-500 text-white px-2 py-1">
// 						Reload
// 					</button>
// 				)}
// 			</div>
// 			<Link
// 				className="px-5 py-1 border-2 rounded-lg text-green-800 border-green-700 bg-green-100"
// 				href="/user">
// 				新しい投稿
// 			</Link>
// 			<div className="w-2/3  px-4 py-2 space-y-4 flex flex-col items-center pb-10 mt-5 border rounded-lg border-gray-700">
// 				<div className="w-full space-y-4 flex flex-col items-center pb-10 mt-5">
// 					{users.map((users: User) => (
// 						<div
// 							key={users.id}
// 							className="w-2/3 px-4 py-2 border  rounded-lg border-gray-700">
// 							<div className="flex justify-between">
// 								<h1 className="font-bold text-xl">{users.name}</h1>
// 								<div className="space-x-2">
// 									{/* <Link
// 										href={`/user/edit/${users.id}`}
// 										className="px-5 py-1 bg-black text-white rounded-full text-sm">
// 										編集
// 									</Link> */}
// 								</div>
// 							</div>
// 							<div></div>

// 							<h2 className="text-sm border-b-2"></h2>

// 							<div className="p-4">{users.email}</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default UserDetail;
