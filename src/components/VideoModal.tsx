import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  closeModal: () => void;
  videoUrl: string;
}

export default function VideoModal({ isOpen, closeModal, videoUrl }: VideoModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl transform overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl bg-black shadow-xl transition-all">
                <video
                  className="w-full h-full aspect-video"
                  controls
                  autoPlay
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
