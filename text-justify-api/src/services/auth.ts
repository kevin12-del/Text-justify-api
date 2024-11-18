import crypto from 'crypto';

const tokens: { [email: string]: string } = {};

export const generateToken = (email: string): string => {
    if (!tokens[email]) {
        tokens[email] = crypto.randomBytes(16).toString('hex');
    }
    return tokens[email];
};

export const verifyToken = (token: string): boolean => {
    return Object.values(tokens).includes(token);
};
