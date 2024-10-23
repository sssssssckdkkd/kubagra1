// Funkcja do generowania losowych grafik SVG
function generateSVG(shape, color) {
    if (shape === 'circle') {
        return `<svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="${color}" /></svg>`;
    } else if (shape === 'rect') {
        return `<svg width="100" height="100"><rect width="80" height="80" x="10" y="10" fill="${color}" /></svg>`;
    } else if (shape === 'triangle') {
        return `<svg width="100" height="100"><polygon points="50,10 90,90 10,90" fill="${color}" /></svg>`;
    } else if (shape === 'ellipse') {
        return `<svg width="100" height="100"><ellipse cx="50" cy="50" rx="40" ry="25" fill="${color}" /></svg>`;
    }
}

// Funkcja generująca dane SVG dla kart (kształt i kolor)
function generateRandomSVGs(pairs) {
    const shapes = ['circle', 'rect', 'triangle', 'ellipse']; // Nowe kształty
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    let data = [];

    for (let i = 0; i < pairs; i++) {
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        data.push({ shape, color });
    }
    return data;
}