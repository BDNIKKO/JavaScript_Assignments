const { fruitInventory, bananaInventory, uniqueColors, hasBlue } = require('../mapsAndSets');

describe('Maps and Sets', () => {
    test('fruitInventory is a Map', () => {
        expect(fruitInventory instanceof Map).toBe(true);
    });

    test('fruitInventory contains correct initial values', () => {
        expect(fruitInventory.get('apple')).toBe(15);
        expect(fruitInventory.get('banana')).toBe(20);
        expect(fruitInventory.get('orange')).toBe(30);
    });

    test('bananaInventory is correctly retrieved', () => {
        expect(bananaInventory).toBe(20);
    });

    test('uniqueColors is a Set', () => {
        expect(uniqueColors instanceof Set).toBe(true);
    });

    test('uniqueColors contains correct initial values and added value', () => {
        expect(uniqueColors.has('red')).toBe(true);
        expect(uniqueColors.has('blue')).toBe(true);
        expect(uniqueColors.has('green')).toBe(true);
        expect(uniqueColors.has('yellow')).toBe(true);
    });

    test('hasBlue is correctly set', () => {
        expect(hasBlue).toBe(true);
    });
});
