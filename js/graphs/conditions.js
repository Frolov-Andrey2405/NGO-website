document.addEventListener('DOMContentLoaded', function () {
    // Дані для діаграми
    var data = {
        labels: ['Діти, що переселилися в межах України', 'Діти, що виїхали за кордон', 'Постраждалі діти, що покинули домівки', 'Діти без батьківського піклування в умовах війни', 'Діти, що покинули рідні домівки через війну', 'Діти, які втратили доступ до освіти'],
        datasets: [{
            data: [2500000, 2400000, 1200000, 8512, 3360000, 5000000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(255, 205, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(153, 102, 255, 0.7)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
        }],
    };

    // Опції для діаграми
    var options = {
        scale: {
            ticks: {
                beginAtZero: true,
            },
        },
    };

    // Отримуємо контекст для малювання діаграми
    var ctx = document.getElementById('conditions').getContext('2d');

    // Створюємо Polar area діаграму
    var conditionsChart = new Chart(ctx, {
        type: 'polarArea',
        data: data,
        options: options,
    });
});
