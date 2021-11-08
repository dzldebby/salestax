const {main} = require('./assignment');

describe('main', () => {
    it('should return first output answer', ()=> {
        const result = main('2 book at 12.49 1 music CD at 14.99 1 chocolate bar at 0.85');
        expect(result).toBe('2 book: 24.98\n1 music CD: 16.49\n1 chocolate bar: 0.85\nSales Tax: 1.50\nTotal: 42.32');
    })
})

describe('main', () => {
    it('should return second output answer', ()=> {
        const result = main('1 imported box of chocolates at 10.00 1 imported bottle of perfume at 47.50');
        expect(result).toBe('1 imported box of chocolates: 10.50\n1 imported bottle of perfume: 54.62\nSales Tax: 7.62\nTotal: 65.12');
    })
})

describe('main', () => {
    it('should return third output answer', ()=> {
        const result = main('1 imported bottle of perfume at 27.99 1 bottle of perfume at 18.99 1 packet of headache pills at 9.75 3 box of imported chocolates at 11.25');
        expect(result).toBe('1 imported bottle of perfume: 32.19\n1 bottle of perfume: 20.89\n1 packet of headache pills: 9.75\n3 box of imported chocolates: 35.44\nSales Tax: 7.79\nTotal: 98.27');
    })
})



