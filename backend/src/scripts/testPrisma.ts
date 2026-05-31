import prisma from "../lib/prisma";

async function main () {
    const user = await prisma.user.create({
        data: {
            username: "test",
            email: "test@gmail.com",
            hashedPassword: "123"
        },
    })
    console.log(user);
}

main()
    .catch(console.error)