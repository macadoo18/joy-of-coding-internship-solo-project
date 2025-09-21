import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg';

const NavBar = () => {
  return (
    <div className="flex border-b w-full">
      <Link className="pl-4" href="/">
        <Image src={logo} alt="logo" width={70} height={70}/>
      </Link>

      <ul className="ml-auto my-auto pr-6">
        <li className="pr-5 inline">Filter</li>
        <Link href="/create-task">Create task</Link>
      </ul>
    </div>
  );
};

export default NavBar;
