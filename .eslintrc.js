module.exports = {
    extends: 'get-off-my-lawn',
    ignorePatterns: ['dist', 'main', 'renderer/.next', 'renderer/out'],
    rules: {
        // Sigh...
        '@typescript-eslint/no-unnecessary-condition': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
    },
};
