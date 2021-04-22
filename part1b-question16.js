let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5, 
    blackCars: 40,
    rareCars: 2
};

for(var carType in statistics){
    if(carType.charAt(0) == 'r'){
        console.log(statistics[carType]);
    }else if(statistics[carType]%2 == 1){
        console.log(statistics[carType]);
    }
}