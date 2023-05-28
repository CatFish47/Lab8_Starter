// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
const { isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor } = functions;

// TODO - Part 2

// Tests isPhoneNumber
test('Tests that (666) 666-6666 is a valid phone number', () => {
    expect(isPhoneNumber('(666) 666-6666')).toBe(true);
});

test('Tests that 123-456-7890 is a valid phone number', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('Tests that +1 1234567890 is not a valid phone number', () => {
    expect(isPhoneNumber('+1 1234567890')).toBe(false);
});

test('Tests that 1234567890 is not a valid phone number', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
});

// Tests isEmail
test('Tests that gxcheng@ucsd.edu is a valid email', () => {
    expect(isEmail('gxcheng@ucsd.edu')).toBe(true);
});

test('Tests that a@b.co is a valid email', () => {
    expect(isEmail('a@b.co')).toBe(true);
});

test('Tests that @@.. is not a valid email', () => {
    expect(isEmail('@@..')).toBe(false);
});

test('Tests that wee@geee.commm is not a valid email', () => {
    expect(isEmail('wee@geee.commm')).toBe(false);
});

// Tests isStrongPassword
test('Tests that a39123da is a valid password', () => {
    expect(isStrongPassword('a39123da')).toBe(true);
});

test('Tests that a______b23 is a valid password', () => {
    expect(isStrongPassword('a______b23')).toBe(true);
});

test('Tests that a@fad2tr/] is not a valid password', () => {
    expect(isStrongPassword('a@fad2tr/]')).toBe(false);
});

test('Tests that 3aaeda2 is not a valid password', () => {
    expect(isStrongPassword('3aaeda2')).toBe(false);
});

// Tests isDate
test('Tests that 4/7/2003 is a valid date', () => {
    expect(isDate('4/7/2003')).toBe(true);
});

test('Tests that 12/31/2023 is a valid date', () => {
    expect(isDate('12/31/2023')).toBe(true);
});

test('Tests that 1/2/3 is not a valid date', () => {
    expect(isDate('1/2/3')).toBe(false);
});

test('Tests that 04-07-2003 is not a valid date', () => {
    expect(isDate('04-07-2003')).toBe(false);
});

// Tests isHexColor
test('Tests that #FFF is a valid hex color', () => {
    expect(isHexColor('#FFF')).toBe(true);
});

test('Tests that aF2B2e is a valid hex color', () => {
    expect(isHexColor('aF2B2e')).toBe(true);
});

test('Tests that #abcd is not a valid hex color', () => {
    expect(isHexColor('#abcd')).toBe(false);
});

test('Tests that efg is not a valid hex color', () => {
    expect(isHexColor('efg')).toBe(false);
});