export function GoodsList() {
    const images: string[] = [
        '/img/g-ring1.jpeg',
        '/img/s-earrings1.jpeg',
        '/img/g-ring2.jpeg',
        '/img/s-earrings2.jpeg',
        '/img/g-earrings1.jpeg',
        '/img/s-ring1.jpeg',
        '/img/g-earrings2.jpeg',
        '/img/s-ring2.jpeg'
];
    return (
        <div
        id="goods"
        className="
        container
        mx-auto
        bg-neutral-800
        py-[2rem]
        lg:px-[15rem]
        px-[1rem]">
            <h1
            className="
            md:text-3xl
            text-2xl
            font-bold
            text-center
            text-yellow-600
            after:content-['']
            after:block
            after:w-[30%]
            after:h-[1px]
            after:bg-yellow-500
            after:mx-auto
            after:mt-[1rem]
            mb-[2rem]">НАШИ ТОВАРЫ</h1>
            <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:gap-y-[3rem]
            gap-y-[1rem]
            gap-x-[1rem]
            lg:gap-x-[3rem]
            justify-items-center
            mx-auto">
                {
                    images.map(
                        (el, i) => <img
                        src={el}
                        alt=""
                        key={i}
                        className="
                        md:w-auto
                        w-[70%]
                        rounded-3xl
                        border-solid
                        border-yellow-300
                        border-[1px]" />
                    )
                }
            </div>
        </div>
    );
}