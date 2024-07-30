"use client";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

// 後ほどtype に入れる
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

const ViewUser = () => {
	const id = useParams<{ id: string }>().id;
	const router = useRouter();
	const [name, setName] = useState("");
	const [titele, settitele] = useState("");
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [isFetching, setIsFetching] = useState(false);

	// useEffect(() => {
	// 	if (id) {
	// 		fetchUserDetails();
	// 	}
	// }, [id]);

	useEffect(() => {
		const fetchUser = async () => {
			setIsFetching(true);
			{
				const res = await fetch(`/api/user/${parseInt(id)}`);
				const user = await res.json();
				setName(user.name);
				// settitele(post.titele);
				// ここでincludeを使うじゃないとrelatonできない
			}
			setIsFetching(false);
		};
		fetchUser();
	}, []);

	// この場所にエンドポイント書き直す

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

export default ViewUser;

// export default UserDetail;
