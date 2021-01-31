// --- Pacotes ---
import React from 'react';

// --- Componentes ---
import VideoCard from './VideoCard.js';
import Slider, { SliderItem } from './Slider.js';

// --- CSS ---
import { VideoCardGroupContainer, Title} from './Carousel-css.js';

function Carousel({ ignoreFirstVideo, category }) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {
        categoryTitle && (
          <>
            <Title style={{ backgroundColor: categoryColor || 'red' }}>
              {categoryTitle}
            </Title>
          </>
        )
      }
      <Slider>
        {
          videos.map((video, index) => {
            if (ignoreFirstVideo && index === 0) {
              return null;
            }

            return (
              <SliderItem key={video.titulo}>
                <VideoCard
                  videoTitle={video.titulo}
                  videoURL={video.url}
                  categoryColor={categoryColor}
                />
              </SliderItem>
            );
          })
        }
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;