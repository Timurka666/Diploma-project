import { useEffect, useState } from "react";
import { InnerLinks } from "./navbar";
import cancel from '../svg/cancel.svg'

interface IProps {
    links: InnerLinks[],
    menuStatus: boolean,
    closeFunc: Function
}

export function MobileNavbar(props: IProps) {
    const {links, menuStatus, closeFunc} = props;
    const [style, setStyle] = useState({left: '0px'});

    useEffect(() => {
        if (menuStatus) {
            setStyle({left: '0px'})
        } else {
            setStyle({left: '100vw'})
        }
    }, [menuStatus]);

    return (
        <div
        className="
        w-[100vw]
        h-[100vh]
        bg-black/40
        fixed
        z-20
        transition-all
        duration-[750ms]
        px-[0.5rem]
        py-[1rem]"
        style={style}>
        <button
        onClick={() => {closeFunc()}}
        className="
        ml-[80%]">
            <img
            src={cancel}
            alt=""
            className="
            w-[3rem]" />
        </button>
        <ul
        className="mt-[3rem] flex flex-col gap-[4rem]">
            {links.map(
                (e, i) => <li
                key={i}
                className="text-center">
                    <a
                    href={e.link}
                    className="
                    text-white
                    text-2xl
                    text-center">
                        {e.text}</a>
                </li>
            )}
        </ul>
        </div>
    );
}