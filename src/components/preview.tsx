import goldenKey from '../svg/goldenKey.svg'

export function Preview() {
    return (
        <div
        className="
        bg-jewelry
        bg-no-repeat
        bg-cover
        bg-center
        h-[100vh]">
            <div
            className="
            bg-black/70
            w-[100%]
            h-[100%]
            pt-[45%]
            lg:pt-[10rem]
            md:pt-[10rem]">
                <div
                className="
                bg-white/0
                border-solid
                border-white
                border-[0.3rem]
                lg:border-[0.5rem]
                md:border-[0.4rem]
                mx-auto
                w-[17rem]
                h-[8rem]
                lg:h-[15rem]
                lg:w-[30rem]
                md:w-[25rem]
                md:h-[13rem]
                py-[1rem]
                px-[0.5rem]
                after:content-['']
                after:block
                after:bg-white
                after:w-[80%]
                after:h-[1px]
                after:mt-[1rem]
                lg:after:mt-[2rem]
                md:after:mt-[3rem]
                after:mx-auto">
                    <h1
                    className="
                    text-md
                    lg:text-3xl
                    md:text-xl
                    text-yellow-500
                    font-bold
                    text-center">
                        Ювелирный магазин "Золотой ключик"
                    </h1>

                    <img
                    src={goldenKey}
                    alt=""
                    className="
                    -rotate-90
                    mx-auto
                    w-[30px]
                    lg:w-[75px]
                    md:w-[60px]" />
                </div>
                <p
                className="
                mt-[2rem]
                lg:mt-[3rem]
                md:mt-[3rem]
                text-center
                text-white/60">Продажа и ремонт ювелирных изделий, а также изготовление ключей</p>
            </div>
        </div>
    );
}