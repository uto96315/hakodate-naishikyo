import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/header';
import SlickArea from '../../components/slickArea';
import ButtonArea from '../../components/buttonArea';
import Menu from '../../components/menu';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='font-serif'>
      <Header />
      <SlickArea />
      <ButtonArea />
      <Menu />

      <div className='min-h-screen'></div>
    </main>
  )
}
