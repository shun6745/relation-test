"use client";

import { useEffect, useState } from "react";

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

const UserDetail = () => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [reload, setReload] = useState(false);

	useEffect(() => {
		const fetchUser = async () => {
			setIsLoading(true);
			try {
				const res = await fetch("/api/user/");
				const data: User = await res.json();
				setUser(data);
			} catch (err) {
				setError("Failed to fetch user data");
			}
			setIsLoading(false);
		};
		fetchUser();
	}, [reload]);

	const handleReload = () => {
		setReload(!reload);
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	if (!user) {
		return <div>No user data available</div>;
	}

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
			<button
				onClick={handleReload}
				className="mt-4 p-2 bg-blue-500 text-white">
				Reload
			</button>
		</div>
	);
};

export default UserDetail;
