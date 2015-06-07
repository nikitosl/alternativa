
//*** ЧТЕНИЕ
/*
$(document).ready(function () {
    $.getJSON('input.json', function (reb) {
        console.log(reb);
    });
});
*/

//************ NEW ARRAY *******************

var count = 0;
function NewReb(num1, x1, y1, num2, x2, y2, weighta) {

    var reb = {
        q1: {
            num: num1,
            x: x1,
            y: y1,
            way: 2
        },
        q2: {
            num: num2,
            x: x2,
            y: y2,
            way: 2
        },
        weight: weighta,
        vis:true
    }
    return reb;
}



var k = 0;
var mas = [] ;
var i;
mas.push();
mas[0] = NewReb(1, 30, 180, 2, 40, 0, 91,0);

mas.push();
mas[1] = NewReb(4, 0, 50, 3, 70, 90, 90);
mas.push();
mas[2] = NewReb(1, 30, 180, 3, 70, 90, 50);
mas.push();
mas[3] = NewReb(2, 40, 0, 4, 0, 50, 100);
mas.push();
mas[4] = NewReb(2, 40, 0, 5, 0, 150, 20);
mas.push();
mas[5] = NewReb(6, 280, 100, 4, 0, 50, 120);
mas.push();
mas[6] = NewReb(6, 280, 100, 5, 0, 150, 55);

k = 7;
//****************************************
var matrix = [];
var steck = [];
var g = 0;
for (i = 0; i < k - 1; i++)
    steck[i] = NewReb(0, 0, 0, 0, 0, 0, 0);
var tabl = [];
//var tabl1 = [];
var i, j;
var min = { x: 0, y: 0 };
var empty = [];
var stolb = [];
var flag = 1;
//********** NEW Matrix *****************
for (i = 0; i < k; i++) {
    var tabl1 = [];
    for (j = 0; j < k; j++)
        tabl1[j] = 0;
    tabl[i] = tabl1;
}
for (i = 0; i < k; i++)
    empty[i] = 0;
empty[0] = 1;

for (i = 0; i < k; i++)
    stolb[i] = 0;

for (i = 0; i < k; i++) {
    tabl[mas[i].q1.num][mas[i].q2.num] = mas[i].weight;
    tabl[mas[i].q2.num][mas[i].q1.num] = mas[i].weight;
}
//for (i = 0; i < size; i++) console.log(tabl[i])


//*******************************************

graf_painting(mas, k, '#066');
matrix_painting(tabl, k, '#066');
//prim(mas, k);
console.log('steck:',steck);
console.log('g:',g);



function next() {

    var color,j;
 //   if (count<g || stolb[0]==0) {
        //while (steck[count].vis==false) count++;  // Не проверено
   
    prim(mas, k);
        if( flag)
        {
            jc.clear('can');
            mas[steck[count]].vis = false;
            graf_painting(mas, k, '#066');
            //graf_painting(steck, g, '#066');
            matrix_painting(tabl, k);
            count++;
        }
        else alert("Building is finished!");  
        
}
/*
function back() {
    if (count > 0)
    {
        count--;
        steck[count].vis = true;
        steck[count].q1.way = 2;
        steck[count].q2.way = 2;
        jc.clear('can');
        graf_painting(mas, k, '#066');
        graf_painting(steck, g, '#066');
       
    }  
}*/
function restart()
{

        for (var i = 0; i < g; i++)
        {
            steck[i].vis = true;
            steck[i].q1.way = 2;
            steck[i].q2.way = 2;
        }
        jc.clear('can');
        count = 0;
        graf_painting(mas, k, '#066')
    
}

function prim(mas, size)
{
    for (i = 0; i < size; i++) console.log(tabl[i]);
    min = min_from_table(tabl, size, stolb);
    if (flag==0) return null;
        console.log('stolb:',stolb);
        stolb[min.x] = 1;
        stolb[min.y]=1;
        stolb[0] = 1;
        tabl[0][min.x] = 1;
        tabl[0][min.y] = 1;
        console.log(min.x, min.y, tabl[min.x][min.y]);
        
        tabl[min.x] = empty;
        tabl[min.y] = empty;

        for (i = 0; i < size; i++)
            if ((mas[i].q1.num== min.x || mas[i].q1.num== min.y) && (mas[i].q2.num == min.x || mas[i].q2.num == min.y))
            {
                steck[g] = i;
                console.log('4len');
                g++;
            }

       // matrix[g] = copy(tabl);
       // console.log('g:',g);
        
 /*       jc.start('tab');
        jc.clear('tab');
        x = 0; y = 0;
        
*/

}

function min_from_table(mas, k, stolb)
{
    var mx = 0, my = 0, i, j;
    flag=0;
    for (i = 1; i < k; i++)
        for (j = 1; j < k; j++)
            if (mas[i][j] != 0 && (stolb[i] ==1 || stolb[j]==1 || stolb[0]==0) && flag==0 ) {
                mx = i;
                my = j;
                flag = 1;
                console.log('1) mx:', mx, 'my:', my);
            }
    for(i=1;i<k;i++)
        for(j=1;j<k;j++)
            if ((mas[i][j] < mas[mx][my]) && (mas[i][j]!=0) && (stolb[i] ==1 || stolb[j]==1 || stolb[0]==0))
            {
                console.log('2) stole:', stolb[i],  stolb[j], stolb[0]);
                mx = i; my = j;
                console.log('2) mx:', mx, 'my:', my);
            }
    return {x: mx, y: my};
}

function copy(table)
{
    var m = table;
    return m;
}