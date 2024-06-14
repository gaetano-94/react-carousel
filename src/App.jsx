// IMPORT
import Card from './components/Card';
import { useState, useEffect } from 'react';
import {
  FaCircleArrowLeft,
  FaCircleArrowRight,
  FaCircle,
} from 'react-icons/fa6';

// import image
import forestaImage from './assets/img/foresta.jpg';
import giapponeImage from './assets/img/giappone.jpg';
import newyorkImage from './assets/img/newyork.jpg';
import spiaggiaImage from './assets/img/spiaggia.jpg';

export default function () {
  const cardData = [
    {
      title: 'Viaggio nella foresta amazzonica',
      image: forestaImage,
      content:
        "La foresta amazzonica è un luogo affascinante, pieno di biodiversita e meraviglie naturali. Durante il mio viaggio, ho avuto l'opportunita di esplorare sentieri nascosti, attraversare fiumi impetuosi e immergermi nella rigogliosa vegetazione tropicale. Ho incontrato tribu indigene che vivono in perfetta armonia con la natura, imparando da loro antiche tradizioni e metodi di sopravvivenza.",
    },
    {
      title: 'La bellezza dei parchi giapponesi',
      image: giapponeImage,
      content:
        'I parchi giapponesi sono veri gioielli di serenita e bellezza. Durante il mio viaggio in Giappone, ho visitato parchi con giardini zen, laghetti tranquilli e ponticelli pittoreschi. Ogni stagione offre uno spettacolo unico, dai ciliegi in primavera agli aceri in autunno.',
    },
    {
      title: 'New York City',
      image: newyorkImage,
      content:
        "New York è una citta vibrante e piena di vita, conosciuta come la citta che non dorme mai. Sono rimasto affascinato dall'energia delle sue strade affollate, dalla frenesia di Times Square alla tranquillita di Central Park.",
    },
    {
      title: 'La tranquillità delle spiagge caraibiche',
      image: spiaggiaImage,
      content:
        "Le spiagge dei Caraibi sono paradisiache, con acque cristalline e sabbia bianca che offrono un relax totale. Durante il mio soggiorno, ho goduto di giornate soleggiate e paesaggi mozzafiato. Le palme ondeggianti e il suono delle onde creano un'atmosfera di pace e serenita.",
    },
  ];

  const [card, setCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCard((c) => (c + 1 >= cardData.length ? 0 : c + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [cardData.length]);

  return (
    <>
      <div className="containerFlex">
        <div className="containerBtn">
          <button
            onClick={() =>
              setCard((c) => (c - 1 < 0 ? cardData.length - 1 : c - 1))
            }
            className="btn"
          >
            <FaCircleArrowLeft />
          </button>
        </div>
        <div>
          {cardData.map((data, index) => (
            <Card
              key={`card${index}`}
              title={data.title}
              image={data.image}
              content={data.content}
              isAvailable={card === index}
            ></Card>
          ))}
        </div>
        <div className="containerBtn">
          <button
            onClick={() =>
              setCard((c) => (c + 1 >= cardData.length ? 0 : c + 1))
            }
            className="btn"
          >
            <FaCircleArrowRight />
          </button>
        </div>
      </div>
      <div className="bullet-container">
        {cardData.map((_, index) => (
          <FaCircle
            key={index}
            className={`bullet ${card === index ? 'active' : ''}`}
            onClick={() => setCard(index)}
          />
        ))}
      </div>
    </>
  );
}
