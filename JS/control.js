// JavaScript source code
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
        vis: true
    }
    return reb;
}



var k = 0;
var mas = [];
var i;
var r;
var p = 0, ii;

var nodes = [];
nodes[1] = { x: 300, y: 180};
nodes[2] = { x: 40, y: 0 };
nodes[3] = { x: 70, y: 220 };
nodes[4] = { x: 0, y: 50 };
nodes[5] = { x: 100, y: 150 };
nodes[6] = { x: 280, y: 50 };
size = 7;
var tabl = [];

for (i = 0; i < size; i++) {
    var tabl1 = [];
    for (j = 0; j < size; j++)
        tabl1[j] = 0;
    tabl[i] = tabl1;
}
for (i = 1; i <= 6; i++)
    for (j = 1; j < i ; j++)
    {
        r = Random_Generate(200);
        if ((i == 6 && j == 3) || (i==4 && j==2))
            tabl[i][j] = 0;
        else if (r > 0)
            //if (j!=3 && i!=6)
        {
            tabl[i][j] = r;
        }
        
    }
for (i = 1; i <= 6; i++)
    for (j = 1; j < i ; j++)
        if (tabl[i][j] != 0)
        {
            mas.push();
            mas[k] = NewReb(i, nodes[i].x, nodes[i].y, j, nodes[j].x, nodes[j].y, tabl[i][j]);
            k++;
        }

function Random_Generate(n)
{
    return Math.floor((Math.random() * Math.random() ) * n);
}
//****************************************
var matrix = [];
var steck = [];
var user_steck = [];
var user_g = 0;
var g = 0;
for (i = 0; i < k; i++)
    steck[i] = 0;
for (i = 0; i < k; i++)
    user_steck[i] = 0;

var v;

//var tabl1 = [];
var i, j;
var min = { x: 0, y: 0 };
var empty = [];
var stolb = [];
var flag = 1;

//********** NEW Matrix *****************

for (i = 0; i < size; i++)
    empty[i] = 0;
empty[0] = 1;

for (i = 0; i < size; i++)
    stolb[i] = 0;



function NEW_Matrix(mas,tabl, k)
{
    for (i = 0; i < k; i++) {
            tabl[mas[i].q1.num][mas[i].q2.num] = mas[i].weight;
            tabl[mas[i].q2.num][mas[i].q1.num] = mas[i].weight;     
    }
    for (j = 0; j < k; j++) {
        if (mas[j].vis == false)
        {
            for ( i= 1; i < size; i++) {
                tabl[mas[j].q1.num][i] = 0;
                tabl[mas[j].q2.num][i] = 0;
            }
            tabl[mas[j].q1.num][0] = 1;
            tabl[mas[j].q2.num][0] = 1;
            tabl[0][mas[j].q1.num] = 1;
            tabl[0][mas[j].q2.num] = 1;
        }    
    }
}


//for (i = 0; i < size; i++) console.log(tabl[i])


//*******************************************

graf_painting(mas, k, '#066');
NEW_Matrix(mas, tabl, k);
matrix_painting(tabl, size, '#066');
jc.start('quest');
jc.text('You have to chose an edge and then put "Build". When you fineshed, puts "Control" Good luck!', 10, 10, '#099');
//jc.text('В конце работы нажмите "Проверить". Удачи!.',10, 22, '#099');
jc.start('quest');
var visible = 1;
//prim(mas, k);
//console.log('steck:', steck);
//console.log('g:', g);



function build() {

    //   if (count<g || stolb[0]==0) {
    //while (steck[count].vis==false) count++;  // Не проверено

    // prim(mas, k);
    visible = 1;
    if (NULL_matrix(tabl, size)) {
        jc.clear('quest');
        jc.clear('can');
        jc.start('can');
        for (i = 0; i < k; i++)
            
            if (mas[i].vis == false)
            {
                v=1;
                for (j = 0; j < k && v; j++)
                    if (user_steck[j] == i)
                        v = 0;
                if (v)
                {
                    user_steck[user_g] = i;
                    user_g++;
                }
                
            }
      //  mas[steck[count]].vis = false;
       graf_painting(mas, k, '#066');
       NEW_Matrix(mas, tabl, k);
       matrix_painting(tabl, size, '#066');
    //    count++;
    }
    else alert("Building is finished!");

}

