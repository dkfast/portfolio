import { useState, useEffect } from 'react';
import SectionTemplate from './SectionTemplate';
import Modal from './Modal';

interface ProjectValues{
  thumbnail: string;
  imageUrls?: string[];
  demoUrl?: string;
  title: string;
}

const projects = {
  interactives: [
    {
      title: 'CopyPress.com Main Site',
      thumbnail: '/Past_Work_Archive/CopyPress/copypress/thumbnail.png',
      demoUrl: 'https://www.copypress.com',
    },
    {
      title: 'Sunshine Properties',
      thumbnail: '/demo/sunshine/thumbnail.png',
      demoUrl: '/demo/sunshine/',
    },
    {
      title: 'Home Depot Space Saver',
      thumbnail: '/Past_Work_Archive/CopyPress/homedepot/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/homedepot/',
    },
    {
      title: 'IHG Interactive Map',
      thumbnail: '/Past_Work_Archive/CopyPress/ihg/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/ihg/',
    },
    {
      title: 'Homes.com Road Trip Planner',
      thumbnail: '/Past_Work_Archive/CopyPress/ipullrank/homes/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/ipullrank/homes/',
    },
    {
      title: 'TinyPrints Decore Through Time',
      thumbnail: '/Past_Work_Archive/CopyPress/ipullrank/tinyprints/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/ipullrank/tinyprints/',
    },
    {
      title: 'LearnVest Best Money Life',
      thumbnail: '/Past_Work_Archive/CopyPress/learnvest/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/learnvest/',
    },
    {
      title: 'Fintech in Puerto Rico',
      thumbnail: '/Past_Work_Archive/CopyPress/lhmr/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/lhmr/',
    },
    {
      title: 'Merry Maids - Our Cleaning Process',
      thumbnail: '/Past_Work_Archive/CopyPress/merrymaids/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/merrymaids/',
    },
    {
      title: 'MeUndies Naughty or Nice',
      thumbnail: '/Past_Work_Archive/CopyPress/meundies/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/meundies/',
    },
    {
      title: 'Netsurf Learning Blackjack',
      thumbnail: '/Past_Work_Archive/CopyPress/netsurf/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/netsurf/',
    },
    {
      title: 'oDesk - Impact of Online Work',
      thumbnail: '/Past_Work_Archive/CopyPress/odesk/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/odesk/',
    },
    {
      title: 'ofo - The Impact of Bike Commuting',
      thumbnail: '/Past_Work_Archive/CopyPress/ofo/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/ofo/',
    },
    {
      title: 'SkyScanner Best Time to Book',
      thumbnail: '/Past_Work_Archive/CopyPress/skyscanner/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/skyscanner/',
    },
    {
      title: 'Solvable - Tax Calculator',
      thumbnail: '/Past_Work_Archive/CopyPress/solvable/calculator/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/solvable/calculator/',
    },
    {
      title: 'Solvable - Debt Checkup',
      thumbnail: '/Past_Work_Archive/CopyPress/solvable/debtcheckup/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/solvable/debtcheckup/',
    },
    {
      title: 'Thomas Cook - Love is in the Airlines',
      thumbnail: '/Past_Work_Archive/CopyPress/thomascook/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/thomascook/',
    },
    {
      title: 'TripAdvisor Impact',
      thumbnail: '/Past_Work_Archive/CopyPress/tripadvisor/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/tripadvisor/',
    },
    {
      title: 'VSE - Archetype Quiz',
      thumbnail: '/Past_Work_Archive/CopyPress/vse/archetype/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/vse/archetype/',
    },
    {
      title: 'VSE - Oracle',
      thumbnail: '/Past_Work_Archive/CopyPress/vse/oracle/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/vse/oracle/',
    },
    {
      title: 'VSE - Tarot Card Reading',
      thumbnail: '/Past_Work_Archive/CopyPress/vse/tarot/thumbnail.png',
      demoUrl: '/Past_Work_Archive/CopyPress/vse/tarot/',
    }
  ],
  web:[
    {
      title: 'CopyPress Content Analysis Tool',
      thumbnail: '/Past_Work_Archive/design/web/cat/cga.png',
      imageUrls: [
        '/Past_Work_Archive/design/web/cat/cga.png',
        '/Past_Work_Archive/design/web/cat/ytk.png'
      ],
    },
    {
      title: 'CopyPress Blog',
      thumbnail: '/Past_Work_Archive/design/web/copypress/main.png',
      imageUrls: [
        '/Past_Work_Archive/design/web/copypress/main.png',
        '/Past_Work_Archive/design/web/copypress/services.png',
        '/Past_Work_Archive/design/web/copypress/archive.png',
        '/Past_Work_Archive/design/web/copypress/single.png'
      ],
    },
    {
      title: 'National Kidney Foundation Donate',
      thumbnail: '/Past_Work_Archive/design/web/nkf.jpg',
      imageUrls: [
        '/Past_Work_Archive/design/web/nkf.jpg'
      ],
    },
    {
      title: 'Louise Heite',
      thumbnail: '/Past_Work_Archive/design/web/heite.jpg',
      imageUrls: [
        '/Past_Work_Archive/design/web/heite.jpg'
      ],
    },
    {
      title: 'Sunshine Properties',
      thumbnail: '/Past_Work_Archive/design/web/sunshine.jpg',
      imageUrls: [
        '/Past_Work_Archive/design/web/sunshine.jpg'
      ],
    },
    {
      title: 'LikelyTo Concept',
      thumbnail: '/Past_Work_Archive/design/web/likelyTo.png',
      imageUrls: [
        '/Past_Work_Archive/design/web/likelyTo.png'
      ],
    },
    {
      title: 'Florida Cracker Kitchen - Fishing Tournament',
      thumbnail: '/Past_Work_Archive/design/web/fck/home.png',
      imageUrls: [
        '/Past_Work_Archive/design/web/fck/home.png',
        '/Past_Work_Archive/design/web/fck/sponsors.png',
        '/Past_Work_Archive/design/web/fck/lodging.png',
        '/Past_Work_Archive/design/web/fck/events.png'
      ],
    },
    {
      title: 'Welcome to Homosassa',
      thumbnail: '/Past_Work_Archive/design/web/homosassa/home.png',
      imageUrls: [
        '/Past_Work_Archive/design/web/homosassa/home.png',
        '/Past_Work_Archive/design/web/homosassa/history.png',
        '/Past_Work_Archive/design/web/homosassa/locations.png'
      ],
    },
    {
      title: 'Millie Kylas',
      thumbnail: '/Past_Work_Archive/design/web/millie/home.png',
      imageUrls: [
        '/Past_Work_Archive/design/web/millie/home.png',
        '/Past_Work_Archive/design/web/millie/menu.png',
        '/Past_Work_Archive/design/web/millie/history.png'
      ],
    },
    {
      title: 'Shop4Good Non-profit',
      thumbnail: '/Past_Work_Archive/design/web/nonprofit/humane-main.jpg',
      imageUrls: [
        '/Past_Work_Archive/design/web/nonprofit/humane-main.jpg',
        '/Past_Work_Archive/design/web/nonprofit/stmartins-main.jpg',
        '/Past_Work_Archive/design/web/nonprofit/angels-hero.jpg',
        '/Past_Work_Archive/design/web/nonprofit/marist-hero.jpg',
        '/Past_Work_Archive/design/web/nonprofit/ymca-main.jpg'
      ],
    },
    {
      title: 'Shop4Good',
      thumbnail: '/Past_Work_Archive/design/web/shop4good/landingpage.jpg',
      imageUrls: [
        '/Past_Work_Archive/design/web/shop4good/landingpage.jpg',
        '/Past_Work_Archive/design/web/shop4good/hero04.jpg',
        '/Past_Work_Archive/design/web/shop4good/hero05.jpg',
        '/Past_Work_Archive/design/web/shop4good/hero06.jpg'
      ],
    }
  ],
  misc: [
    {
      title: 'Big Storm Trivia',
      thumbnail: '/Past_Work_Archive/design/posters/bigstorm.png',
    },
    {
      title: 'Angry Pepper',
      thumbnail: '/Past_Work_Archive/design/posters/angrypepper.png',
    },
    {
      title: 'Breakroom',
      thumbnail: '/Past_Work_Archive/design/posters/breakroom.png',
    },
    {
      title: 'Canal Boat Halloween',
      thumbnail: '/Past_Work_Archive/design/posters/canalboathalloween.png',
    },
    {
      title: 'Canal Boat Chili Cookoff',
      thumbnail: '/Past_Work_Archive/design/posters/canalboatcookoff.png',
    },
    {
      title: 'Pesky Pelican',
      thumbnail: '/Past_Work_Archive/design/posters/peskypelican.png',
    },
    {
      title: 'Canal Boat Logo',
      thumbnail: '/Past_Work_Archive/design/logos/boat.png',
    },
    {
      title: 'BloodLust Social Logo',
      thumbnail: '/Past_Work_Archive/design/logos/blust.png',
    },
    {
      title: `Gavin's Lawncare Logo`,
      thumbnail: '/Past_Work_Archive/design/logos/gavin.png',
    }
  ],
}

