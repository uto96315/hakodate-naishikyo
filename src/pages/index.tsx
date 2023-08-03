import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '../../components/header';
import SlickArea from '../../components/slickArea';
import ButtonArea from '../../components/buttonArea';
import Menu from '../../components/menu';
import { useState } from 'react';
import PassArea from '../../components/v1/pass';
import News from '../../components/news';
import Message from '../../components/message';
import Movies from '../../components/movies';


export default function Home() {
  const pass = "vneorbnw9ewjsv";
  const [password, setPassword] = useState("");
  const [passCheckResult, setPassCheckResult] = useState(false);

  const passCheck = () => {
    if (pass === password) {
      setPassCheckResult(true);
    } else {
      alert("パスワードが違います");
      return;
    }
  };

  if (!passCheckResult) {
    return (
      <PassArea pass={password} setPass={setPassword} passCheck={passCheck} />
    );
  } else {
    return (
      <main className='font-serif'>
        <Header />
        <SlickArea />
        <ButtonArea />
        <Menu />

        {/* 以下本体 */}
        <News />
        <Message />
        <Movies />

        <div className='min-h-screen'></div>
      </main>
    );
  }
}
