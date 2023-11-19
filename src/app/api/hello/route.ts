import connectMongoDB from '../../../../libs/mongodb';

export async function GET() {
  return new Response('hello');
}
