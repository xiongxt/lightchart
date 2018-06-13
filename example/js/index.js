import xrender from '../../v2/xrender';

let render = xrender.init('#chart1', window.devicePixelRatio * 2);

let circle = new xrender.Circle(
    {
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
    },
    {
        ignore: true
    }
);

circle.on('mouseenter', () => {
    circle.setStype({
        'background-color': '#ccc'
    });
});
circle.on('mouseleave', () => {
    circle.setStype({
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
    circle2.animate(
        {
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
    rect.setStype({
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
        x: 0,
        y: 0
    },
    end: {
        x: 400,
        y: 400
    }
});
line.on('mouseenter', () => {
    line.setStype({
        'border-color': 'blue'
    });
});
line.on('mouseleave', () => {
    line.setStype({
        'border-color': 'yellow'
    });
});

render.addElement(circle);
render.addElement(circle2);
render.addElement(rect);
render.addElement(sector);
render.addElement(line);
render.render();
console.log(render);
window.render = render;
window.circle = circle;
