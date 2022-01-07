var barColor = "green";
        
var barDataObj={
    type: 'bar',
    data: {
        labels: ["channel 1","channel 2","channel 3","channel 4","channel 5" ,"channel 6","channel 7","channel 8"],
        datasets: [{
            label: '0',
            data: [35, 15, 35, 5, 15, 45, 30, 12],
            backgroundColor: barColor
        },
        
        ]
    },
    options: {
        legend: {
            labels: {
                fontColor: barColor
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: barColor,
                    fontSize: 14,
                    beginAtZero: true,
                    suggestedMax: 100
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: barColor,
                    fontSize: 14,
                    stepSize: 1,
                    beginAtZero: true
                }
            }]
        }
    }
}
var barChart = document.getElementById('barChart').getContext('2d');
window.barLine = new Chart(barChart,barDataObj );

function updateBarChart(incomingData){

    //updating timestamp
    newBarDataObj = barDataObj.data;

    newBarDataObj.datasets[0].label = incomingData['timestamp'];

    //updating channels data
    newBarDataObj.datasets[0].data = incomingData['data'];


    window.barLine.update();

}