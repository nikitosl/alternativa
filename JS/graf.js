
//*** ◊“≈Õ»≈
/*
$(document).ready(function () {
    $.getJSON('input.json', function (reb) {
        console.log(reb);
    });
});
*/

//*** ÒÓÁ‰‡ÌËÂ Ã¿——»¬¿
function NewReb(num1, x1, y1, num2, x2, y2, weighta) {

    var reb = {
        q1: {
            num: num1,
            x: x1,
            y: y1
        },
        q2: {
            num: num2,
            x: x2,
            y: y2
        },
        weight: weighta,
        print: false
    }
    return reb;
}
var k = 0;
var mas = [] ;
mas.push();
mas[0] = NewReb(1, 30, 180, 2, 40, 0, 91);

mas.push();
mas[1] = NewReb(4, 0, 50, 3, 70, 90, 90);
mas.push();
mas[2] = NewReb(1, 30, 180, 3, 70, 90, 50);
mas.push();
mas[3] = NewReb(2, 40, 0, 4, 0, 50, 100);
mas.push();
mas[4] = NewReb(2, 40, 0, 5, 0, 150, 20);
mas.push();
mas[5] = NewReb(8, 280, 100, 4, 0, 50, 100);
mas.push();
mas[6] = NewReb(2, 40, 0, 5, 6, 0, 0);

k = 7;
console.log(mas);
prorisovka(mas);

