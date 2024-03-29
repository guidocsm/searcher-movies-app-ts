module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    quotes: ['error', 'single'], // Asegura que las comillas usadas sean simples
    semi: ['error', 'never'], // Prohíbe el uso de punto y coma al final de las sentencias
    indent: ['error', 2, { SwitchCase: 1 }], // Establece la indentación a 2 espacios y añade indentación extra para 'case' en sentencias 'switch'
    'jsx-quotes': ['error', 'prefer-double'], // Asegura que las comillas en JSX sean dobles
    'react/react-in-jsx-scope': 'off', // Desactiva la regla que requiere React en el ámbito JSX
    'no-unused-vars': ['warn'], // Advierte sobre variables declaradas pero nunca utilizadas
    'react/prop-types': 'off', // Desactiva la verificación de prop-types en componentes React
    'prefer-const': 'error', // Marca las variables declaradas con 'let' que nunca se reasignan sugiriendo 'const'
    'curly': 'error', // Exige que sentencias como 'if', 'else', 'for', 'while', y 'do' estén rodeadas por llaves
    'no-var': 'error', // Prohíbe el uso de 'var' para declarar variables
		'import/order': ['error', { //regla para las importaciones 
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'], // Define los grupos de importación
      'newlines-between': 'always', // Requiere líneas nuevas entre grupos de importación
      'alphabetize': { // Establece opciones de orden alfabético
        order: 'asc', // Ordena en sentido ascendente
        caseInsensitive: true, // Ordena sin tener en cuenta mayúsculas/minúsculas
      },
    }],
  },
}
