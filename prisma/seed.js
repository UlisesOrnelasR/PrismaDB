const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa666 = await prisma.explorer.upsert({
        where: { name: 'Woopa 666' },
        update: {},
        create: {
          name: 'Woopa 666',
                  username: 'ajolonauta666',
                  mission: 'Node'
        },
      });
    
    const student1 = await prisma.student.upsert({
        where: { id: 1 },
        update: {},
        create: {
          name: 'Student1',
                  lang: 'español',
                  missionCommander: 'Carlo',
                  enrollments: 4, 
        },
      });
    
      const student2 = await prisma.student.upsert({
        where: { id: 2 },
        update: {},
        create: {
          name: 'Student2',
                  lang: 'ingles',
                  missionCommander: 'Fer',
                  enrollments: 2,
                  hasCertification: true 
        },
      });

    console.log('Create 5 explorers y 2 students');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();