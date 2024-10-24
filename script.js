// Data untuk Grafik Batang (Volume Saham per Hari)
const barChartData = {
    labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
    datasets: [{
        label: 'Volume Saham (x1000)',
        data: [120, 190, 300, 500, 230],
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
    }]
};

// Grafik Batang
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: barChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Data untuk Grafik Garis (Harga Saham per Hari)
const lineChartData = {
    labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
    datasets: [{
        label: 'Harga Saham',
        data: [50, 55, 60, 58, 62],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
    }]
};

// Grafik Garis
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: lineChartData,
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
