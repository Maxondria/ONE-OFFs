class Vehicle {
    constructor(_wheels){
        this.numWheels = _wheels;
    }
    get wheels(){
        return this.numWheels;
    }

    set wheels(_wheels){
      this.numWheels = _wheels;
    }

    static accelerate(){
        console.log('go faster');
    }

    static decelerate(){
        console.log('go slower');
    }
}

const car = new Vehicle(4);
console.log(car.wheels);//use created obj
Vehicle.accelerate();//static