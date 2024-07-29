import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();
// ライブラリーで省略可
// コンポーネント化もする


// export const GET = async (req: Request, { params }: { params: { id: string } }) => {
//   const { id } = params;
//   try {
//     const user = await prisma.user.findUnique({
//       where: { id: parseInt(id, 10) },
//       include: {
//         posts: true, // Include posts in the response
//       },
//     });

//     if (!user) {
//       return NextResponse.json({ error: 'User not found' }, { status: 404 });
//     }

//     return NextResponse.json(user);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
//   }
// };