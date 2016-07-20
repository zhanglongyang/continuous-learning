import React from 'react'
import {render} from 'react-dom'
import {Radar} from 'react-chartjs'

export default class RadarChart extends React.Component {
    render() {
        var {data} = this.props
        var options = {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            }
        }

        return <Radar data={data} options={options} width="700" height="700"/>
    }
}
