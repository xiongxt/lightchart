import 'babel-polyfill';
import xrender from '../../src/xrender';
console.log(xrender);
let render = xrender.init(document.querySelector('#chart1'), window.devicePixelRatio * 2);

let circle = new xrender.Circle({
    center: {
        x: 50,
        y: 50
    },
    radius: 50,
    fill: true,
    stroke: false,
    'z-index': 5,
    cursor: 'pointer',
    'background-color': 'rgba(255,0,0,1)'
}, {});

let mouseenter = () => {
    circle.setStyle({
        'background-color': '#ccc'
    });
};

circle.on('mouseenter', mouseenter);
// circle.off('mouseenter', mouseenter);
circle.on('mouseleave', () => {
    circle.setStyle({
        'background-color': 'blue'
    });
});
circle.on('click', () => {
    console.log('circle1 click');
});

let circle2 = new xrender.Circle({
    center: {
        x: 25,
        y: 25
    },
    radius: 25,
    fill: true,
    stroke: false,
    'z-index': 4,
    'background-color': 'yellow'
});

circle2.on('click', () => {
    circle2.animate({
            radius: 50,
            center: {
                x: 350,
                y: 250
            },
            'background-color': 'INDIGO'
        },
        800,
        'swing'
    );
});

let rect = new xrender.Rect({
    start: {
        x: 100,
        y: 25
    },
    width: 100,
    height: 50,
    fill: true,
    'background-color': 'blue'
});

rect.on('click', () => {
    console.log(rect);
    rect.setStyle({
        'background-color': 'gray'
    });
});

let sector = new xrender.Sector({
    center: {
        x: 100,
        y: 125
    },
    radius: 100,
    sdeg: -10,
    edeg: 60,
    fill: true,
    'background-color': 'yellow'
});

let line = new xrender.Line({
    start: {
        x: 232,
        y: 20
    },
    end: {
        x: 232,
        y: 200
    },
    'border-color': 'blue'
});

let font = new xrender.Font({
    start: {
        x: 0,
        y: 0
    },
    'font-size': 16,
    'font-text': '你好，世界。\n这是xrender的文字图形',
    color: 'blue',
    'max-width': '100'
});
font.on('mouseenter', () => {
    font.setStyle({
        color: 'blue'
    });
});
font.on('mouseleave', () => {
    font.setStyle({
        color: 'yellow'
    });
});

let img = new xrender.Image({
    start: {
        x: 0,
        y: 400
    }
});

let collection = new xrender.Collection({
    start: {
        x: 100,
        y: 100
    },
    width: 400,
    height: 400
});

//
// render.addChild(circle2);
// render.addChild(circle);
// render.addChild(rect);
render.addChild(collection);
// collection.addChild(circle);
collection.addChild(sector);
collection.addChild(line);
collection.addChild(font);
collection.addChild(rect);
collection.delChild(rect);
render.addChild(img);
render.render();
console.log(render);
window.render = render;
window.circle = circle;