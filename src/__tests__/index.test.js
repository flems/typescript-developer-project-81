import { expect, test } from 'vitest';
import HexletCode from '../components/HexletCode.ts';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

test('form-1', () => {
  expect(HexletCode.formFor(template, {}, () => {})).toBe('<form action="#" method="post"></form>');
});

test('form-2', () => {
  expect(HexletCode.formFor(template, { url: '/users' }, () => {})).toBe('<form action="/users" method="post"></form>');
});
