const ctx = document.getElementById('barchart');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Electronic', 'Rock', 'Nu Metal', 'Post Punk', 'Shoegaze', 'Other'],
        datasets: [{
            label: 'Genres',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 0.5,
            borderStyle: 'dot',
            borderColor: [
                'rgb(0,0,0)',
            ],
            backgroundColor: [
                'rgb(25,43,56)',
                'rgb(65,39,39)',
                'rgb(80,80,80)',
                'rgb(49,49,49)',
                'rgb(67,5,68)',
                'rgb(255,255,255)',
            ]
        }]
    },
    options: {

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});