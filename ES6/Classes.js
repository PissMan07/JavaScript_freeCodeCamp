//Class
class Family { //Way to create objects 
    constructor(name, hobby){ //how you create a new property
        this.name = name; //this.name will get the n
        this.hobby = hobby
    }
    action(){
        console.log(this.name + ' IS VERY COOL! '+Nathan.hobby)
    }
}

const Nathan = new Family('Nathan', 'Gaming')
Nathan.action()

//Object veriosn will look something like this
const FAMILY = {
    NATHAN: {NAME:'NATHAN',HOBBY:'GAMING'}
}

//Setters and Getters
class Thermostat{
    constructor(t){
      this.t = t;
    }
    get temperature(){//when class.Temperature is referenced do this, 
      return 5/9 * (this.t - 32) //convert to celcius
    }
    set temperature(newT){ //when class.Temperature value is changed do this
      this.t = newT* 9.0 / 5 + 32 //convert to celcius
    }
  }
  
  const thermos = new Thermostat(76); //makes new Object, in ferinheit
  let temp = thermos.temperature; // gets temperature in celcius; It will use get because you are referencing it
  thermos.temperature = 26; //sets new temperature; it will use set because you are changing the value
  temp = thermos.temperature; // 26 to ferinheit