import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const GET = async (req: Request) => {
	try {
		// Fetch all users with their posts
		const users = await prisma.user.findMany({
			include: {
				posts: true, // Include posts in the response
			},
		});

		return NextResponse.json(users);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Something went wrong" },
			{ status: 500 }
		);
	}
};

export const PUT = async (
	req: Request,
	{ params }: { params: { id: string } },
	res: NextResponse
) => {
	const id: number = parseInt(params.id);
	const { name, email, posts } = await req.json();

	const user = await prisma.user.update({
		data: {
			name,
			email,
			posts: {
				deleteMany: {}, // 既存の関連投稿をすべて削除
				create: posts, // 新しい投稿を作成
			},
		},
		where: { id },
	});
	return NextResponse.json(user);
};
