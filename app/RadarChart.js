import React from 'react'
import {render} from 'react-dom'
import {Radar} from 'react-chartjs'
import topics from './data/topics'

export default class RadarChart extends React.Component {
    render() {
        var options = {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            }
        }

        return <Radar type="radar" data={topics} options={options} width="700" height="700"/>
    }
}
