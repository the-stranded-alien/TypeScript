const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

console.log(add(4, 6));
console.log(subtract(10, 6));

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

console.log(multiply(3, 4));
console.log(divide(6, 3));

const logger = (message: string): void => {
  console.log(message);
  // return undefined;
}

const throwError = (message: string): never => {
  throw new Error(message);
}

const throwErrorCorrect = (message: string): string => {
  if(!message) {
    throw new Error(message);
  }
  return "Received."
};

const throwErrorVoid = (message: string): void => {
  if(!message) {
    throw new Error(message);
  }
};

const todayForecast = {
  date: new Date(),
  weather: 'sunny',
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

logWeather(todayForecast);


const logWeatherDestruct = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
}

logWeatherDestruct(todayForecast);





