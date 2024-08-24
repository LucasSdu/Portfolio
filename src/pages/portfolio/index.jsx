import Scene from './Scence';
import Text from './Text';

export default function Home() {
  return (
    <main className="flex w-full h-screen items-center justify-center bg-white100">
      <Text />
      <Scene />
    </main>
  );
}