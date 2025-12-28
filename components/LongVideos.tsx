import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { Theme, VideoData } from '../types';
import { getVideos } from '../services/videoService';

interface LongVideosProps {
  theme: Theme;
}

const longVideosData: VideoData[] = [
  {
    id: 1,
    author: 'Ahmed Khalid',
    avatarSeed: 'avatar1',
    date: '2/20/2008',
    thumbnailSeed: 'spiderman',
    title: 'The truth about Spider-Man',
    description: 'Here is a description of the video that is downloaded.',
    duration: '6:29',
  },
  {
    id: 2,
    author: 'Jane Doe',
    avatarSeed: 'avatar2',
    date: '10/05/2023',
    thumbnailSeed: 'wonderwoman',
    title: "A Hero's Journey",
    description: 'Exploring the mythical origins and modern impact of an icon.',
    duration: '12:45',
  },
  {
    id: 3,
    author: 'Sam Wilson',
    avatarSeed: 'avatar3',
    date: '03/18/2024',
    thumbnailSeed: 'falcon',
    title: 'Taking Flight: The New Captain',
    description: 'The story behind the shield and the legacy it carries forward.',
    duration: '8:15',
  },
];

const LongVideos: React.FC<LongVideosProps> = ({ theme }) => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  useEffect(() => {
    getVideos().then((data) => {
      if (data) {
        setVideos(data);
      }
    });
  }, []);

  const isDark = theme === 'dark';
  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold mb-4 px-2">Long Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} theme={theme} />
        ))}
      </div>
    </section>
  );
};

export default LongVideos;