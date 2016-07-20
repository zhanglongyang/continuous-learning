import rgba from 'to-rgba'
import colors from './colors'

export default {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: rgba(colors[0], "0.1"),
            strokeColor: rgba(colors[0], "1"),
            pointColor: rgba(colors[0], "1"),
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: rgba(colors[0], "1"),
            data: [65, 59, 90, 81, 40, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: rgba(colors[1], "0.1"),
            strokeColor: rgba(colors[1], "1"),
            pointColor: rgba(colors[1], "1"),
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: rgba(colors[1], "1"),
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
}
