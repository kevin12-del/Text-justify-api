export const justifyText = (text: string): string => {
    const words = text.split(/\s+/);
    const maxLineLength = 80;
    let lines: string[] = [];
    let currentLine: string[] = [];

    words.forEach(word => {
        const lineLength = currentLine.join(' ').length;
        if (lineLength + word.length + 1 <= maxLineLength) {
            currentLine.push(word);
        } else {
            lines.push(justifyLine(currentLine, maxLineLength));
            currentLine = [word];
        }
    });

    if (currentLine.length) {
        lines.push(currentLine.join(' '));
    }

    return lines.join('\n');
};

const justifyLine = (words: string[], maxLength: number): string => {
    if (words.length === 1) return words[0];
    const spaces = maxLength - words.join('').length;
    const gaps = words.length - 1;
    const spacesPerGap = Math.floor(spaces / gaps);
    const extraSpaces = spaces % gaps;

    return words.reduce((line, word, index) => {
        if (index === 0) return word;
        const additionalSpace = index <= extraSpaces ? 1 : 0;
        return line + ' '.repeat(spacesPerGap + additionalSpace) + word;
    }, '');
};
