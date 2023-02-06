const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Help with Inference When Extracting Values
const car = carMakers[1];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with functions like 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible Types
const importantDates: (string | Date)[] = [new Date()];
importantDates.push('2030-10-11');
importantDates.push(new Date());
