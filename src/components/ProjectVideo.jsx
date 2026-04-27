// src/components/ProjectVideo.jsx
import { useRef, useEffect } from 'react';

export default function ProjectVideo({ activeProject }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, [activeProject]);

  const renderMedia = () => {
    if (activeProject.videoUrl) {
      return (
        <video
          key={activeProject.title + "-vid"}
          ref={videoRef}
          src={activeProject.videoUrl}
          autoPlay
          loop
          muted
          controls
          className="w-full max-h-[65vh] object-contain bg-black no-volume-controls rounded-md"
        />
      );
    } else if (activeProject.imageURL) {
      return (
        <img
          key={activeProject.title + "-img"}
          src={activeProject.imageURL}
          alt={activeProject.title}
          className="w-full max-h-[65vh] object-contain bg-black no-volume-controls rounded-md"
        />
      );
    } else if (activeProject.fallbackText) {
      return (
        <div
          key={activeProject.title + "-custom-text"}
          className="w-full h-64 md:h-80 bg-slate-900 border border-slate-700 rounded-md flex flex-col items-center justify-center text-center p-8"
        >
          <h4 className="text-xl font-bold text-slate-300 mb-2">{activeProject.fallbackText}</h4>
        </div>
      );
    } else {
      return (
        <div
          key={activeProject.title + "-text"}
          className="w-full h-64 md:h-80 bg-slate-900 border border-slate-700 rounded-md flex flex-col items-center justify-center text-center p-6"
        >
          <span className="text-4xl mb-4">🛠️</span>
          <p className="text-slate-300 text-lg font-medium">Details coming soon</p>
        </div>
      );
    }
  };

  return (
    <div className="mt-8 p-4 bg-slate-800 rounded-lg border border-slate-700 shadow-2xl animate-fade-in">
      {renderMedia()}
      <div className="p-4 mt-2 bg-slate-950/50 rounded-md">
        <p className="text-emerald-400 text-sm font-mono">{activeProject.title} Demo</p>
      </div>
      <div className="p-6 mt-4 bg-slate-950/50 rounded-md">
        <p className="text-slate-300 leading-relaxed">{activeProject.technicalDetails}</p>
      </div>
    </div>
  );
}