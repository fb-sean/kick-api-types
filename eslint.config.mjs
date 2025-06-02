import antfu from '@antfu/eslint-config';

export default antfu({
    type: 'lib',

    stylistic: {
        indent: 4,
        semi: true,
    },

    rules: {
        'style/object-curly-spacing': ['error', 'never'],
    },
});
