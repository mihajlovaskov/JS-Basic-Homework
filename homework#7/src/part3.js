let car = new Object();
car.model = "kia";
car.color = "grey";
car.year = 2020;
car.fuel = "petrol";
car.fuelConsumptionPerKm = 0.075;
car.totalFuel = function (km){
    return (this.fuelConsumptionPerKm*km).toFixed(2);
};
console.log(car);
let km = +prompt(`What is the distance (in km) you need to pass with your ${car.model}?`)
alert(`You will need a total of ${car.totalFuel(km)}l ${car.fuel}.`);