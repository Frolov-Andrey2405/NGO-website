document.addEventListener('DOMContentLoaded', function () {
    // Data for the chart
    var data = {
        labels: ['24 лютого 2022', '15 квітня 2022', '22 квітня 2022', '4 травня 2022', '18 липня 2022', '18 червня 2023', '24 серпня 2023', '25 грудня 2023'],
        datasets: [{
            label: 'Загинуло',
            yAxisID: 'y-axis-1',
            data: [513, 721, 929, 1150, 1503, 1992, 2537, 3060],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: 'start', // Updated fill property for progressive line
            lineTension: 0.1, // Added lineTension for easing
        }, {
            label: 'Поранено',
            yAxisID: 'y-axis-2',
            data: [1160, 1546, 1932, 2340, 3006, 4032, 5058, 6215],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: 'start', // Updated fill property for progressive line
            lineTension: 0.1, // Added lineTension for easing
        }],
    };

    // Options for the chart
    var options = {
        responsive: true,
        hoverMode: 'index',
        stacked: false,
        title: {
            display: true,
            text: 'Кількість дітей, які постраждали через агресію РФ (Монотонно зростаюча функція)',
        },
        scales: {
            yAxes: [{
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-axis-1',
            }, {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-axis-2',
                gridLines: {
                    drawOnArea: false,
                },
            }],
        },
    };

    // Get the context for drawing the updated chart
    var ctx = document.getElementById('surgical').getContext('2d');

    // Create a chart
    var surgicalChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options,
    });
});
