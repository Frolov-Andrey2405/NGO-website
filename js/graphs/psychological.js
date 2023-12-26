document.addEventListener('DOMContentLoaded', function () {
    // Data for diagrams
    var data = {
        labels: [
            'Емоційні гойдалки',
            'Підвищений рівень тривожності',
            'Порушення сну',
            'Нічні кошмари',
            'Поганий апетит',
            'Згадування подій',
            'Імітація у формі гри',
            'Зменшення бажання спілкуватися',
            'Порушення пам’яті, уваги та навчання',
            'Спалахи агресії',
            'Панічні атаки',
            'Саморуйнівна поведінка'
        ],
        datasets: [{
            data: [45, 41, 29, 10, 20, 20, 7, 13, 16, 13, 6, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(255, 205, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 87, 34, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 205, 86, 0.7)',
                'rgba(54, 162, 235, 0.7)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 87, 34, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
        }],
    };

    // Options for the chart
    var options = {
        scale: {
            ticks: {
                beginAtZero: true,
                max: 50,
            },
        },
    };

    // Get the context for drawing a diagram
    var ctx = document.getElementById('psychological').getContext('2d');

    // Create a chart
    var psychologicalChart = new Chart(ctx, {
        type: 'polarArea',
        data: data,
        options: options,
    });
});
