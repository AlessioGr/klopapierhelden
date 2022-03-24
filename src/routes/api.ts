import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export async function post({request}) {
    const errors = false;

    let body = await request.json();

    const bestellung = await prisma.Bestellung.create({
        data: {
            name: 'Test',
            email: 'test@prisma.io',
            amount: 1,
            ort: "ort",
            nummer: "nummer",
            done: false
        },
    })


    if (errors) {
        // return validation errors
        return {
            status: 400,
            body: { errors }
        };
    }

    // redirect to the newly created item
    return {
        status: 200,
        body: { requesst: body }
    };
}