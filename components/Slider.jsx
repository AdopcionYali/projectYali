import Carousel from 'react-elastic-carousel';

let posts = [
  {
      id: 1,
      name: 'Perrito',
      image: 'Brand Name',
      characteristics: 'sociable'
  },
  {
      id: 2,
      name: 'Perrito',
      image: 'Brand Name',
      characteristics: 'sociable'
  },
  {
      id: 3,
      name: 'Perrito',
      image: 'Brand Name',
      characteristics: 'sociable'
  },
  {
      id: 4,
      name: 'Perrito',
      image: 'Brand Name',
      characteristics: 'sociable'
  },
  {
      id: 5,
      name: 'Perrito',
      image: 'Brand Name',
      characteristics: 'sociable'
  },
  {
      id: 6,
      name: 'Perrito',
      image: 'Brand Name',
      characteristics: 'sociable'
  },
  {
      id: 7,
      name: 'Perrito',
      image: 'Brand Name',
      characteristics: 'sociable'
  },
  {
      id: 8,
      name: 'Perrito',
      image: 'Brand Name',
      characteristics: 'sociable'
  },
  {
      id: 9,
      name: 'Perrito',
      image: 'Brand Name',
      characteristics: 'sociable'
  }
];





const Slider = () => {
  const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 1, itemsToScroll: 2 },
      { width: 768, itemsToShow: 4 },
      { width: 1200, itemsToShow: 4 }
    ];
   
    
          
  return (
      <div className='row mx-4 mt-4' >
          
             
              <Carousel breakPoints={breakPoints} className='mb-5'>
                      {posts && posts.length > 0
                          ? posts.map((post) => {
                              return (
                                  <div
                                     

                                      key={post.id}
                                  >
                                      <div className='card post  '>


                                          
                                              <img className='card-img-top'
                                                  src='https://hips.hearstapps.com/hmg-prod/images/closeup-of-a-black-russian-tsvetnaya-bolonka-royalty-free-image-1681161235.jpg?crop=0.563xw:1.00xh;0.204xw,0&resize=1200:*'
                                                  alt={post.name}
                                                  title={post.name}
                                              />
                                              <div className='card-title ms-3 mt-3'>

                                              <h5 >{post.name}</h5>
                                              <p >
                                                  {post.characteristics}
                                              </p>
                                              </div>
                                         


                                      </div>
                                  </div>
                              );
                          })
                          : ''}
                  </Carousel>
              
          </div>
     
  );
};
export default Slider;

