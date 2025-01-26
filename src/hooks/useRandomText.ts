interface WordState {
  currentWord: string;
  index: number;
}

export default function useRandomText(texts: string[]): string {
  if (!texts.length) return "";

  let state: WordState = {
    currentWord: texts[0],
    index: 0,
  };

  const rotateWord = () => {
    state.index = (state.index + 1) % texts.length;
    state.currentWord = texts[state.index];
    setTimeout(rotateWord, 500);
  };

  setTimeout(rotateWord, 500);
  return state.currentWord;
}