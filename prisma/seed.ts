import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const hashedPassword = 'password123';

async function main() {
    // Supression
    await prisma.image.deleteMany()
    await prisma.work.deleteMany()
    await prisma.user.deleteMany()
    // Création de 10 utilisateurs
    for (let i = 0; i < 5; i++) {
      await prisma.user.create({
        data: {
          email: faker.internet.email(),
          name: faker.internet.userName(),
          password: faker.internet.password(), // Vous devriez utiliser une logique sécurisée pour les mots de passe dans un environnement réel
        },
      });
    }
  
    // Récupération de tous les utilisateurs
    const users = await prisma.user.findMany();
  
    // Création de 2 œuvres pour chaque utilisateur avec des images associées
    for (const user of users) {
      for (let i = 0; i < 2; i++) {
        const work = await prisma.work.create({
          data: {
            title: `Work ${i + 1} by ${user.name}`,
            createdAt: new Date(),
            userId: user.id,
            slug: faker.lorem.slug(), 
            image: {
              create: Array.from({ length: 10 }, (_, index) => ({
                uploadedAt: new Date(),
                path: faker.image.imageUrl(),
                pinnedImage: (index % 2 === 0 && index < 5) ? i === 0 : false,
                userId: user.id,
                })),
            },
          },
          include: {
            image: true,
          },
        });
        console.log(`Created work: ${work.title}`);
      }
    }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })