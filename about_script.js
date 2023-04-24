window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const menu_list = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        menu_list.classList.toggle('is-active');
    });
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualization);
// google.charts.setOnLoadCallback(drawVisualization2);

function drawVisualization() {
    //For Table 1
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Month');
    data.addColumn('number', '1st pass yield');
    data.addColumn('number', 'Final Yiled');
    data.addColumn('number', 'Rejection % IN INDO');
    data.addColumn('number', 'R/w%');
    data.addRow(['Jan-22', 89.5, 89.5, 2.63, 0.00]);
    data.addRow(['Feb-22', 98.3, 98.3, 1.36, 0.00]);
    data.addRow(['Mar-22', 96.8, 99.7, 0.00, 2.91]);
    data.addRow(['Apr-22', 97.9, 97.9, 0.19, 0.00]);
    data.addRow(['May-22', 93.8, 100.0, 0.00, 6.24]);
    data.addRow(['Jun-22', 99.4, 99.4, 0.00, 0.00]);
    data.addRow(['Jul-22', 93.5, 93.5, 6.49, 0.00]);
    data.addRow(['Aug-22', 97.3, 97.3, 2.25, 0.00]);
    data.addRow(['Sep-22', 99.1, 99.1, 0.58, 0.00]);
    data.addRow(['Oct-22', 98.2, 99.8, 1.82, 1.60]);
    data.addRow(['Nov-22', 99.8, 99.8, 0.20, 0.00]);
    data.addRow(['Dec-22', 94.7, 94.7, 5.07, 0.00]);

    var options = {
        title: 'SUNTECH - YIELD Details - FY 2022/23',
        vAxes: {
            0: {
                logScale: false,
                minValue: 84,
                maxValue: 100,
                ticks: [84, 86, 88, 90, 92, 94, 96, 98, 100],
            },
            1: {
                logScale: false,
                maxValue: 100,
                minValue: 0,
                ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                title: 'Rework & Rejection in %',
            },
        },
        series: {
            0: { targetAxisIndex: 0 },
            1: { targetAxisIndex: 0 },
            2: { targetAxisIndex: 1, type: 'line', },
            3: { targetAxisIndex: 1, type: 'line', },
        },
        vAxis: {
            title: 'First & Final Yield in %',
        },
        hAxis: {
            title: '',
        },
        seriesType: 'bars',
        colors: ['#B2F252', '#467326', '#BF0413', '#FFFF00', '#f6c7b6'],
        lineWidth: 5,
    };

    var chart1 = new google.visualization.ComboChart(document.getElementById('chart_div_1'));
    chart1.draw(data, options);
}

function test() {
    document.getElementById('chart_div_1').style.display = "block";
    chart1.draw(data, options);
}

// function drawVisualization2 () {
//     var data2 = new google.visualization.DataTable();
//     data2.addColumn('string', 'Month');
//     data2.addColumn('number', 'NO OF NC raised');
//     data2.addColumn('number', 'No of NC Closed');
//     data2.addColumn('number', 'DPPM');
//     data2.addColumn('number', 'NC REJECTED QTY');
//     data2.addRow(['Jan-22', 1, 1, 2631.6, 1]);
//     data2.addRow(['Feb-22', 1, 1, 1360.5, 4]);
//     data2.addRow(['Mar-22', 1, 1, 323.6, 1]);
//     data2.addRow(['Apr-22', 2, 2, 194.6, 1]);
//     data2.addRow(['May-22', 0, 0, 0.00, 0]);
//     data2.addRow(['Jun-22', 0, 0, 0.00, 0]);
//     data2.addRow(['Jul-22', 1, 0, 6490.4, 27]);
//     data2.addRow(['Aug-22', 3, 0, 2254.8, 20]);
//     data2.addRow(['Sep-22', 1, 0, 578.0, 2]);
//     data2.addRow(['Oct-22', 1, 0, 213.9, 2]);
//     data2.addRow(['Nov-22', 1, 1, 200.0, 1]);
//     data2.addRow(['Dec-22', 2, 0, 5068.6, 48]);

//     var options2 = {
//         title: 'SUNTECH - NO OF NC\'S (ESCAPE)',
//         vAxes: {
//             0: {
//                 logScale: false,
//                 minValue: 0,
//                 maxValue: 3.5,
//                 ticks: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5],
//             },
//             1: {
//                 logScale: false,
//                 maxValue: 100,
//                 minValue: 0,
//                 ticks: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000],
//                 title: 'No of Pcs rejected',
//             },
//         },
//         series: {
//             0: { targetAxisIndex: 0 },
//             1: { targetAxisIndex: 0 },
//             2: { targetAxisIndex: 1, type: 'line', },
//             3: { targetAxisIndex: 1, type: 'line', },
//         },
//         vAxis: {
//             title: '',
//             // viewWindow: {
//             //     min: 84,
//             //     max: 100
//             // },
//             // ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//         },
//         hAxis: {
//             title: '',
//         },
//         seriesType: 'bars',
//         // series: {
//         //     3: {
//         //         type: 'line',

//         //     },
//         //     2: { type: 'line' }
//         // },
//         colors: ['#FFB20F', '#467326', '#215BA6','#BF0413', '#f6c7b6'],
//         lineWidth: 5,
//     };

//     var chart2 = new google.visualization.ComboChart(document.getElementById('chart_div_2'));
//     chart2.draw(data2, options2);

// }