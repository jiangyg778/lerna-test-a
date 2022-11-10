#!/usr/bin/env node

'use strict';
import cli from '../src/cli.mjs';
import a from '@jyg/lerna-test-a'
// eslint-disable-next-line no-unused-expressions
cli().parse(process.argv.slice(2));
console.log(a())