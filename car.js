// p168.js
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'R', 'N', 'D'];
        this._userGear = this._userGears[0];
        this._speed = 0;
   }

    get userGear() { return this._userGear; }
    set userGear(value) {
        if (this._userGears.indexOf(value) < 0)
            throw new Error(`ギア指定が正しくない: ${value}`);
        else if (this._userGears.indexOf(value) < 2 &&
                 this._speed > 0)
            throw new Error(`走行中にギヤチェンジはできない: ${value}`);
        this._userGear = value;
    }
    get userSpeed() { return this._speed; }
    accel() {
        this._speed++;
        if (this._speed > 7)
            this._speed = 7;
        // return this._speed;
    }
    brake() {
        this._speed--;
        if (this._speed < 0)
            this._speed = 0;
        // return this._speed;
    }
    
    
    
    shift(gear) {
        try {
            this.userGear = gear;
        } catch (e) {
            let target = document.getElementById("err-mes");
            target.innerHTML = `${e.message}`;
            startTimer();
        //    console.log(e.message);
        }
    }
} /* class Car */

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
/* console.log(car1);
 * console.log(car2);
 * 
 * car1.shift('D');
 * car2.shift('R');
 * 
 * console.log(car1.userGear);
 * console.log(car2.userGear);
 * 
 * try {
 *     car1.userGear = 'N';
 *     console.log(car1.userGear);
 *     car1.userGear = "X";
 * } catch (e) {
 *     console.log(e.message, e.name);
 * }*/
function startTimer() {
    let timerId = setTimeout(function() {
        let target = document.getElementById("err-mes");
        target.innerHTML = "";
    }, 3000);
}
function shift_p() {
    car1.shift('P');
    pr_gear();
}
function shift_r() {
    car1.shift('R');
    pr_gear();
}
function shift_n() {
    car1.shift('N');
    pr_gear();
}
function shift_d() {
    car1.shift('D');
    pr_gear();
}
function pr_gear(){
    let target = document.getElementById("now-gear");
    target.innerHTML = `${car1.userGear}`;
}
function accel() {
    car1.accel();
    let target = document.getElementById('speed');
    target.innerHTML = `${car1.userSpeed}`;
    insert_meter(car1.userSpeed);
}
function brake() {
    car1.brake();
    let target = document.getElementById('speed');
    target.innerHTML = `${car1.userSpeed}`;
    insert_meter(car1.userSpeed);
}
function insert_meter(speed) {
    let now_speed = speed * 20;
    let img = `${now_speed}.jpg`;
    let target = document.getElementById('meter');
    target.innerHTML = `<img src="${img}" alt="">`;
//    target.innerHTML = '<img src="`${img}`" alt="">';
}
function status() {
    let target1 = document.getElementById("car-make");
    target1.innerHTML = "メーカー: " + `${car1.make}`;
    let target2 = document.getElementById("car-model");
    target2.innerHTML = "車種: " + `${car1.model}`;
    let target3 = document.getElementById("car-gear");
    target3.innerHTML = "ギヤ: " + `${car1.userGear}`;
}
