import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: ['esnext'],
  outfile: 'out.js',
})