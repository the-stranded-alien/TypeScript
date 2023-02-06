const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// A Tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];
console.log(pepsi);

// Type Alias
type Drink = [string, boolean, number];
const cocacola: Drink = ['black', true, 45];
const sprite: Drink = ['clear', true, 35];
const tea: Drink = ['brown', false, 25];


const carSpecs: [number, number] = [400, 3345]; // Not clear

const carStats = {
  horsepower: 400,
  weight: 3354,
}; // Clear what's going on !