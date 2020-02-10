import * as eccryptoJS from '../src';
import {
  TEST_MESSAGE_STR,
  TEST_SHA3_HASH,
  TEST_KECCAK256_HASH,
  compare,
} from './common';

describe('SHA3', () => {
  let expectedLength: number;
  let expectedOutput: Buffer;

  beforeEach(async () => {
    expectedLength = 32;
    expectedOutput = Buffer.from(TEST_SHA3_HASH, 'hex');
  });
  it('should hash buffer sucessfully', async () => {
    const input = Buffer.from(TEST_MESSAGE_STR);
    const output = await eccryptoJS.sha3(input);
    expect(compare(output, expectedOutput)).toBeTruthy();
  });

  it('should hash hex string sucessfully', async () => {
    const input = Buffer.from(TEST_MESSAGE_STR).toString();
    const output = await eccryptoJS.sha3(input);
    expect(compare(output, expectedOutput)).toBeTruthy();
  });

  it('should hash utf8 string sucessfully', async () => {
    const input = TEST_MESSAGE_STR;
    const output = await eccryptoJS.sha3(input);
    expect(compare(output, expectedOutput)).toBeTruthy();
  });

  it('should output with expected length', async () => {
    const input = Buffer.from(TEST_MESSAGE_STR);
    const output = await eccryptoJS.sha3(input);
    expect(output.length === expectedLength).toBeTruthy();
  });
});

describe('KECCAK256', () => {
  let expectedLength: number;
  let expectedOutput: Buffer;

  beforeEach(async () => {
    expectedLength = 32;
    expectedOutput = Buffer.from(TEST_KECCAK256_HASH, 'hex');
  });

  it('should hash buffer sucessfully', async () => {
    const input = Buffer.from(TEST_MESSAGE_STR);
    const output = await eccryptoJS.keccak256(input);
    expect(compare(output, expectedOutput)).toBeTruthy();
  });

  it('should hash hex string sucessfully', async () => {
    const input = Buffer.from(TEST_MESSAGE_STR).toString();
    const output = await eccryptoJS.keccak256(input);
    expect(compare(output, expectedOutput)).toBeTruthy();
  });

  it('should hash utf8 string sucessfully', async () => {
    const input = TEST_MESSAGE_STR;
    const output = await eccryptoJS.keccak256(input);
    expect(compare(output, expectedOutput)).toBeTruthy();
  });

  it('should output with expected length', async () => {
    const input = Buffer.from(TEST_MESSAGE_STR);
    const output = await eccryptoJS.keccak256(input);
    expect(output.length === expectedLength).toBeTruthy();
  });
});
