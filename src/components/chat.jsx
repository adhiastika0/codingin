export default function ChatBubble({ key, content, role }) {
  return (
    <div key={key} className="flex flex-col gap-2 w-full mb-4 py-2">
      <div className="flex">
        <span
          className={`flex py-1 px-2 border rounded-md font-bold text-sm ${
            role === 'user'
              ? 'border-biru text-biru'
              : 'border-green-500 text-hitam'
          }`}
        >
          {' '}
          {role === 'user' ? '👤 User' : '🤖 Ai Mentor'}
        </span>
      </div>
      <p className="text-sm font-normal whitespace-normal">{content}</p>
    </div>
  );
}
