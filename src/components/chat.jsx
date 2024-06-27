import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Markdown from 'react-markdown';

const ChatBubble = ({
  key,
  content,
  role,
  handleRecommendedQuestion,
}) => {
  // Fungsi untuk memproses konten Markdown
  const processContent = (content) => {
    const blocks = content.split(
      /(```[a-zA-Z]*\n(?:.|[\r\n])*?\n```|### Rekomendasi Pertanyaan Lanjutan:)/gm
    ); // Pisahkan konten berdasarkan blok kode dan rekomendasi pertanyaan
    let inRecommendationSection = false; // Menandai apakah sedang dalam bagian rekomendasi pertanyaan

    // Penampung untuk blok-blok yang akan ditampilkan
    const processedBlocks = [];

    // Iterasi melalui blok-blok konten
    blocks.forEach((block, index) => {
      if (block.startsWith('```')) {
        // Jika blok kode, ekstrak bahasa kode dan kode
        const [, language, code] = block.match(
          /^```([a-zA-Z]*)\n([\s\S]*?)\n```/
        );

        // Tambahkan blok kode ke dalam penampung
        processedBlocks.push(
          <div key={`code-${index}`}>
            <div className="bg-blue font-bold text-white px-4 py-2">
              {language}
            </div>
            <SyntaxHighlighter
              style={darcula}
              language={language}
              showLineNumbers={true}
              customStyle={{ margin: '0' }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        );
      } else if (block === '### Rekomendasi Pertanyaan Lanjutan:') {
        // Jika blok rekomendasi pertanyaan, tandai bahwa sedang dalam bagian rekomendasi
        inRecommendationSection = true;
      } else if (inRecommendationSection) {
        // Jika sedang dalam bagian rekomendasi pertanyaan, ubah blok menjadi tombol
        const recommendedQuestions = block
          .split('\n')
          .filter(
            (question) => question.replace(/^[\d\.\)\:\-\s]+/, '').trim() !== ''
          );

        // Tambahkan blok rekomendasi pertanyaan ke dalam penampung
        processedBlocks.push(
          <div key={`recommendations-${index}`}>
            <h3 className="text-lg font-bold mb-2">
              Rekomendasi Pertanyaan Lanjutan:
            </h3>
            <div className="flex flex-wrap gap-2">
              {recommendedQuestions.map((question, questionIndex) => (
                <button
                  key={`question-${questionIndex}`}
                  type="submit"
                  onClick={() =>
                    handleRecommendedQuestion(
                      question.replace(/^[\d\.\)\:\-\s]+/, '').trim()
                    )
                  }
                  className="flex bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-left"
                >
                  {question.replace(/^[\d\.\)\:\-\s]+/, '').trim()}
                </button>
              ))}
            </div>
          </div>
        );
      } else {
        // Selain itu, kembalikan sebagai Markdown
        processedBlocks.push(
          <Markdown key={`markdown-${index}`}>{block}</Markdown>
        );
      }
    });

    return processedBlocks.filter(Boolean); // Filter agar null blocks tidak ditampilkan
  };

  return (
    <div key={key} className="flex flex-col gap-2 w-full mb-4 py-2">
      <div className="flex">
        <span
          className={`flex py-2 px-4 border rounded-md font-bold text-sm ${
            role === 'user'
              ? 'border-blue text-blue'
              : 'border-green text-black'
          }`}
        >
          {role === 'user' ? '👤 User' : '🤖 Ai Mentor'}
        </span>
      </div>
      {processContent(content)}
    </div>
  );
};

export default ChatBubble;