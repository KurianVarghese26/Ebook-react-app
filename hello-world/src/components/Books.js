import React from 'react';


function Books() {
  const bookNames = [
    {
      name: 'Atomic Habits',
      image: 'https://m.media-amazon.com/images/I/81F90H7hnML.jpg',
      address: 'https://drive.google.com/file/d/1DKpNNiwRQvEYINKo9taVr2C1kO4hMSlh/view?usp=drive_link'
    },
    {
      name: 'The Psychology of Money',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBVkSObL-MkUQI07gh3dHX7BFIrz4GX0Vfw&s',
      address: 'https://drive.google.com/file/d/1D2WUNHo5f7EQTr49EtwLgxRfZ4mTOi6f/view?usp=sharing'
    },
    {
      name: 'Rich Dad Poor Dad',
      image: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._UF1000,1000_QL80_.jpg',
      address: 'https://drive.google.com/file/d/1DDD1MIlXkmhct3tTFq6UFMw9LzuDKsHW/view?usp=sharing'
    },
    {
      name: '48 Laws of Power',
      image: 'https://m.media-amazon.com/images/I/61J3Uu4jOLL.jpg',
      address: 'https://drive.google.com/file/d/1iVpKIt9U1qypNadWNJgPyrKQ9sMIKvZQ/view?usp=sharing'
    },
    {
      name: '48 Laws of Power',
      image: 'https://m.media-amazon.com/images/I/61J3Uu4jOLL.jpg',
      address: 'https://drive.google.com/file/d/1iVpKIt9U1qypNadWNJgPyrKQ9sMIKvZQ/view?usp=sharing'
    },
     {
      name: '48 Laws of Power',
      image: 'https://m.media-amazon.com/images/I/61J3Uu4jOLL.jpg',
      address: 'https://drive.google.com/file/d/1iVpKIt9U1qypNadWNJgPyrKQ9sMIKvZQ/view?usp=sharing'
    },
     {
      name: '48 Laws of Power',
      image: 'https://m.media-amazon.com/images/I/61J3Uu4jOLL.jpg',
      address: 'https://drive.google.com/file/d/1iVpKIt9U1qypNadWNJgPyrKQ9sMIKvZQ/view?usp=sharing'
    },
     {
      name: '48 Laws of Power',
      image: 'https://m.media-amazon.com/images/I/61J3Uu4jOLL.jpg',
      address: 'https://drive.google.com/file/d/1iVpKIt9U1qypNadWNJgPyrKQ9sMIKvZQ/view?usp=sharing'
    },
     {
      name: '48 Laws of Power',
      image: 'https://m.media-amazon.com/images/I/61J3Uu4jOLL.jpg',
      address: 'https://drive.google.com/file/d/1iVpKIt9U1qypNadWNJgPyrKQ9sMIKvZQ/view?usp=sharing'
    }
];

  return (
    <div>
      {bookNames.map((book, index) => (
        <div className="books" key={index}>
    <img src={book.image}></img><a href={book.address} >{book.name}</a>
    </div>
      ))}
    </div>
  );
}

export default Books;