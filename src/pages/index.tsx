import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '../../components/header';
import SlickArea from '../../components/slickArea';
import ButtonAreaForPC from '../../components/buttonAreaForPC';
import Menu from '../../components/menu';
import { useState } from 'react';
import PassArea from '../../components/v1/pass';
import News from '../../components/news';
import Message from '../../components/message';
import Movies from '../../components/movies';
import ButtonAreaForSM from '../../components/buttonAreaForSM';
import Sidebar from '../../components/sidebar';
import AboutClinic from '../../components/aboutClinic';
import Access from '../../components/access';
import ClinicFeatures from '../../components/clinicFeatures';
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { HiDesktopComputer, HiOutlineClipboardList } from "react-icons/hi";
import EndoscopyArea from '../../components/endoscopyArea';


export default function Home() {
  const pass = "vneorbnw9ewjsv";
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  return (
    <main className='font-serif'>
      <div>
        <div className={`${sidebarIsOpen && "bg-gray-500 bg-opacity-60 fixed w-screen h-screen z-40"}`}></div>
        <Header toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />

        {/* PC用スリック */}
        <div className='hidden md:block'>
          <SlickArea imgsUrl={["/slick01.png", "/slick02.png", "/slick03.png"]} />
        </div>

        {/* PC用スリック */}
        <div className="md:hidden">
          <SlickArea imgsUrl={["/smSlick01.png", "/smSlick02.png", "/smSlick03.png"]} />
        </div>
        {/* <ButtonAreaForPC /> */}
        <ButtonAreaForSM />
        <Menu />

        {/* 以下本体 */}
        <News />
        <Message isNextButton={true} isDetail={false} />
        <ClinicFeatures />
        <EndoscopyArea />
        <AboutClinic />

        {/* <Movies /> */}
        <Access />
        <footer className='bg-theme py-2 text-white text-center'>
          ©︎2023 まべ五稜郭消化器・内視鏡クリニック
        </footer>
        <div className='py-10 md:py-0'></div>
      </div>
      {sidebarIsOpen &&
        <div className='bg-white fixed right-0 top-0 z-50'>
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>
      }
    </main>
  );
}
// }
