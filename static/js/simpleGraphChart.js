
var simpleGraphAxesColor = "orange";

var simpleGraphDataObj={
    type: 'line',
    data: {
        labels: [0,0,0,0,0,0],
        datasets: [{
            label: 'First data',
            data: [0, 0, 0, 0, 0, 0],
            borderColor: 'green',
            fill: false,
            borderWidth: 0.5
        },
        {
            label: 'Second data',
            data: [0, 0, 0, 0, 0, 0],
            borderColor: 'pink',
            fill: false,
            borderWidth: 0.5
        },
        {
            label: 'Third data',
            data: [0, 0, 0, 0, 0, 0],
            borderColor: 'red',
            fill: false,
            borderWidth: 0.5
        },
        {
            label: 'Fourth data',
            data: [0, 0, 0, 0, 0, 0],
            borderColor: 'orange',
            fill: false,
            borderWidth: 0.5
        },
        {
            label: 'Fifth data',
            data: [0, 0, 0, 0, 0, 0],
            borderColor: 'yellow',
            fill: false,
            borderWidth: 0.5
        },
        {
            label: 'Sixth data',
            data: [0, 0, 0, 0, 0, 0],
            borderColor: 'blue',
            fill: false,
            borderWidth: 0.5
        },
        {
            label: 'Seventh data',
            data: [0, 0, 0, 0, 0, 0],
            borderColor: 'violet',
            fill: false,
            borderWidth: 0.5
        },
        {
            label: 'Eighth data',
            data: [0, 0, 0, 0, 0, 0],
            borderColor: 'white',
            fill: false,
            borderWidth: 0.5
        },
        ]
    },
    options: {
        legend:{
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: simpleGraphAxesColor,
                    fontSize: 14,
                    suggestedMax: 150
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: simpleGraphAxesColor,
                    fontSize: 14,
                    stepSize: 1,
                }
            }]
        }
    }
}
var ctx = document.getElementById('simpleChart').getContext('2d');
window.simpleGraphLIne = new Chart(ctx,simpleGraphDataObj );

function updateSimpleGraphData(incomingDataArray,incomingTimestamp){
    
    //assigning new data object pointing towards data from dataobj of chart.js
    newSimpleGraphDataObj = simpleGraphDataObj['data']

    //removing first element from labels of newdataobj
    newSimpleGraphDataObj.labels.shift()
    //adding a new element which is nothing but timestamp from EEG data to last of labels so that X-axis will updata continuously
    newSimpleGraphDataObj.labels.push(incomingTimestamp)

    //loopping through each dataset such that 'i' will represent a different channel data each time
    for(let i=0; i<newSimpleGraphDataObj.datasets.length; i++){
        

        // changing each elements value to its next element except for last element
        for(let j=newSimpleGraphDataObj.datasets[i].data.length; j>=2; j--){
            newSimpleGraphDataObj.datasets[i].data[ newSimpleGraphDataObj.datasets[i].data.length-j ] = newSimpleGraphDataObj.datasets[i].data[ newSimpleGraphDataObj.datasets[i].data.length-(j-1) ]
        }

        /*fetching last element and updating it to latest timestamp*/ 
        newSimpleGraphDataObj.datasets[i].data[ newSimpleGraphDataObj.datasets[i].data.length-1 ] = incomingDataArray[i]

    }
    //updating graph
    window.simpleGraphLIne.update()

}

