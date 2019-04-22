/* The same way we used Object Constructors to create a blueprint for base objects
we can use classes to achieve this. */
console.log('==Classes==');
/* ES2015 CLASS */
class Cars {
    constructor(make, model, doors, price, released, sold) {
        this.make = make;
        this.model = model;
        this.doors = doors;
        this.price = price;
        this.released = released;
        this.sold = sold;
        this.updateSales = function () {
            return ++this.sold;
        };
        this.showSoldUnits = function () {
            return `Total: ${this.sold} units sold for the ${this.make} ${this.model}.`;
        }
    }
}

const b330 = new Cars('BMW', '330', 4, 35000, true, 500);
b330.updateSales();
b330.updateSales();
console.log(b330);
console.log(b330.showSoldUnits());

/* Adding another car */
console.log('\nLet\'s add another car\n');
const bm3 = new Cars('BMW', 'M3', 3, 60000, true, 80);
console.log(bm3);

/* Take the cars and put them into an array. */
const allCars = [];
allCars.push(b330, bm3);
console.log('\n==An Array with all of them==\n');
console.log(allCars);
console.log(allCars[1].showSoldUnits());