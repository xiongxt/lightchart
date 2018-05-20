export default class Context {
    constructor () {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
    }
    render (el) {
        this.canvas.style.width = `${el.clientWidth}px`;
        this.canvas.style.height = `${el.clientHeight}px`;
        this.canvas.width = el.clientWidth * 1;
        this.canvas.height = el.clientHeight * 1;
        el.appendChild(this.canvas);
    }

    setChart (chart) {
        this.chart = chart;
    }

    renderChart () {}
}
