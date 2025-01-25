class TextAnimator {
  private texts: string[];
  private speed: number;
  private currentWord: string[];
  private index: number;
  private isWriting: boolean;
  private animationTimer: NodeJS.Timeout | null;

  constructor(texts: string[], speed: number = 150) {
    this.texts = texts;
    this.speed = speed;
    this.currentWord = [''];
    this.index = 0;
    this.isWriting = true;
    this.animationTimer = null;
  }

  private getRandomWord(): string {
    return this.texts[Math.floor(Math.random() * this.texts.length)];
  }

  public animate(): { currentWord: string[] } {
    const word = this.getRandomWord();
    let currentText = '';
    let charIndex = 0;

    const step = () => {
      if (this.isWriting) {
        if (charIndex < word.length) {
          currentText += word[charIndex];
          charIndex++;
        } else {
          this.isWriting = false;
        }
      } else {
        if (currentText.length > 0) {
          currentText = currentText.slice(0, -1);
        } else {
          this.isWriting = true;
          this.index++;
          if (this.index <= 5) {
            currentText = '';
            charIndex = 0;
            this.currentWord.push(word);
          } else {
            if (this.animationTimer) {
              clearTimeout(this.animationTimer);
            }
            return;
          }
        }
      }

      this.currentWord[this.currentWord.length - 1] = currentText;
      this.animationTimer = setTimeout(step, this.speed);
    };

    step();
    return { currentWord: this.currentWord };
  }

  public stop(): void {
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
    }
  }
}

export default function useRandomText(texts: string[], speed: number = 150): { currentWord: string[] } {
  const animator = new TextAnimator(texts, speed);
  return animator.animate();
}