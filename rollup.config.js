const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');

export default {
    input: 'src/index.js',
    output: {
      file: 'bin/structure-generator.js',
      format: 'cjs'
    },
    plugins: [
      nodeResolve({
        jsnext: true,
        main: true
      }),
  
      commonjs()
    ]
  };