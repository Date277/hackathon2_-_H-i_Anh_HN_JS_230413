function editWord(sentence) {
    let edit = sentence.trim();

    const words = edit.split(' ');

    const normalizedWords = words.map((word) => {
        const firstChar = word.charAt(0).toUpperCase();
        const restChars = word.slice(1).toLowerCase();
        return firstChar + restChars;
    });

    const normalizedSentence = normalizedWords.join(' ');

    return normalizedSentence;
}

console.log(editWord('    hEllO wOrLd  '))
console.log(editWord('    rEKKei aCaDemy  '))
console.log(editWord('    i aM thE hERO  '))

