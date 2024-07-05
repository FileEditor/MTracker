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
                'rgb(39,56,25)',
                'rgb(59,65,39)',
                'rgb(93,105,91)',
                'rgb(49,49,49)',
                'rgb(33,68,5)',
                'rgb(43,100,13)',
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