function Work() {
  const [thumbnail, setThumbnail] = useState('');
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [demoUrl, setDemoUrl] = useState('');
  const [title, setTitle] = useState('');

  const handleThumbnailClick = ({thumbnail, imageUrls, demoUrl, title}: ProjectValues) => {
    setThumbnail(thumbnail);
    setDemoUrl(demoUrl || '');
    setTitle(title);
    setImageUrls(imageUrls || []);
  };

  const closeModal = () => {
    setThumbnail("");
    setImageUrls([]);
  }

  useEffect(() => {
    if(thumbnail) {
      document.body.classList.add("modal-open");
    }else{
      document.body.classList.remove('modal-open');
    }
  }, [thumbnail])

  return (
    <SectionTemplate heading="Work">
      {thumbnail && <Modal onClose={closeModal} title={title} thumbnail={thumbnail} imageUrls={imageUrls} demoUrl={demoUrl} />}
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-5 sm:px-10">
        <h2 className="text-3xl text-orange-500 mb-5 font-display">Work</h2>
        <h3 className="text-3xl text-white mb-10 font-display">Interactive Experiences</h3>
        <div className="work-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          {projects.interactives.map((element, index) => (
            <div key={index} onClick={() => handleThumbnailClick(element)}>
              <img
                src={element.thumbnail}
                alt={element.title}
              />
            </div>
          ))}
        </div>
        <h3 className="text-3xl text-white mb-10 font-display">Web Design</h3>
        <div className="work-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          {projects.web.map((element, index) => (
            <div key={index} onClick={() => handleThumbnailClick(element)}>
              <img
                src={element.thumbnail}
                alt={element.title}
              />
            </div>
          ))}
        </div>
        <h3 className="text-3xl text-white mb-10 font-display">Misc. Design</h3>
        <div className="work-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {projects.misc.map((element, index) => (
            <div key={index} onClick={() => handleThumbnailClick(element)}>
              <img
                src={element.thumbnail}
                alt={element.title}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Work;
