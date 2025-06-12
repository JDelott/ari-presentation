// VideoModal.tsx
import React, { useState, useEffect, useRef } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  closeModal: () => void;
  videoUrl: string;
}

export default function VideoModal({ isOpen, closeModal, videoUrl }: VideoModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState < string | null > (null);
  const videoRef = useRef < HTMLVideoElement > (null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset states when modal opens
      setIsLoading(true);
      setError(null);
    } else {
      document.body.style.overflow = 'unset';
      // Pause video when modal closes
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black/75 transition-opacity duration-300"
        onClick={closeModal}
      />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl transform overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl bg-black shadow-xl transition-all">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/75 transition-colors"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white" />
              </div>
            )}

            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <p className="text-white text-center px-4">{error}</p>
              </div>
            )}

            <video
              ref={videoRef}
              className="w-full h-full aspect-video"
              controls
              autoPlay
              playsInline
              onLoadedData={() => setIsLoading(false)}
              onError={(e) => {
                setIsLoading(false);
                setError('Error loading video. Please try again later.');
                console.error('Video error:', e);
              }}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}