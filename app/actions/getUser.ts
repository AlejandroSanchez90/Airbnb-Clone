import prisma from '../libs/prismadb';
import { safeListing } from '../types';
export default async function getUser(email: string) {
  try {
    const userExist = await prisma.user.findUnique({ where: { email: email } });
    if (userExist) {
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    throw new Error(error);
  }
}
