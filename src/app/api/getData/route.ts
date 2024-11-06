import { v4 as uuidv4 } from 'uuid';
export async function GET(req: Request) {
    try {
        return new Response(JSON.stringify({ message: 'Api funcionando', id: uuidv4() }))
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ message: 'error en la api', error: error }))
    }
}
