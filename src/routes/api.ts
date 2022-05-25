import { createClient } from '@supabase/supabase-js'

export async function post({request}) {
    const errors = false;

    const body: {name: string, rollen: number, wofinden: string, email: string, nummer: string} = await request.json();

    const supabase = createClient('https://lnhuexooxbomzwcgypsj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuaHVleG9veGJvbXp3Y2d5cHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI3MDQ3OTIsImV4cCI6MTk2ODI4MDc5Mn0.yFiU16z9Dpn0c7iSVC11W3rlDSawCeNybBc7aupmOzA')

    console.log("Got post request:", request)

    const { data, error } = await supabase
        .from('orders')
        .insert([
            {
                name: body.name,
                amount: body.rollen,
                location: body.wofinden,
                email: body.email,
                phone_number: body.nummer,
                completed: false
            }
        ])

   /* const { data, error } = await supabase
        .from('orders')
        .select()
*/
    /*const bestellung = await prisma.bestellung.create({
        data: {
            name: 'Test',
            email: 'test@prisma.io',
            amount: 1,
            ort: "ort",
            nummer: "nummer",
            done: false
        },
    })*/


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
        body: { request: body }
    };
}


export async function get({request}) {
    const errors = false;

    const body: {name: string, rollen: number, wofinden: string, email: string, nummer: string} = await request.json();

    const supabase = createClient('https://lnhuexooxbomzwcgypsj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuaHVleG9veGJvbXp3Y2d5cHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI3MDQ3OTIsImV4cCI6MTk2ODI4MDc5Mn0.yFiU16z9Dpn0c7iSVC11W3rlDSawCeNybBc7aupmOzA')

    console.log("Got post request:", request)

    const { data, error } = await supabase
        .from('orders')
        .insert([
            {
                name: body.name,
                amount: body.rollen,
                location: body.wofinden,
                email: body.email,
                phone_number: body.nummer,
                completed: false
            }
        ])

    /* const { data, error } = await supabase
         .from('orders')
         .select()
 */
    /*const bestellung = await prisma.bestellung.create({
        data: {
            name: 'Test',
            email: 'test@prisma.io',
            amount: 1,
            ort: "ort",
            nummer: "nummer",
            done: false
        },
    })*/


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
        body: { request: body }
    };
}
