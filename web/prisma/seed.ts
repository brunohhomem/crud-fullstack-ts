import { Prisma, PrismaClient } from './_generated/prisma';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
    password: 'changeme123',
    avatarUrl: `https://i.pravatar.cc/150?u=alicefoto`,
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
  },
  {
    name: 'Bob',
    email: 'bob@prisma.io',
    password: 'changeme123',
    avatarUrl: `https://i.pravatar.cc/150?u=bobfoto`,
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
