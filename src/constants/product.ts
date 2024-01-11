import Shirt1 from './../assets/img/one-life-graphic-t-shirt.png'

export const productInfo = [
  {
    id: 1,
    title: 'One Life Graphic T-shirt',
    image: Shirt1,
    rating: 4.5,
    totalCost: 260,
    initialCost: 300,
    discount: 40,
    description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    colors: [
      {
        id: 1, color: '#4F4631', selected: true
      },
      {
        id: 2, color: '#314F4A', selected: false
      },
      {
        id: 3, color: '#31344F', selected: false
      }
    ],
    sizes: ['Small', 'Medium', 'Large', 'X-Large',]
  },
];
