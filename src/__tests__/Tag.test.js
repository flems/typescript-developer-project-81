import { expect, test } from 'vitest';
import Tag from '../components/Tag.ts';
import data from './__fixtures__/tag.json';

const dataArr = Object.entries(data);

dataArr.forEach(([key, value]) => {
  test(key, () => {
    expect(new Tag(value.tag, value.options, value.content).toString()).toBe(value.result);
  })
});