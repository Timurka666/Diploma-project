import { useState } from 'react';
import burger from '../svg/burger.svg';
import { MobileNavbar } from './mobileNavbar';

export interface InnerLinks {
    text: string,
    link: string
}

export function Navbar() {
    const [isMenu, setMenu] = useState(false);
    
    const links: InnerLinks[] = [
        {
            text: 'О нас',
            link: '#about'
        },
        {
            text: 'Расценки на ремонт',
            link: '#repair'
        },
        {
            text: 'Товары',
            link: '#goods'
        },
        {
            text: 'Контакты и адрес',
            link: '#contacts'
        }
    ];

    return (
        <>
        <header
        className="
        h-auto
        bg-black/70
        py-[0.5rem]
        px-[1rem]
        md:px-0
        fixed
        w-[100vw]
        top-0
        left-0
        z-10">
            <div
            className="
            container
            mx-auto
            flex
            md:justify-around
            justify-between">
                <h1
                className="
                font-serif
                md:text-2xl
                text-xl
                leading-5
                text-yellow-500
                md:leading-5
                font-bold">
                    Золотой<br />
                    ключик
                </h1>
                <div
                className="
                hidden
                md:flex
                gap-[2rem]">
                    {links.map(
                        (el, i) =>
                        <a
                        key={i}
                        href={el.link}
                        className="
                        text-white
                        text-xl">{el.text}</a>
                    )}
                </div>
                <button
                onClick={() => {setMenu(!isMenu)}}
                className="
                block
                md:hidden
                border-solid
                border-white/40
                border-[1px]
                rounded-lg
                w-[3rem]
                h-[3rem]">
                    <img
                    src={burger}
                    alt=""
                    className="
                    w-[100%]" />
                </button>
            </div>
        </header>
        <MobileNavbar links={links} menuStatus={isMenu} closeFunc={() => {setMenu(false)}} />
        </>
    );
}