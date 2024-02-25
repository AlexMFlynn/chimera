import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['.graphql/*/*.graphql'],
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    './.graphql/__generated__/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        'skipTypename': false,
        'withHooks': true,
        'withHOC': false,
        'withComponent': false,
        'apolloReactHooksImportFrom': '@apollo/client'
      }
    }
  }
};

export default config;
