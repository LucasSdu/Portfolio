import React from 'react';
import Scene from './Scence';
import Text from './Text';
import useWindow from './useWindows';

export default function Home() {
  const { dimension } = useWindow();
  
  // Check if the user is on a mobile device
  const isMobile = dimension.width <= 768;

  return (
    <main className="flex w-full h-screen items-center justify-center bg-white100">
      <Text />
      {!isMobile && <Scene />} {/* Nur anzeigen, wenn es nicht mobil ist */}
    </main>
  );
}
