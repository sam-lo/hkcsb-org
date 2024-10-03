// config/cloudinaryConfig.ts
import { Cloudinary } from 'cloudinary-core';

const cloudinaryConfig = {
  cloud_name: 'dvydi3cud',
  api_key: '144726197151559',
  api_secret: '5qfddktgouFO9cvn3FL4fkyaYw0',
  secure: true
};

const cloudinary = new Cloudinary(cloudinaryConfig);

export { cloudinary, cloudinaryConfig };