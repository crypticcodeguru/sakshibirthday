class TypeWriter {
  static get _quotes() {
    return [
      `Happy Birthday . |Sakshi 🎂🥳`,
      `May all your wish may be full filled this year. whishing with all my heart`,
      `From achieving all your dreams |Because you were destined to do so`,
      `From watching jab we met on big screen 😂😂|`,
      `From finding your aditya SINHA 😂😂😂|`,
      `ahhh....i want to say more  😢😢 |`,
      `But its already 11:24 now and your gift is still not complete|`,
      `Sorry mate agli baar isse bhi achaa banaunga😂😂😂|`,
      `But till then a very very happy birthday|SINHA JI 🙂🙂🙂`,
      `from your friend aman kumar  |`,
      `Aur haan woh adtya sinha walla wish pakka pura ho jayega|😂😂😂`,
      `Tere liye ek aur gift hai mere passssssssss|😂😂`,
      `teen second hai tere passssss guess karne ke liye |😂`,
      `1 |`,
      `2 |`,
      `3 |`,
      `Yeh hai Descendants of the Sun of the season ka link .......woh bhi free free free........ |😂😂😂😂😂😂😂😂😂😂😂😂`,
      `https://bit.ly/3YykFj2 |`,
    ];
  }

  static _write(quoteIndex, quoteCharacterIndex, isClearing, isAnswer) {
    let question = document.querySelector('.question');
    let answer = document.querySelector('.answer');
    let quote = TypeWriter._quotes[quoteIndex];

    if (!isClearing) {
      if (quoteCharacterIndex < quote.length) {
        if (quote.charAt(quoteCharacterIndex) === '|') {
          isAnswer = true;
          quoteCharacterIndex++;
          setTimeout(() => TypeWriter._write(quoteIndex, quoteCharacterIndex, isClearing, isAnswer), 1500);
        } else {
          if (isAnswer) {
            question.classList.remove('caret');
            answer.classList.add('caret');
            answer.innerHTML = answer.textContent + quote.charAt(quoteCharacterIndex);
          } else {
            answer.classList.remove('caret');
            question.classList.add('caret');
            question.innerHTML = question.textContent + quote.charAt(quoteCharacterIndex);
          }
          quoteCharacterIndex++;
          setTimeout(() => TypeWriter._write(quoteIndex, quoteCharacterIndex, isClearing, isAnswer), 75);
        }
      } else if (quoteCharacterIndex === quote.length) {
        isClearing = true;
        setTimeout(() => TypeWriter._write(quoteIndex, quoteCharacterIndex, isClearing, isAnswer), 1500);
      }
    } else {
      if (question.textContent.length > 0 || answer.textContent.length > 0) {
        if (answer.textContent.length > 0) {
          answer.innerHTML = answer.textContent.substring(0, answer.textContent.length - 1);
        } else if (question.textContent.length > 0) {
          answer.classList.remove('caret');
          question.classList.add('caret');
          question.innerHTML = question.textContent.substring(0, question.textContent.length - 1);
        }
        setTimeout(() => TypeWriter._write(quoteIndex, quoteCharacterIndex, isClearing, isAnswer), 25);
      } else {
        quoteIndex = (quoteIndex + 1) % TypeWriter._quotes.length;
        quoteCharacterIndex = 0;
        isClearing = false;
        isAnswer = false;
        setTimeout(() => TypeWriter._write(quoteIndex, quoteCharacterIndex, isClearing, isAnswer), 1500);
      }
    }
  }

  static initialize() {
    setTimeout(() => TypeWriter._write(0, 0, false, false), 3000);
  }
}

TypeWriter.initialize();
