import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../data.json';
import { theimage } from './importimages';

const Gallery = () => {
  return (
    <div id="galleryContainer" className="grid grid-cols-1 my-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-10 md:pl-0 md:pr-0">
      {Data.map((record) => {
        return (
          <div key={record.name} id={record.name}  className="galleryCar">
            
           <Link to={`/profile/${record.name}`}>
           <button className="flex text-white uppercase py-[10px] hover:opacity-75 transform hover:translate-x-2 opacity-100 transition duration-300 ease-out">
                <div id="imgButtonContainer" className="mr-[10px]">
                <img src={theimage[record.name]} alt={record.artist.name}/>
                </div>
              </button>
            </Link>.
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
