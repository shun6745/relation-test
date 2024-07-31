// "use client";

// import { useRouter, useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// // 後ほどtype に入れる

// interface User {
// 	id: number;
// 	name: string;
// 	email: string;
// 	posts: Post[];
// }

// interface Post {
// 	id: number;
// 	title: string;
// 	content: string;
// }
// //明日get やってみる

// const ViewUser = () => {
// 	const id = useParams<{ id: string }>().id;
// 	const router = useRouter();
// 	const [users, setUsers] = useState<User>();
// 	const [loading, setLoading] = useState<boolean>(true);
// 	const [titele, settitele] = useState("");
// 	const [isFetching, setIsFetching] = useState(false);

// 	useEffect(() => {
// 		const fetchUser = async () => {
// 			setIsFetching(true);
// 			{
// 				const res = await fetch(`/api/user/`);
// 				const users = await res.json();
// 				setUsers(users);
// 				// settitele(post.titele);
// 				// ここでincludeを使うじゃないとrelatonできない
// 			}
// 			setIsFetching(false);
// 		};
// 		fetchUser();
// 	}, []);

// 	return (
// 		<div className="container mx-auto p-4">
// 			{/* {users.map((users: User) => (
// 				<div
// 					key={users.id}
// 					className="w-2/3 px-4 py-2 border  rounded-lg border-gray-700">
// 					<div className="flex justify-between">
// 						<h1 className="font-bold text-xl">{users.name}</h1>
// 						<div className="space-x-2">
// 							<Link
// 								href={`/user/edit/${users.id}`}
// 								className="px-5 py-1 bg-black text-white rounded-full text-sm">
// 								編集
// 							</Link>
// 						</div>
// 					</div>
// 					<div></div>

// 					<h2 className="text-sm border-b-2"></h2>

// 					<div className="p-4">{users.email}</div>
// 				</div>
// 			))} */}

// 			<h1 className="text-2xl font-bold mb-4">{users.titel}</h1>
// 			<p>{users.email}</p>
// 			<h2 className="text-xl font-bold mt-4">Posts</h2>
// 			<ul>
// 				{users.map((users: User) => (
// 					<li key={users.id} className="mb-2">
// 						<h3 className="font-bold">{post.title}</h3>

// 						<p>{post.content}</p>
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };

// export default ViewUser;

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

//--------------看一下老师的API和·Link--------------------
//ここはいったん使わない
interface Post {
	id: number;
	title: string;
	content: string;
}

interface User {
	id: number;
	name: string;
	email: string;
	posts: Post[];
}
//明日get やってみる

const UserDetail = () => {
	const router = useRouter();
	const { id } = router.query;
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (id) {
			fetchUserDetails();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	const fetchUserDetails = async () => {
		setLoading(true);
		try {
			const response = await fetch(`/api/user/${id}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!response.ok) {
				throw new Error("Failed to fetch user details");
			}

			const data: User = await response.json();
			setUser(data);
		} catch (error) {
			// setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!user) return <div>User not found</div>;

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">{user.name}</h1>
			<p>{user.email}</p>
			<h2 className="text-xl font-bold mt-4">Posts</h2>
			<ul>
				{user.posts.map((post) => (
					<li key={post.id} className="mb-2">
						<h3 className="font-bold">{post.title}</h3>
						<p>{post.content}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserDetail;
