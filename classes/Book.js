// import the Media class:
const Media = require('./Media');

// create your Book class:
// In Book.js, create a Book class. The Book class should be a subclass of Media. Import Media into the Book.js file using require.
// Book should have the following properties and methods:
// author: the author of the book (string)
// numPages: the number of pages in the book (number)
// rating: the average rating of the book (number between 1-5)
// summary(): a method that returns a summary of the book, including the author, number of pages, and rating (string) as "Title: <TITTLE>, Author: <AUTHOR>, Year: <YEAR>, Page Count: <NUM_PAGES>, Genre: <GENRE>, Rating: <RATING>"
// The Book class should have a static method highestRating that takes an array of Book items and returns the Book with the highest rating.
// Export the Book class using module.exports.

// In index.js, import Book using require.

class Book extends Media {

     constructor(author, numPages, rating, title, year, genre){
        super(title, year, genre)
           this.author = author
           this.numPages = numPages
           this.rating = rating
           
       }
      
   
       summary(){
           return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
       }

       static highestRating(books){

        let highest = books[0]

        for(let i=0; i< books.length; i++){
            if(books[i].rating > highest.rating){
                highest = books[i]
            }
        }
        return highest

       }
       
   }
   



// don't change below
module.exports = Book;
