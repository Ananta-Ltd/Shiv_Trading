"use client"
import { useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import toast from 'react-hot-toast';

function Signup1() {
  const [selectedTilesFiles, setSelectedTilesFiles] = useState([]);
  const [selectedCPFittingsFiles, setSelectedCPFittingsFiles] = useState([]);
  const [selectedGranite_MarbleFiles, setSelectedGranite_MarbleFiles] = useState([]);
  const [selectedFinishedFiles, setSelectedFinishedFiles] = useState([]);
  const [product, setProduct] = useState('');
  const [size, setSize] = useState('');
  const [room, setRoom] = useState('');
  const [description, setDescription] = useState('');
  const [tranding, setTranding] = useState('');
  const [fitting_name, setFitting_name] = useState('');
  const [granite, setGranite] = useState('');
  const [graniteSize, setGraniteSize] = useState('');
  const [plan, setPlan] = useState('');
  const { data: session } = useSession();
  const token = session?.user.token;

  const handleTilesFileChange = (event) => {
    const files = event.target.files;
    setSelectedTilesFiles(Array.from(files));
  };

  const handleCPFittingFileChange = (event) => {
    const files = event.target.files;
    setSelectedCPFittingsFiles(Array.from(files));
  };

  const handleGranite_MarbleFileChange = (event) => {
    const files = event.target.files;
    setSelectedGranite_MarbleFiles(Array.from(files));
  };

  const handleFinishedFileChange = (event) => {
    const files = event.target.files;
    setSelectedFinishedFiles(files);
  };

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleRoomChange = (event) => {
    setRoom(event.target.value);
  };

  const fitting_nameChange = (event) => {
    setFitting_name(event.target.value);
  };

  const handleGraniteChange = (event) => {
    setGranite(event.target.value);
  };

  const handlegraniteSizeChange = (event) => {
    setGraniteSize(event.target.value);
  };

  const handlePlanChange = (event) => {
    setPlan(event.target.value);
  };

  const handleTranding = (event) => {
    setTranding(event.target.value);
  }

  const handleUploadTiles = async () => {
    if (selectedTilesFiles.length > 0) {
      // Perform the upload logic here
      console.log('Uploading files:', selectedTilesFiles[0]);
      console.log('Product:', product);
      console.log('Size:', size);
      console.log('Room:', room);
      console.log('Tranding:', tranding);
      console.log('Description:', description);

      const config = {
        headers: {
          maxBodyLength: Infinity,
          Authorization: `Bearer ${token}`,
        }
      };

      const formData = new FormData();
      formData.append('up_photo', selectedTilesFiles[0]);
      formData.append('description', description)

      await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/upload/tiles/photos/?product=${product}&size=${size}&room=${room}&trending=${tranding}`,
        formData,
        config
      )
        .then(response => {
          console.log(response.data);
          setSelectedTilesFiles([]);
          toast.success('Product uploaded successfully!');
        })
        .catch(error => {
          console.log(error);
          toast.error('Error uploading product: ' + error.message);
        });

    } else {
      console.log('No files selected.');
    }


  }

  const handleUploadCPFittings = async () => {
    if (selectedCPFittingsFiles.length > 0) {
      // Perform the upload logic here
      console.log('Uploading files:', selectedCPFittingsFiles);
      console.log('fitting_name:', fitting_name);
      const product = "Sanitary and CP Fittings";
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        }
      };
      const formData = new FormData();
      formData.append("up_photo", selectedCPFittingsFiles[0]);
      formData.append('description', description)

      await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/upload/cpfittings/photos/?product=${product}&fitting_name=${fitting_name}`,
        formData,
        config
      )
        .then(response => {
          console.log(response.data);
          setSelectedCPFittingsFiles([]);
          toast.success('Product uploaded successfully!');
        })
        .catch(error => {
          console.log(error);
          toast.error('Error uploading product: ' + error.message);
        });
    } else {
      console.log('No files selected.');
    }
  };

  const handleGranite_MarbleUpload = async () => {
    if (selectedGranite_MarbleFiles.length > 0) {
      // Perform the upload logic here
      console.log('Uploading files:', selectedGranite_MarbleFiles);
      console.log('granite:', granite);
      console.log('graniteSize:', graniteSize);
      const product = "Granite and Marbles";
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        }
      };
      const formData = new FormData();
      formData.append("up_photo", selectedGranite_MarbleFiles[0]);
      formData.append('description', description);

      await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/upload/granite&marble/photos/?product=${product}&granite=${granite}&thick=${graniteSize}&trending=${tranding}`,
        formData,
        config
      )
        .then(response => {
          console.log(response.data);
          setSelectedGranite_MarbleFiles([]);
          toast.success('Product uploaded successfully!');
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log('No files selected.');
      toast.error('Error uploading product: ' + error.message);
    }
  };

  const handleFinishedUpload = async () => {

    // Perform the upload logic here
    console.log('Uploading files:', selectedFinishedFiles);
    console.log('Plan:', plan);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      }
    };
    const formData = new FormData();
    formData.append("up_photo", selectedFinishedFiles[0]);
    formData.append('description', description);

    await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/upload/finish/photos/?plan=${plan}`,
      formData,
      config
    )
      .then(response => {
        console.log(response.data)
        setSelectedFinishedFiles([]);
        toast.success('Product uploaded successfully!');
      })
      .catch(error => {
        console.log(error);
        toast.error('Error uploading product: ' + error.message);
      });

  };


  return (
    <div className=' bg-gray-200 w-full min-h-screen'>
      {/* Upload Tiles */}
      <div className='flex justify-center pt-20'>
        <label
          htmlFor="uploadTilesButton"
          className='flex-col bg-green-200 border-2 border-green-600 w-[80%] rounded-md shadow-md px-4 py-3 font-bold'>
          Upload tiles photo
          <input
            type="file"
            accept="image/*"
            onChange={handleTilesFileChange}
            className="hidden"
            id="uploadTilesButton"
            multiple // Enable multiple file selection
          />
        </label>
      </div>
      <div className='w-[80%] ml-[10%]'>
        {selectedTilesFiles.length > 0 && (
          <div className="mt-2">
            <select
              value={product}
              onChange={handleProductChange}
              className="w-full px-4 py-2 mb-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a product</option>
              <option value="Wall Tiles">Wall Tiles</option>
              <option value="Floor Tiles">Floor Tiles</option>
            </select>
            <select
              value={size}
              onChange={handleSizeChange}
              className="w-full px-4 py-2 mb-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a size</option>
              <option value="12×18inch">12×18 inch</option>
              <option value="24×12inch">24×12 inch</option>
              <option value="24×24inch">24×24 inch</option>
              <option value="24×48inch">24×48 inch</option>
              <option value="12×12inch">12×12 inch</option>
              <option value="16×16inch">16×16 inch</option>
              <option value="32×32inch">32×32 inch</option>
              <option value="32×64inch">32×64 inch</option>
            </select>
            <select
              value={room}
              onChange={handleRoomChange}
              className="w-full px-4 py-2 mb-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a room</option>
              <option value="Bathroom">Bathroom</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Livingroom">Living Room</option>
              <option value="Outdoor">Outdoor</option>
            </select>
            <textarea
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder='Description'
              rows="4"
              value={description}
              onChange={handleDescription}
            />
            <select
              value={tranding}
              onChange={handleTranding}
              className="w-full px-4 py-2 mb-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Do you want to keep this photo on tranding section?</option>
              <option value="True">Yes</option>
              <option value="False">No</option>
            </select>
            <button
              onClick={handleUploadTiles}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-950"
            >
              Upload
            </button>
          </div>
        )}
      </div>

      {/* Upload sanitary and cpfittings */}
      <div className='flex justify-center pt-5'>
        <label htmlFor="uploadCPFittingsButton" className='flex-col bg-green-200 border-2 border-green-600 w-[80%] rounded-md shadow-md px-4 py-3 font-bold'> Upload Cpfittings Photos
          <input
            type="file"
            accept="image/*"
            onChange={handleCPFittingFileChange}
            className="hidden"
            id="uploadCPFittingsButton"
            multiple // Enable multiple file selection
          />
        </label>
      </div>
      <div className='w-[80%] ml-[10%]'>
        {selectedCPFittingsFiles.length > 0 && (
          <div className="mt-2">
            <select
              value={fitting_name}
              onChange={fitting_nameChange}
              className="w-full px-4 py-2 mb-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a fitting name</option>
              <option value="Single Piece Basin">Single Piece Basin</option>
              <option value="Two Piece Basin">Two Piece Basin</option>
              <option value="Counter Basin">Counter Basin</option>
              <option value="Wall Hung Commote">Wall Hung Commote</option>
              <option value="Double Vacuum Commote">Double Vacuum Commote</option>
              <option value="Single Vacuum Commote">Single Vacuum Commote</option>
            </select>
            <textarea
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder='Description'
              rows="4"
              value={description}
              onChange={handleDescription}
            />
            <select
              value={tranding}
              onChange={handleTranding}
              className="w-full px-4 py-2 mb-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Do you want to keep this photo on tranding section?</option>
              <option value="True">Yes</option>
              <option value="False">No</option>
            </select>

            <button
              onClick={handleUploadCPFittings}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-950"
            >
              Upload
            </button>
          </div>
        )}
      </div>

      {/* Upload granite and marble */}
      <div className='flex justify-center pt-5'>
        <label htmlFor="uploadGranite_MarbleButton" className='flex-col bg-green-200 border-2 border-green-600 w-[80%] rounded-md shadow-md px-4 py-3 font-bold'> Upload granite and marble photo
          <input
            type="file"
            accept="image/*"
            onChange={handleGranite_MarbleFileChange}
            className="hidden"
            id="uploadGranite_MarbleButton"
            multiple
          />
        </label>
      </div>
      <div className='w-[80%] ml-[10%]'>
        {selectedGranite_MarbleFiles.length > 0 && (
          <div className="mt-2">
            <select
              value={granite}
              onChange={handleGraniteChange}
              className="w-full px-4 py-2 mb-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a granite</option>
              <option value="Rajasthani">Rajasthani</option>
              <option value="South Indian">South Indian</option>
              <option value="North Indian">North Indian</option>
            </select>

            <select
              value={graniteSize}
              onChange={handlegraniteSizeChange}
              className="w-full px-4 py-2 mb-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a thickness</option>
              <option value="11mm">11 mm </option>
              <option value="13mm">13 mm </option>
              <option value="15mm">15 mm </option>
              <option value="18mm">18 mm </option>
            </select>
            <textarea
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder='Description'
              rows="4"
              value={description}
              onChange={handleDescription}
            />
            <select
              value={tranding}
              onChange={handleTranding}
              className="w-full px-4 py-2 mb-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Do you want to keep this photo on tranding section?</option>
              <option value="True">Yes</option>
              <option value="False">No</option>
            </select>

            <button
              onClick={handleGranite_MarbleUpload}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-950"
            >
              Upload
            </button>
          </div>
        )}
      </div>

      <div className='flex justify-center pt-5'>
        <label htmlFor="uploadFinishedButton" className='flex-col bg-green-200 border-2 border-green-600 w-[80%] rounded-md shadow-md px-4 py-3 font-bold'>
          Upload Finished Photos
          <input
            type="file"
            accept="image/*"
            onChange={handleFinishedFileChange}
            className="hidden"
            id="uploadFinishedButton"
            multiple // Enable multiple file selection
          />
        </label>
      </div>
      <div className='w-[80%] ml-[10%]'>
        {selectedFinishedFiles.length > 0 && (
          <div className="mt-2">
            <select
              value={plan}
              onChange={handlePlanChange}
              className="w-full px-4 py-2 mb-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a plan</option>
              <option value="Basic">Basic</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
            </select>
            <textarea
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder='Description'
              rows="4"
              value={description}
              onChange={handleDescription}
            />
            <button
              onClick={handleFinishedUpload}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-950"
            >
              Upload
            </button>
          </div>
        )}
      </div>
      <div className='flex justify-center pt-5 pb-20'>
        <label htmlFor="uploadsignuoButton" className='flex-col bg-blue-200 border-2 border-blue-600 w-[80%] rounded-md shadow-md px-4 py-3 font-bold'>
          <Link href='admin/signup'>Signup for Users</Link>
        </label>
      </div>
    </div>
  );
}
export default Signup1;