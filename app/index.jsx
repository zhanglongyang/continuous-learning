import React from 'react'
import {render} from 'react-dom'
import {Radar} from 'react-chartjs'

var RadarChart = React.createClass({
    render: function() {
        var data = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
                    label: "My Second dataset",
                    backgroundColor: "rgba(228, 36, 30, 0.3)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255,99,132,1)",
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        }

        var options = {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            }
        }

        return <Radar type="radar" data={data} options={options} width="700" height="700"/>
    }
})

render(<RadarChart/>, document.getElementById('app'))
