import React from 'react'
import {render} from 'react-dom'
import {Radar} from 'react-chartjs'

export default class RadarChart extends React.Component {
    render() {
        const {data} = this.props
        const options = {
            pointDotRadius: 4,
            pointDotStrokeWidth: 2,
            datasetStroke : true,
            datasetStrokeWidth : 2,
            legendTemplate: "Continuous Learning",
            scaleShowLine : true,
            angleShowLineOut : true,
            scaleShowLabels : false,
            scaleBeginAtZero : true,
            angleLineColor : "rgba(0,0,0,.1)",
            angleLineWidth : 1,
            angleLineInterval: 1,
        }

        return <Radar data={data} options={options} width="700" height="700"/>
    }
}
