import React, { useRef, useEffect } from 'react';

const AutoAdjustTextarea = ({ value = '', onChange }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    // Mengubah tinggi textarea secara dinamis berdasarkan konten yang ada
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${Math.min(
      textareaRef.current.scrollHeight,
      144
    )}px`;
  }, [value]);

  const handleChange = (event) => {
    // Menyesuaikan tinggi textarea saat nilai berubah
    onChange(event);
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${Math.min(
      textareaRef.current.scrollHeight,
      144
    )}px`;
  };

  return (
    <textarea
      ref={textareaRef}
      className="flex-grow border-darkgray rounded-lg border justify-center items-center py-2 px-4 text-xs resize-none overflow-auto"
      placeholder="Apa yang ingin anda tanyakan?"
      value={value}
      onChange={handleChange}
    />
  );
};

export default AutoAdjustTextarea;
