import rgba from 'to-rgba'
import topics from './topics'

export default {
    labels: topics.labels,
    datasets: topics.datasets.map(p => {
        return {
            label: p.name,
            fillColor: rgba(p.color, "0.1"),
            strokeColor: rgba(p.color, "1"),
            pointColor: rgba(p.color, "1"),
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: rgba(p.color, "1"),
            data: p.score
        }
    })
}
