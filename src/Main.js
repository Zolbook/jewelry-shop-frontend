
import './index.css';

import Card from './Card';
import {useState, useContext} from 'react'
import { DataContext } from './Context';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Main () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,  
        autoplaySpeed: 4300, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const {products} = useContext(DataContext)
  const [search, setSearch] = useState('');
  const [searchColor, setSearchColor] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const filteredProduct = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (searchColor === '' || product.colors.map(color => color.toLowerCase()).includes(searchColor.toLowerCase())) &&
    (minPrice === '' || product.price >= parseFloat(minPrice)) &&
    (maxPrice === '' || product.price <= parseFloat(maxPrice))
  );
  return (
    <div>
      <div className="fields flex flex-wrap justify-center gap-3 my-2">
        <input
          placeholder="Нэрээр хайх"
          type="text"
          id="search"
          className="w-full md:w-auto px-4 py-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-80"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="w-full md:w-auto px-4 py-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-80"
          onChange={(e) => setSearchColor(e.target.value)}
        >  
          <option value="">Өнгө сонгох</option>
          <option value="pink">pink</option>
          <option value="aqua">aqua</option>
          <option value="green">green</option>
          <option value="violet">violet</option>
          <option value="orange">orange</option>
        </select>
        <input
          type="number"
          placeholder="Доод үнэ"
          className="w-full md:w-auto px-4 py-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          onChange={(e) => setMinPrice(e.target.value)}
        />  
        <input
          type="number"
          placeholder="Дээд үнэ"
          className="w-full md:w-auto px-4 py-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <ul>
        <Slider {...settings}>
          {filteredProduct.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </Slider>
      </ul>
    </div>   
  )
}  