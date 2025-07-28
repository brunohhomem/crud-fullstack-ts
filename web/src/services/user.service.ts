import { UserDto } from "@/dto/user.dto";
import prisma from "@/lib/prisma";

export async function getUserById(id: string): Promise<UserDto> {
  const foundUser = await prisma.user.findUnique(
    { where: { id } }
  )

  if (!foundUser) {
    throw new Error(`User with id ${id} not found`);
  }

  return {
    ...foundUser,
    avatarUrl: foundUser.avatarUrl ?? undefined,
    inactivatedAt: foundUser.inactivatedAt ?? undefined
  }
}