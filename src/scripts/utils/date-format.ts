
// convert ISO 8601 date-time string to readable format (e.g., "October 15, 2025")
export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}