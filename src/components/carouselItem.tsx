import { params } from "./repairService";
interface IProps {
    title: string,
    text: params
}

export function CarouselItem(props: IProps) {
    return (
        <div
        className="
        w-[100%]
        md:w-[85%]
        mx-auto">
                <h1
                className="
                text-black
                md:text-2xl
                text-lg
                text-center
                bg-yellow-500
                md:w-[20%]
                w-[35%]">{props.title}</h1>
            <div
            className="
            bg-neutral-800
            w-[100%]
            h-auto
            py-[1rem]
            px-[1rem]">
                {
                    props.text.map(
                        (el, id) => <p
                        key={id}
                        className="
                        text-white
                        md:text-lg
                        text-md
                        text-left">{el}</p>
                    )
                }
            </div>
        </div>
    );
}