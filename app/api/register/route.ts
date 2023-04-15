import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import client from '@/app/libs/prismadb';
import { log } from 'console';
import getUser from '@/app/actions/getUser';

export async function POST(request: Request, response: Response) {
  const body = await request.json();
  const { email, name, password } = body;

  const userExist = await getUser(email);
  if (userExist) {
    return NextResponse.json({ error: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await client.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });
  return NextResponse.json(user);
}
