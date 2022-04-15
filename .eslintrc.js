module.exports = {
    extends: 'get-off-my-lawn',
    ignorePatterns: ['dist', 'main', 'renderer/.next', 'renderer/out'],
    rules: {
        // All will be fixed in the next version of GOML.
        '@typescript-eslint/no-misused-promises': 0,
        '@typescript-eslint/unbound-method': 0,
        'jsx-a11y/anchor-is-valid': 0,
    },
};