function control() {

    if (NULL_matrix(tabl, size)==0)
    {
        
        prim(mas, size);
        //console.log('steck:', steck);
        correct(steck, user_steck, g, user_g, k);
    }
    else alert("Building is not finished!");
}
/*function restart() {

    for (var i = 0; i < g; i++) {
        steck[i].vis = true;
        steck[i].q1.way = 2;
        steck[i].q2.way = 2;
    }
    jc.clear('can');
    count = 0;
    graf_painting(mas, k, '#066')

}*/

function prim(mas, size) {
    for (i = 0; i < size; i++) {
        var tabl1 = [];
        for (j = 0; j < size; j++)
            tabl1[j] = 0;
        tabl[i] = tabl1;
    }
    for (i = 0; i < k; i++) {
        tabl[mas[i].q1.num][mas[i].q2.num] = mas[i].weight;
        tabl[mas[i].q2.num][mas[i].q1.num] = mas[i].weight;
    }


    console.log('PPRRIIMM');

    while (NULL_matrix(tabl, size)==1)
    {
        for (i = 0; i < size; i++) console.log(tabl[i]);
        min = min_from_table(tabl, size, stolb);
        //if (flag == 0) return null;
        console.log('stolb:', stolb);
        stolb[min.x] = 1;
        stolb[min.y] = 1;
        stolb[0] = 1;
        tabl[0][min.x] = 1;
        tabl[0][min.y] = 1;
        console.log(min.x, min.y, tabl[min.x][min.y]);

        //tabl[min.x] = empty;
        //tabl[min.y] = empty;
        for (i = 1; i < size; i++)
        {
            tabl[min.x][i] = 0;
            tabl[min.y][i] = 0;

        }
        tabl[min.x][0] = 1;
        tabl[min.y][0] = 1;

        for (i = 0; i < k; i++)
            if ((mas[i].q1.num == min.x || mas[i].q1.num == min.y) && (mas[i].q2.num == min.x || mas[i].q2.num == min.y)) {
                steck[g] = i;
                //console.log('4len');
                g++;
            }

        // matrix[g] = copy(tabl);
        // console.log('g:',g);

        /*       jc.start('tab');
               jc.clear('tab');
               x = 0; y = 0;
               
       */

    }
    
}

function min_from_table(mas, k, stolb) {
    var mx = 0, my = 0, i, j;
    flag = 0;
    for (i = 1; i < k; i++)
        for (j = 1; j < k; j++)
            if (mas[i][j] != 0 && (stolb[i] == 1 || stolb[j] == 1 || stolb[0] == 0) && flag == 0) {
                mx = i;
                my = j;
                flag = 1;
                console.log('1) mx:', mx, 'my:', my);
            }
    for (i = 1; i < k; i++)
        for (j = 1; j < k; j++)
            if ((mas[i][j] < mas[mx][my]) && (mas[i][j] != 0) && (stolb[i] == 1 || stolb[j] == 1 || stolb[0] == 0)) {
                console.log('2) stole:', stolb[i], stolb[j], stolb[0]);
                mx = i; my = j;
                console.log('2) mx:', mx, 'my:', my);
            }
    return { x: mx, y: my };
}

function copy(table) {
    var m = table;
    return m;
}

function size_of_tabl(mas, k)
{
    var max=0, i;
    for (i = 0; i < k; i++) {
        if (mas[i].q1.num > max)
            max = mas[i].q1.num;
        if (mas[i].q2.num > max)
            max = mas[i].q2.num;
    }
    //console.log('size:', max);
    return max;
}

function NULL_matrix(matrix,size)
{
    var f=0;
    for (i = 1; i < size; i++)
        if (matrix[i][0] == 0)
        {
            f = 1;
            console.log(matrix[i][0]);
        }
                
    return f;
}

function correct(m1,m2,g1,g2,k)
{
    var c=-1;
    for (i = 0; i < k && c==-1; i++)
        if (m1[i] != m2[i])
            c = i;

    if (c == -1)
        alert(('Congratulations! Your work is done!'));
    else
        alert(encodeURI('Ops!, you have a mistake in '+(c+1)+' edge. Try again laters'));
}