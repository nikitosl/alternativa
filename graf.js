var canvas = document.getElementById("test");
if (canvas == null)
    console.log("Canvas not Opened");
var ctx = canvas.getContext('2d');

function createArray(q) {
    var arr = [];
    for (var i = 0; i < q; i++) {
        arr[i] = [];
        for (var j = 0; j < q; j++) {
            arr[i][j] = 0;
        }
    }

    return arr;
}

function writeArray(arr, obj) {
    for (var i = 0; i < obj.kolvo_reber; i++) {
        arr[obj.rebra[i].q1.id - 1][obj.rebra[i].q2.id - 1] = obj.rebra[i].weight;
        arr[obj.rebra[i].q2.id - 1][obj.rebra[i].q1.id - 1] = obj.rebra[i].weight;
    }

    return arr;
}

function showArray(arr, size) {
    console.log("MATRIX:\n");
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            console.log(arr[i][j] + " ");
        }
        console.log("\n");
    }
}

$(document).ready(function () {
    $.getJSON('\input.json', function (jso) {
        k = jso.kolvo_reber;

        var matrix = createArray(jso.kolvo_vershin);
        matrix = writeArray(matrix, jso);

        showArray(matrix, jso.kolvo_vershin);

        ctx.beginPath();
        var radius = 5;
        for (var i = 0; i < k; i++) {
            ctx.arc(jso.rebra[i].q1.x + radius, jso.rebra[i].q1.y + radius, radius - 1, 0, 360, false);
            //ctx.fill();
            ctx.arc(jso.rebra[i].q2.x + radius, jso.rebra[i].q2.y + radius, radius - 1, 0, 360, false);
            //ctx.fill();
            ctx.stroke();

        }
        ctx.closePath();	
        

    });
});

global matrix[][], v[];

function1(rebro[i])
{
    if (rebro[i].q1.color == rebro[i].q2.color)
        rebro[i].visible = false;
    else
    {
        rebro[i] = function2(rebro[i], v[rebro[i].q1.id-1]);
    }
}

function2(rebro[i], const_color)
{
    for (j = 0; j < kolvo_vershin; i++) {
        if ((matrix[rebro[i].q2.id - 1][j] > 0) && (j+1 != rebro[i].q1.id) && (v[rebro[i].q2.id-1] == v[j])) {
            function2(function3(rebro[i].q2.id, j+1), const_color);
        }
    }
    v[rebro[i].q2.id-1] = const_color;
    rebro[i].visible = true;
    return rebro[i]; // ?
}

// функци€, возвращающа€ конкретноe ребро, соедин€ющее две данные через их id вершины
// function3(ver1, ver2)