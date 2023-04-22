/* eslint-disable */

import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import copy from "rollup-plugin-copy";

const commonPlugins = [
	babel({
		exclude: 'node_modules/**'
	}),
	];

	const external = ['react', 'styled-components'];

	export default [
	{
		// browser-friendly UMD build
		input: 'src/main.js',
		external: external,
		output: {
			file: pkg.browser,
			format: 'umd',
			name: 'FloatingLabelTextarea',
			globals: {
				react: 'React',
				'styled-components': 'styled',
			},
		},
		plugins: [
			...commonPlugins,
			resolve(), // so Rollup can find `ms`
			commonjs(), // so Rollup can convert `ms` to an ES module
			copy({
				targets: [
					{src: "src/main.d.ts", dest: "dist/types"}
				]
			})
		],
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// the `targets` option which can specify `file` and `format`)
	{
		input: 'src/main.js',
		external: external,
		plugins: [
			...commonPlugins,
			copy({
				targets: [
					{src: "src/index.d.ts", dest: "dist/types"}
				]
			})
		],
		output: [
			{
				file: pkg.main,
				format: 'cjs',
			},
			{
				file: pkg.module,
				format: 'es',
			},
		],
	},
];
