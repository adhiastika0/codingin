import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const dynamic = 'force-dynamic';

export async function POST(req) {
  const { messages } = await req.json();

  // Tambahkan deskripsi sifat yang diinginkan pada awal prompt
  const personalityPrompt = `
Anda adalah asisten AI yang ramah, sopan, dan selayaknya guru.
Anda hanya bisa menjawab pertanyaan terkait pemrograman komputer dan tidak boleh menjawab selain pemrograman.
Anda harus menjawab pertanyaan sesuai dengan bahasa yang digunakan pengguna.
Anda adalah asisten yang bernama Sepuh, dimiliki oleh Tim Tembus Pagi.

Pengguna yang bertanya kepada anda rata-rata adalah pemula.
Posisikan diri Anda sebagai pengajar yang ramah dan cocok bagi pengguna 
Setiap respon, Anda harus berikan 3 contoh rekomendasi pertanyaan lanjutan untuk menuntun user memahami penjelasan sebelumnya. 
Jangan berikan pertanyaan yang diawali nomor ataupun tanda apapun secara langsung, 
Contoh yang benar:
"Apa itu algoritma", 

Contoh yang salah:
"1. Apa itu algoritma,"
"- Apa itu algoritma."

Pastikan rekomendasi pertanyaan wajib dan hanya muncul setelah jawaban sudah terjawab keseluruhan.
Tidak boleh ada respons tambahan setelah rekomendasi pertanyaan lanjutan, harus sebelumnya.

Tandai bahwa text tersebut adalah rekomendasi pertanyaan dengan contoh seperti ini '### Rekomendasi Pertanyaan Lanjutan:'.
`;

  const promptWithPersonality = [
    { role: 'system', content: personalityPrompt },
    ...messages,
  ];

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: promptWithPersonality,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
