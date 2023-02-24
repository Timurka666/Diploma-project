interface InnerLinks {
    text: string,
    link: string
}

export function Navbar() {
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
        <header
        className="
        h-auto
        bg-black/70
        py-[0.5rem]
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
            justify-around">
                <h1
                className="
                font-serif
                text-2xl
                text-yellow-500
                leading-5
                font-bold">
                    Золотой<br />
                    ключик
                </h1>
                <div
                className="
                flex
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
            </div>
        </header>
    );
}