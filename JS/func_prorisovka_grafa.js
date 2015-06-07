



function graf_painting(mas, size, color) {
    for (var i = 0; i < size; i++) {
        if (mas[i].vis == true)
            color = '#066';
        else {
            color = '#600';
            mas[i].q1.way = 1;
            mas[i].q2.way = 1;
            f = 0;
            for (j = 0; j < size && f == 0; j++) {
                if ((mas[j].q1.num == mas[i].q1.num && mas[j].vis == true) || (mas[j].q2.num == mas[i].q1.num && mas[j].vis == true))
                    f = 1;
            }
            if (f == 0)
                mas[i].q1.way = 0;

            f = 0;
            for (j = 0; j < size && f == 0; j++) {
                if ((mas[j].q1.num == mas[i].q2.num && mas[j].vis == true) || (mas[j].q2.num == mas[i].q2.num && mas[j].vis == true))
                    f = 1;
            }
            if (f == 0)
                mas[i].q2.way = 0;



        }
        edge_painting(mas, i,size, color);
        node_painting(mas, i, size, color);
       // console.log(mas[i].q1.num, ':', mas[i].q1.way, ';', mas[i].q2.num, ':', mas[i].q2.way)
    }
}


function node_painting(mas, i,k, col) {
    var x1, y1, x2, y2, j;
    var radius = 5;
    var col1=col, col2=col;
    

    for (j = 0; j < k; j++) {
        if (mas[j].q1.num == mas[i].q1.num) mas[j].q1.way = mas[i].q1.way;
        else if (mas[j].q2.num == mas[i].q1.num) mas[j].q2.way = mas[i].q1.way;
        else if (mas[j].q1.num == mas[i].q2.num) mas[j].q1.way = mas[i].q2.way;
        else if (mas[j].q2.num == mas[i].q2.num) mas[j].q2.way = mas[i].q2.way;

    }

    if (mas[i].q1.way == 1) col1 = '#AA0';
    else if (mas[i].q1.way == 0) col1 = '#600';
    if (mas[i].q2.way == 1) col2 = '#AA0';
    else if (mas[i].q2.way == 0) col2 = '#600';


    jc.start('can');
    x1 = mas[i].q1.x + radius; x2 = mas[i].q2.x + radius; y1 = mas[i].q1.y + radius; y2 = mas[i].q2.y + radius;
    jc.circle(x1, y1, radius - 1, col1, 1);
    jc.text(mas[i].q1.num, x1, y1 + 15, col1);
    jc.circle(x2, y2, radius - 1, col2, 1);
    jc.text(mas[i].q2.num, x2, y2 + 15, col2);
    jc.start('can', true);

}


function matrix_painting(matrix,size, color)
{
    jc.start('tab');
    jc.clear('tab');
    var i, j, x=0,y=0;
    for (i = 0; i < size; i++) {
        x = 0;
        for (j = 1; j < size; j++) {
            //jc.text(matrix[i][j], x, y, color);
            if (matrix[0][j] == 1) jc.text(matrix[i][j], x, y, '#AA0');
            else if (matrix[i][0] == 1) jc.text(matrix[i][j], x, y, '#A00');
            else jc.text(matrix[i][j], x, y, '#066');
            x += 30;
        }
        y += 30;
    }
    jc.start('tab');
}
// JavaScript source code
function edge_painting(mas, i,k, col) //mas - массив ребер формата: [q1{num,x,y}, -первая вершина
    //                             q2{num,x,y}, -вторая вершина
    //                             weight,      -вес ребра
    //                             print];      -нарисовано ли ребро
    //                                             (1/0)
{
    if (!mas[i])
        return null;
    var x1, y1, x2, y2,f;
    var radius = 5;
    //  var col = '#066';               //невыбраные линии
    var col0 = 'rgba(0,6,6,0.04)';  //невыбраные прямоугольники
    var col1 = 'rgba(0,9,9,0.2)';   //подсвеченые прямоугольники
    var col2 = '#600';//выбраные линии
    var kos = [];
    var wei = [];
    var center = [];
    var sr_x=0, sr_y=0, koef;
    jc.start('can');
    //jc.clear('can');
    //var point;
    //   for (var i = 0; i < k; i++) {
    // jc.circle(100, 100, 50, 'rgba(0,0,0,1)', 1);
    x1 = mas[i].q1.x + radius; x2 = mas[i].q2.x + radius; y1 = mas[i].q1.y + radius; y2 = mas[i].q2.y + radius;
    /*
    if (x1 < x2) sr_x = x1 / x2;
    else sr_x = x2 / x1;
    if (y1 < y2) sr_y = y1 / y2;
    else sr_y = y2 / y1;
    koef=2;
    sr_x *=  koef; sr_x += 3;
    sr_y *= koef; sr_y += 2;   
    */
    if (x1 < x2 && y1 > y2) {
        sr_x += 3;
        sr_y += 3;
    }
    else if (x1 > x2 && y1 < y2) {
        sr_x = 3;
        sr_y = 3;
    }
    else {
        sr_x += 3;
        sr_y += 3;
    }
  /*  sr_x += 30;
    sr_y += 30;*/
        jc.line([[x1 - sr_x, y1 + sr_y], [x2 - sr_x, y2 + sr_y], [x2 + sr_x, y2 - sr_y], [x1 + sr_x, y1 - sr_y]], col0, 1)
            .name(i + 1)
            .lineStyle({ lineWidth: 1 })
            .mousemove(function () {
                this.color(col1);
                //console.log(wei[this.name()]);
                jc('#speshial_rect' + this.name()).visible(true).up();
                jc('#speshial_text' + this.name()).visible(true).up();
            })
             .mouseout(function () {
                 this.color(col0);
                 //console.log('Clearing');
                 jc('#speshial_rect' + this.name()).visible(false);
                 jc('#speshial_text' + this.name()).visible(false);
             })
            .click(function () {
                if (mas[this.name()-1].vis == true) {
                    jc('#' + this.name() + '1').color(col2);
                    jc('#speshial_text' + this.name()).color(col2);
                    mas[this.name() - 1].vis = false;

                  //  node_painting(mas, i,k, col);
                }
                else  {
                    jc('#' + this.name() + '1').color(col);
                    jc('#speshial_text' + this.name()).color(col);
                    mas[this.name() - 1].vis = true;
                 //   node_painting(mas, i,k, col);
               }
            });

    jc.line([[x1, y1], [x2, y2]], col)
        .id(i + 1 + '1');

    center[i + 1] = jc('#' + (i + 1) + '1').getCenter();
    jc.rect(center[i + 1].x - 10, center[i + 1].y - 10, 20, 20, '#fff', 1)
        .id('speshial_rect' + (i + 1))
        .visible(false);


    jc.text(mas[i].weight, center[i + 1].x - 10, center[i + 1].y + 5, col, 1)
        .id('speshial_text' + (i + 1))
        .visible(false);
    jc.start('can', true);
}
