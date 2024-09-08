import React,{useState} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Data from "../data.json";
import view from "../assets/shared/icon-view-image.svg";
import next from "../assets/shared/icon-next-button.svg";
import prev from "../assets/shared/icon-back-button.svg";
import { imageMap, imagelarge } from './importimages';

const Profile = () => {
  const { name } = useParams();
  const navigate=useNavigate();
  const index = Data.findIndex((record) => record.name === name);
  const record=Data[index];

   const artistImage = imageMap[record.name];
  const Largeimage = imagelarge[record.name];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Nexthandler=()=>{
    const next=(index+1)%Data.length;
    navigate(`/profile/${Data[next].name}`);
  }
  const prevhandler=()=>{
    let prev = index - 1;
  if (prev < 0) {
    prev = Data.length - 1; 
  }

    navigate(`/profile/${Data[prev].name}`);
  }
  const handleViewImage = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
    <div className="profile-container flex p-6 flex-col xl:flex-row md:justify-between">
      <div
        className="profile-image bg-cover pt-[86%] bg-no-repeat bg-top md:w-[475px] md:ml-10 md:h-[560px] md:mb-16 md:pt-0 relative "
        style={{
          backgroundImage: `url(${Largeimage})`,
        }}>
        <div className="name p-6 w-[250px] left-[-1px] bottom-[-20px] cursor-pointer md:order-2 md:pb-4 md:w-[445px] md:h-[300px] md:p-2 absolute md:top-[-1px] md:left-[250px] overflow-visible bg-white">
          <div className="text-2xl md:text-6xl font-bold p-3">{record.name}</div>
          <div className="text-lg text-darkGray pl-4">{record.artist.name}</div>
        </div>
        <div className="artistimage hover:bg-darkGray absolute md:top-[250px] left-0 md:left-[500px] bottom-[-150px] w-[128px]">
          <img  src={artistImage} alt={record.name} />
        </div> <button onClick={handleViewImage}>
        <div className="View cursor-pointer flex text-md justify-center items-center absolute top-4 left-4  text-white bg-black p-4 tracking-custom">
          <img src={view} alt="View Icon" className="mr-[14px] h-3 w-3"/>VIEW IMAGE
          </div>
         </button>
      </div>
      <div className="artist-details relative xl:flex-[0_0_50%]">
        <p className=" text-gray-100 absolute left-[150px] top-[50px] text-7xl font-bold md:left-[200px] md:top-0 md:text-[13rem] md:text-opacity-70 -z-10 xl:right-0">
           {record.year}</p> 
        <p className="text-sm font-bold text-gray-500 pt-[180px] md:pl-[150px] md:pt-[140px] md:text-lg md:pr-[150px] xl:pt-[115px]">
          {record.description}</p>
       
        <div className="source text-sm md:text-lg mt-[40px] mb-[67px] md:ml-[150px] text-gray-500">
          <a href={record.source} className="underline">
            Go to source
          </a>
        </div>
      </div>  
      </div>
      <div className="border-t flex justify-between">
      <div className="name p-6 cursor-pointer md:pb-4 md:p-2">
          <div className="text-md md:text-xl font-bold p-3">{record.name}</div>
          <div className="text-md text-darkGray pl-4">{record.artist.name}</div>
        </div>
        <div className='mt-6 flex justify-end gap-4 ml-9 mr-9'>
      <button onClick={prevhandler}>
        <img src={prev}/>
      </button>
      <button onClick={Nexthandler}>
      <img src={next}/>
      </button>
      </div>
      </div>
      {isModalOpen && (
      <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center">
        <div className="modal-content mx-w-md md:max-w-lg p-6">
          <img src={Largeimage} alt={record.name} className="w-full h-full object-cover" />
          <button onClick={handleCloseModal} className="absolute top-4 right-4 text-white text-xl">
            X
          </button>
        </div>
      </div>
    )}
  </div>
  );
};

export default Profile;
