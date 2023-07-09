import { useEffect, useState } from "react";

interface ProjectValues{
  onClose: () => void;
  thumbnail: string;
  imageUrls: string[];
  isInteractive?: boolean;
  demoUrl?: string;
  title: string;
}

function Modal({onClose, title, thumbnail, imageUrls, isInteractive, demoUrl}: ProjectValues) {
  const [left, setLeft] = useState("full");

  const handleClose = () => {
    setLeft(prevLeft => (prevLeft === "full" ? '0' : 'full'));
    // setTimeout(() => {
    // }, 2000)
      onClose();
  };

  useEffect(() => {
    setLeft('0');
  },[]);

  return (
    <div className={`modal fixed z-20 top-0 left-${left} w-full min-h-screen h-full overflow-scroll`}>
      <div className="grid grid-cols-12 md:grid-cols-9">
        <div className="col-span-1 bg-transparent"></div>
        <div className="col-span-11 md:col-span-8 bg-neutral-900 min-h-screen">
          <div className="max-w-5xl 2xl:max-w-6xl mx-auto py-10 px-5 sm:px-10">
            <p onClick={handleClose} className="cursor-pointer mb-10 border-2 border-t-transparent border-l-transparent border-r-transparent inline-block pb-1 text-white">Back</p>
            <div className="text-left">
              <div className="mb-10">
                <h4 className="text-3xl font-display text-white">{title}</h4>
                {demoUrl && (
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-5 bg-green-600 hover:bg-green-700 py-2 px-5 text-white rounded">
                    View Demo
                  </a>
                )}
              </div>
              {imageUrls && imageUrls.length > 0 ?(
                imageUrls.map((url, index) => (
                  <div key={index} className="mb-5"><img src={url} className="" alt={`${title} screen ${index+1}`} /></div>
                ))
              ):(
                <img src={thumbnail} alt="Selected Thumbnail" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
