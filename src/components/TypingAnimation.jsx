import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ texts = [], speed = 500, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);       // current char index in text
  const [textIndex, setTextIndex] = useState(0); // current text index in texts array

  useEffect(() => {
    let timer;
    const currentText = texts[textIndex];

    if (!isDeleting && index < currentText.length) {
      // Typing
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, index - 1));
        setIndex(index - 1);
      }, speed / 2);
    } else if (index === currentText.length && !isDeleting) {
      // Pause at full text before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (index === 0 && isDeleting) {
      // Move to next text after deleting
      timer = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, pause / 2);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, textIndex, texts, speed, pause]);

  return (
    <h1 className='text-2xl text-accent font-bold text-center'>
      {displayedText}
      <span className="cursor">|</span>
    </h1>
  );
};

export default TypingAnimation;
