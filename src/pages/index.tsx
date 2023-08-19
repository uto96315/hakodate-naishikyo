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


export default function Home() {
  const pass = "vneorbnw9ewjsv";
  const [password, setPassword] = useState("");
  const [passCheckResult, setPassCheckResult] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  const passCheck = () => {
    if (pass === password) {
      setPassCheckResult(true);
    } else {
      alert("パスワードが違います");
      return;
    }
  };

  // if (!passCheckResult) {
  //   return (
  //     <PassArea pass={password} setPass={setPassword} passCheck={passCheck} />
  //   );
  // } else {
  return (
    <main className='font-serif'>
      <div>
        <div className={`${sidebarIsOpen && "bg-gray-500 bg-opacity-60 fixed w-screen h-screen z-40"}`}></div>
        <Header toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
        <SlickArea />
        <ButtonAreaForPC />
        <ButtonAreaForSM />
        <Menu />

        {/* 以下本体 */}
        <News />
        <Message isNextButton={true} />
        {/* <Movies /> */}
        <AboutClinic />
        <Access />
        <footer className='bg-theme py-2 text-white text-center'>
          ©︎2023 まべ五稜郭消化器・内視鏡クリニック
        </footer>
        <div className='h-20'>
          {/* ここは後で消す */}
        </div>
      </div>
      {sidebarIsOpen &&
        <div className='bg-white fixed right-0 top-0 z-50'>
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>}
    </main>
  );
}
// }
