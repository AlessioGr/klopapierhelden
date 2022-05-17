import { createClient } from '@supabase/supabase-js'

export async function get({ params }) {
    const errors = false;

    const supabase = createClient('https://lnhuexooxbomzwcgypsj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuaHVleG9veGJvbXp3Y2d5cHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI3MDQ3OTIsImV4cCI6MTk2ODI4MDc5Mn0.yFiU16z9Dpn0c7iSVC11W3rlDSawCeNybBc7aupmOzA')


    const { data, error } = await supabase
        .from('orders')
        .select('amount')


    let count = 0;

    for(const order of data) {
        count += order.amount;
    }



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
            body: { error }
        };
    }

    // redirect to the newly created item
    return {
        status: 200,
        body: { count: count }
    };
}