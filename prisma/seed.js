const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

(async function main() {
    try {
        const woopa = await prisma.explorer.upsert({
            where: { name: "Woopa" },
            update: {},
            create: {
                name: "Woopa",
                username: "ajolonauta",
                mission: "Node",
            },
        });

        const woopa1 = await prisma.explorer.upsert({
            where: { name: "Woopa1" },
            update: {},
            create: {
                name: "Woopa1",
                username: "ajolonauta1",
                mission: "Node",
            },
        });

        const woopa2 = await prisma.explorer.upsert({
            where: { name: "Woopa 2" },
            update: {},
            create: {
                name: "Woopa 2",
                username: "ajolonauta2",
                mission: "Java",
            },
        });

        const woopa3 = await prisma.explorer.upsert({
            where: { name: "Woopa 3" },
            update: {},
            create: {
                name: "Woopa 3",
                username: "ajolonauta3",
                mission: "Node",
            },
        });

        const woopa666 = await prisma.explorer.upsert({
            where: { name: "Woopa 666" },
            update: {},
            create: {
                name: "Woopa 666",
                username: "ajolonauta666",
                mission: "Node",
            },
        });

        const student1 = await prisma.student.upsert({
            where: { id: 1 },
            update: {},
            create: {
                name: "Student1",
                lang: "español",
                missionCommander: "Carlo",
                enrollments: 4,
            },
        });

        const student2 = await prisma.student.upsert({
            where: { id: 2 },
            update: {},
            create: {
                name: "Student2",
                lang: "ingles",
                missionCommander: "Fer",
                enrollments: 2,
                hasCertification: true,
            },
        });

        const student4 = await prisma.student.upsert({
            where: { id: 6 },
            update: {},
            create: {
                name: "Student4",
                lang: "Frances",
                missionCommander: "Carlo",
                enrollments: 7,
                hasCertification: true,
            },
        });

        const student7 = await prisma.student.upsert({
            where: { id: 7 },
            update: {},
            create: {
                name: "Student7",
                lang: "Portugues",
                missionCommander: "Fer",
                enrollments: 6,
            },
        });

        const mc1 = await prisma.missionCommander.upsert({
            where: { id: 11 },
            update: {},
            create: {
                name: "Carlo Gilmar",
                username: "CarloG",
                mainStack: "Elixir",
                currentEnrollment: true,
                hasAzureCertification: true,
            },
        });

        const mc2 = await prisma.missionCommander.upsert({
            where: { id: 12 },
            update: {},
            create: {
                name: "Omar Perez",
                username: "Romarpla",
                mainStack: "Security",
                currentEnrollment: true,
                hasAzureCertification: true,
            },
        });

        const mc3 = await prisma.missionCommander.upsert({
            where: { id: 13 },
            update: {},
            create: {
                name: "Fernanda",
                username: "Imosh",
                mainStack: "Python",
                currentEnrollment: true,
            },
        });

        const mc4 = await prisma.missionCommander.upsert({
            where: { id: 14 },
            update: {},
            create: {
                name: "Osvaldo Gabino",
                username: "Gabinito",
                mainStack: "Javascript",
                hasAzureCertification: true,
            },
        });

        const mc5 = await prisma.missionCommander.upsert({
            where: { id: 15 },
            update: {},
            create: {
                name: "Frank Alexis",
                username: "Franky",
                mainStack: "C++",
                currentEnrollment: true,
                hasAzureCertification: true,
            },
        });

        console.log("Create explorers, students and MCs");
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}());
