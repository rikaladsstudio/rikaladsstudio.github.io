export function getReadingTimeInMinutes(text: string): number | undefined {
    if (!text || !text.length) return undefined;
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
}

export function getReadingTimeInText(text: string, suffix: string = 'min'): string {
    const minutes = getReadingTimeInMinutes(text);
    return `${minutes} ${suffix}`;
}