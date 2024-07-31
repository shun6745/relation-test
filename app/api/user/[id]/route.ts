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

// export const GET = async (
// 	req: Request,
// 	{ params }: { params: { id: string } },
// 	res: NextResponse
// ) => {
// 	const id: number = parseInt(params.id);

// 	const user = await prisma.user.findUnique({
// 		where: { id },
// 		include: {
// 			posts: true, // Include posts in the response
// 		},
// 	});

// 	return NextResponse.json(user);
// };

// トライキャッチ文なしで考える

// export const GET = async (
// 	req: Request,
// 	{ params }: { params: { id: string } }
// ) => {
// 	const { id } = params;
// 	try {
// 		const user = await prisma.user.findUnique({
// 			where: { id: parseInt(id, 10) },
// 			include: {
// 				posts: true, // Include posts in the response
// 			},
// 		});

// 		if (!user) {
// 			return NextResponse.json({ error: "User not found" }, { status: 404 });
// 		}

// 		return NextResponse.json(user);
// 	} catch (error) {
// 		console.error(error);
// 		return NextResponse.json(
// 			{ error: "Something went wrong" },
// 			{ status: 500 }
// 		);
// 	}
// };
