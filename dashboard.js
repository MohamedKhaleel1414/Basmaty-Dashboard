let x = new Date()
let xValues = [`${x.getMonth() + 1}/${x.getDate()}`, `${x.getMonth() + 1}/${x.getDate() + 1}`, `${x.getMonth() + 1}/${x.getDate() + 2}`]

//Data for Earning chart (Earnings per Day)
let yValues = [1000, 1800, 1600]
new Chart("earningChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            borderColor: "light",
            pointRadius: 3,
            pointBackgroundColor: "#C13F55",
            data: yValues
        }]
    },
    options: {
        title: { display: false, },
        legend: { display: false },
        scales: {
            yAxes: [
                {
                    display: true,
                    stacked: true,
                    ticks: {
                        min: 1000, max: 2000, stepSize: 500
                    },
                }
            ],
        }
    }
})

//Data for Orders chart (Orders per Day)
let yOrderValues = [27, 32, 49]
new Chart("orderChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: "#C13F55",
            data: yOrderValues
        }]
    },
    options: {
        legend: { display: false },
        title: { display: false },
        scales: {
            yAxes: [
                {
                    display: true,
                    stacked: true,
                    ticks: {
                        min: 0, max: 60, stepSize: 20
                    },
                }
            ],
            xAxes: [
                {
                    barPercentage: 0.4,
                }
            ]
        }
    }
})

//Data for Completed orders chart (completed orders per day)
let yCompletedValues = [26,32,47]
new Chart("completedChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: "#C13F55",
            data: yCompletedValues
        }]
    },
    options: {
        legend: { display: false },
        title: { display: false },
        scales: {
            yAxes: [
                {
                    display: true,
                    stacked: true,
                    ticks: {
                        min: 0, max: 60, stepSize: 20
                    },
                }
            ],
            xAxes: [
                {
                    barPercentage: 0.4,
                }
            ]
        }
    }
})

//Activate different sections of dashboard
function makeActive(event){
    let list = document.getElementsByTagName("span").length
    for(let i = 0;i<list;i++){
        document.getElementsByTagName("span")[i].removeAttribute("class")
    }
    event.target.setAttribute("class","active")
}