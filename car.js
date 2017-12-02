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
    let img = car1.userGear + '.jpg';
    let target = document.getElementById("shift");
    target.innerHTML = `<img src="${img}" alt="">`;
//    let target = document.getElementById("now-gear");
//    target.innerHTML = `${car1.userGear}`;
}
function accel() {
    car1.accel();
//    let target = document.getElementById('speed');
//    target.innerHTML = `${car1.userSpeed}`;
    insert_meter(car1.userSpeed);
    if (car1.userGear === 'D')
        playBackSpeed();
}
function brake() {
    car1.brake();
//    let target = document.getElementById('speed');
//    target.innerHTML = `${car1.userSpeed}`;
    insert_meter(car1.userSpeed);
    playBackSpeed();
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
}
function playBackSpeed() {
    let media = document.getElementById("drive-video");
    media.loop = true;
    if (car1.userGear === 'D')
        media.playbackRate = car1.userSpeed * 0.1;
    else if (car1.userGear === 'R')
        media.playbackRate = car1.userSpeed * -0.1;
    else if (car1.userSpeed === 0)
        media.playbackRate = car1.userSpeed;
    
}

/* 処理の開始 */

const car1 = new Car("Tesla", "Model S");
// const car2 = new Car("Mazda", "3i");

/* 動画を読み込む。 */
playBackSpeed();

/* スワイプ処理の追加 */
/* let swipe_area = document.getElementById("shift");
 * swipe_area.addEventListener("load", function(event) {
 *     let touchStartX;
 *     let touchStartY;
 *     let touchMoveX;
 *     let touchMoveY;
 *     let target = document.getElementById("now-gear");
 * 
 *     // 開始
 *     swipe_area.addEventListener("touchstart", function(event) {
 *         event.preventDafault();
 *         // 座標の取得
 *         touchStartX = event.touches[0].pageX;
 *         touchStartY = event.touches[0].pageY;
 *     },false);
 * 
 *     // 移動時
 *     swipe_area.addEventListener("touchmove", function(event) {
 *         event.preventDefault();
 *         touchMoveX = event.changedTouches[0].pageX;
 *         touchMoveY = event.changedTouches[0].pageY;
 *     }, false);
 * 
 *     // 終了時
 *     swipe_area.addEventListener("touchend", function(event) {
 *         // 移動量の判定
 *         if (touchStartX > touchMoveX) {
 *             if (touchStartX > (touchMoveX + 50)) {
 *                 console.log('右から左に移動');
 *                 target.innerHTML = '右->左';
 *             }
 *         } else if (touchStartX < touchMoveX) {
 *             if ((touchStartX + 50) < touchMoveX) {
 *                 console.log('左から右に移動');
 *                 target.innerHTML = '左->右';
 *             }
 *         } else if (touchStartY > touchMoveY) {
 *             if (touchStartY > (touchMoveY + 50)) {
 *                 console.log('上から下に移動');
 *                 target.innerHTML = '上->下';
 *             }
 *         } else if (touchStartY < touchMoveY) {
 *             if ((touchStartY + 50) < touchMoveY) {
 *                 console.log('下から上に移動');
 *                 target.innerHTML = '下->上';
 *             }
 *         }
 *     }, false);
 * }, false);*/
    
                
        
        
       


/* 画像をあらかじめ読み込んでおこうとしたんだが、
   効いてないみたい */
(function (){
    let target1 = document.getElementById("meter");
    for (let i = 140; i >= 0; i -= 20) {
        target1.innerHTML = `<img src="${i}.jpg" alt="">`;
    }
    let target2 = document.getElementById("shift");
    target2.innerHTML = '<img src="D.jpg" alt="">';
    target2.innerHTML = '<img src="N.jpg" alt="">';
    target2.innerHTML = '<img src="R.jpg" alt="">';
    target2.innerHTML = '<img src="P.jpg" alt="">';
})();

