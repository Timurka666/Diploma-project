import goldenKey from '../svg/goldenKey.svg'

export function Preview() {
    return (
        <div
        className="
        bg-jewelry
        bg-no-repeat
        bg-cover
        bg-center
        w-[100vw]
        h-[100vh]">
            <div
            className="
            bg-black/70
            w-[100%]
            h-[100%]
            pt-[10rem]">
                <div
                className="
                bg-white/0
                border-solid
                border-white
                border-[0.5rem]
                mx-auto
                h-[15rem]
                w-[30rem]
                py-[1rem]
                px-[0.5rem]
                after:content-['']
                after:block
                after:bg-white
                after:w-[80%]
                after:h-[1px]
                after:mt-[2rem]
                after:mx-auto">
                    <h1
                    className="
                    text-3xl
                    text-yellow-500
                    font-bold
                    text-center">
                        Ювелирный магазин "Золотой ключик"
                    </h1>

                    <img
                    src={goldenKey}
                    alt=""
                    width="75"
                    className="
                    -rotate-90
                    mx-auto" />
                </div>
                <p
                className="
                mt-[3rem]
                text-center
                text-white/60">Продажа и ремонт ювелирных изделий, а также изготовление ключей</p>
            </div>
        </div>
    );
}