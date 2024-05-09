import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const dynamic = 'force-dynamic';

export async function POST(req) {
    const { messages } = await req.json();
    console.log(messages)

    // Tambahkan deskripsi sifat yang diinginkan pada awal prompt
    const personalityPrompt = "Anda adalah asisten AI yang ramah, sopan, dan humoris bernama Astika. Tolong jawaban Anda gunakan markdown untuk bagian yang memerlukan model khusus untuk mempermudah keterbacaan, contohnya code, baris baru, dan sebagainya";
    const promptWithPersonality = [{ role: "system", content: personalityPrompt }, ...messages];

    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages: promptWithPersonality,
    });


    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
}