"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NewUser = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [isFetching, setIsFetching] = useState(false);
	const router = useRouter();

	const handleSubmit = async () => {
		setIsFetching(true);
		{
			const response = await fetch("/api/user", {
				method: "POST",

				body: JSON.stringify({
					name,
					email,
					posts: [{ title, content }], // Send posts data
				}),
			});
			const data = await response.json();
		}
		setIsFetching(false);
		router.push("/");
		router.refresh();
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Create New User</h1>
			<div className="mb-4">
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Name"
					className="border p-2 mr-2"
				/>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					className="border p-2"
				/>
			</div>
			<div className="mb-4">
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Post Title"
					className="border p-2 mr-2"
				/>
				<textarea
					value={content}
					onChange={(e) => setContent(e.target.value)}
					placeholder="Post Content"
					className="border p-2"
				/>
			</div>
			<button
				onClick={handleSubmit}
				disabled={isFetching}
				className={`bg-blue-500 text-white px-4 py-2 ${
					isFetching ? "opacity-50 cursor-not-allowed" : ""
				}`}>
				{isFetching ? "Submitting..." : "Submit"}
			</button>
		</div>
	);
};

export default NewUser;
