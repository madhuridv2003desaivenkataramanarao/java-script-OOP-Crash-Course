// const s = 'Hello';
// console.log(typeof s1());

// console s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
// alert(1);

// console.log(navigator.appVersion);
// Object literal

const book1 = {
    title:'Book One',
    author:'ashwin',
    year:'2025',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;

    }
};

const book2 = {
    title:'Book Two',
    author:'madhu',
    year:'2026',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;

    }
};

// console.log(book2.getSummary());
// console.log(Object.values(book2));
// console.log(Object.keys(book2));