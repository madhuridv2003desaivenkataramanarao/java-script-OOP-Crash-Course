// Object of protos

const bookProtos = {
    getSummary: function() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function() {
      const years = new Date().getFullYear() - this.year;
      return `${this.title} is ${years} years old.`;
    }
  };
  
  // Create Object
  const book1 = Object.create(bookProtos);
  book1.title = 'Book One';
  book1.author = 'ashwin';
  book1.year = '2025';
  
  console.log(book1);
  console.log(book1.getSummary());
  console.log(book1.getAge());
  
  // Another way (defining properties in Object.create)
  const book2 = Object.create(bookProtos, {
    title:  { value: 'Book Two'},
    author: { value: 'madhu'},
    year:   { value: '2026' }
  });
  
  console.log(book2);
  console.log(book2.getSummary());
  console.log(book2.getAge());
  