export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Learning React: Modern Patterns for Developing React Apps',
      author: 'Alex Banks',
      price: 36.49,
      coverImage: 'https://m.media-amazon.com/images/I/91uFdkCJmAL._AC_UY436_QL65_.jpg'
    },
    {
      id: 2,
      title: 'The Road to React: Your journey to master plain yet pragmatic React.js',
      author: 'Robin Wieruch',
      price: 29.99,
      coverImage: 'https://m.media-amazon.com/images/I/51oZCDb0JNL._AC_UY436_QL65_.jpg'
    },
    {
      id: 3,
      title: 'React: Functional Web Development',
      author: 'Alex Banks',
      price: 49.99,
      coverImage: 'https://m.media-amazon.com/images/I/7169mYAhsmL._AC_UY436_QL65_.jpg'
    },
    {
      id: 4,
      title: 'Learning React: A Hands-On Guide to Building Web Applications',
      author: 'Kirupa Chinnathambi ',
      price: 17.27,
      coverImage: 'https://m.media-amazon.com/images/I/51bBG0BOZwL._AC_UY436_QL65_.jpg'
    },
    {
      id: 5,
      title: 'Fullstack React: The Complete Guide to ReactJS and Friends',
      author: 'Anthony Accomazzo,',
      price: 59.88,
      coverImage: 'https://m.media-amazon.com/images/I/71Yd2ACrDcL._AC_UY436_QL65_.jpg'
    },
    {
      id: 6,
      title: 'Production-Ready Microservices by Susan J. Fowler ',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    }
    
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
        reject(new Error('OOpps'))
        
      },1000);
    });
  }
}