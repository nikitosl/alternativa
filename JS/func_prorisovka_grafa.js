// JavaScript source code
function prorisovka(mas) //mas - массив ребер формата: [q1{num,x,y}, -первая вершина
    //                             q2{num,x,y}, -вторая вершина
    //                             weight,      -вес ребра
    //                             print];      -нарисовано ли ребро
    //                                             (1/0)
{

    var x1, y1, x2, y2;
    var radius = 5;
    var col = '#066';               //невыбраные линии
    var col0 = 'rgba(0,6,6,0.04)';  //невыбраные прямоугольники
    var col1 = 'rgba(0,9,9,0.2)';   //подсвеченые прямоугольники
    var col2 = '#600';//выбраные линии
    var kos = [];
    var wei = [];
    var center = [];

    jc.start('can');
    jc.clear('can');
    //var point;
    for (var i = 0; i < k; i++) {
        // jc.circle(100, 100, 50, 'rgba(0,0,0,1)', 1);
        x1 = mas[i].q1.x + radius; x2 = mas[i].q2.x + radius; y1 = mas[i].q1.y + radius; y2 = mas[i].q2.y + radius;

        if (x1 < x2) {
            jc.line([[x1 - 3, y1 + 3], [x2 - 3, y2 + 3], [x2 + 3, y2 - 3], [x1 + 3, y1 - 3]], col0, 1)
                .name(i + 1)
                .lineStyle({ lineWidth: 1 })
                .mousemove(function () {
                    this.color(col1);
                    console.log(wei[this.name()]);
                    jc('#speshial_rect' + this.name()).visible(true);
                    jc('#speshial_text' + this.name()).visible(true);
                })
                 .mouseout(function () {
                     this.color(col0);
                     console.log('Clearing');
                     jc('#speshial_rect' + this.name()).visible(false);
                     jc('#speshial_text' + this.name()).visible(false);
                 })
                .click(function () {
                    if (kos[this.name()] == 0) {
                        jc('#' + this.name() + '1').color(col2);
                        jc('#speshial_text' + this.name()).color(col2);
                        kos[this.name()] = 1;
                    }
                    else {
                        jc('#' + this.name() + '1').color(col);
                        jc('#speshial_text' + this.name()).color(col);
                        kos[this.name()] = 0;
                    }
                });
        }
            //********************************************************************
        else {
            jc.line([[x1 - 3, y1 - 3], [x2 - 3, y2 - 3], [x2 + 3, y2 + 3], [x1 + 3, y1 + 3]], col0, 1)
                .name(i + 1)
                .lineStyle({ lineWidth: 1 })
                .mousemove(function () {
                    this.color(col1);
                    console.log(wei[this.name()]);
                    jc('#speshial_rect' + this.name()).visible(true).up();
                    jc('#speshial_text' + this.name()).visible(true).up();
                })
                 .mouseout(function () {
                     this.color(col0);
                     console.log('Clearing');
                     jc('#speshial_rect' + this.name()).visible(false);
                     jc('#speshial_text' + this.name()).visible(false);
                 })
                .click(function () {
                    if (kos[this.name()] == 0) {
                        jc('#' + this.name() + '1').color(col2);
                        jc('#speshial_text' + this.name()).color(col2);
                        kos[this.name()] = 1;
                    }
                    else {
                        jc('#' + this.name() + '1').color(col);
                        jc('#speshial_text' + this.name()).color(col);
                        kos[this.name()] = 0;
                    }
                });
        }
        jc.line([[x1, y1], [x2, y2]], col)
            .id(i + 1 + '1');

        kos[i + 1] = 0;


        center[i + 1] = jc('#' + (i + 1) + '1').getCenter();
        jc.rect(center[i + 1].x - 10, center[i + 1].y - 10, 20, 20, '#fff', 1)
            .id('speshial_rect' + (i + 1))
            .visible(false)
            .mousemove(function () {
                js.pause();
            });

        jc.text(mas[i].weight, center[i + 1].x - 10, center[i + 1].y + 5, col, 1)
            .id('speshial_text' + (i + 1))
            .visible(false)
            .mousemove(function () {
                js.pause();
            });



        jc.circle(x1, y1, radius - 1, col, 1);
        jc.text(mas[i].q1.num, x1, y1 + 15, col);
        jc.circle(x2, y2, radius - 1, col, 1);
        jc.text(mas[i].q2.num, x2, y2 + 15, col);
        jc.start('can', true);
    }
    for (i = 0; i < k; i++) {
        mas[i].print = kos[i];
    }
}
