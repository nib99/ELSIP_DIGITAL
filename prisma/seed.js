// prisma/seed.js
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '@/lib/auth';

const prisma = new PrismaClient();

async function main() {
  const hashed = await hashPassword('admin123');
  await prisma.adminUser.upsert({
    where: { email: 'admin@elsip.et' },
    update: {},
    create: {
      email: 'admin@elsip.et',
      password: hashed,
      role: 'admin'
    }
  });
  console.log('Admin user created: admin@elsip.et / admin123');
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
