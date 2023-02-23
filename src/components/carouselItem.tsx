import { params } from "./repairService";
interface IProps {
    title: string,
    text: params
}

export function CarouselItem(props: IProps) {
    return (
        <div
        className="
        w-[85%]
        mx-auto">
                <h1
                className="
                text-black
                text-2xl
                text-center
                bg-yellow-500
                w-[20%]">{props.title}</h1>
            <div
            className="
            bg-neutral-800
            w-[100%]
            h-auto
            grid
            py-[1rem]
            px-[1rem]">
                {
                    props.text.map(
                        (el, id) => <p
                        key={id}
                        className="
                        text-white
                        text-lg
                        text-left">{el}</p>
                    )
                }
            </div>
        </div>
    );
}