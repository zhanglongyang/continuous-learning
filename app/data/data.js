import rgba from 'to-rgba'
import topics from './topics'

export default {
    labels: topics.labels,
    datasets: topics.datasets.map(p => {
        return {
            label: p.name,
            fillColor: rgba(p.color, "0.1"),
            strokeColor: p.color,
            pointColor: p.color,
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: p.color,
            data: p.score
        }
    })
}
