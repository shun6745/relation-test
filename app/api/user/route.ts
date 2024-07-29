import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  try {
    const { name, email, posts } = await req.json();

    // Create a new user along with posts
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        posts: {
          create: posts, // posts should be an array of post objects
        },
      },
      include: {
        posts: true, // Include posts in the response
      },
    });
//エラー文とってもいい
    return NextResponse.json(newUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
};

//7.29 ポストは値が取れてる