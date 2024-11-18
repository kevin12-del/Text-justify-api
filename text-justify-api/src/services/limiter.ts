const usage: { [token: string]: number } = {};
const DAILY_LIMIT = 80000;

export const canUseApi = (token: string, wordCount: number): boolean => {
    const today = new Date().toISOString().split('T')[0];
    usage[today] = usage[today] || 0;

    if (usage[today] + wordCount <= DAILY_LIMIT) {
        usage[today] += wordCount;
        return true;
    }
    return false;
};

export const getRemainingWords = (token: string): number => {
    const today = new Date().toISOString().split('T')[0];
    return DAILY_LIMIT - (usage[today] || 0);
};
