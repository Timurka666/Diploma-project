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
        px-[15rem]">
            <h1
            className="
            text-3xl
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
            className="grid grid-cols-2 gap-y-[3rem] gap-x-[3rem] justify-items-center mx-auto">
                {
                    images.map(
                        (el, i) => <img
                        src={el}
                        alt=""
                        key={i}
                        className="
                        w-[20rem]
                        h-[20rem]
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