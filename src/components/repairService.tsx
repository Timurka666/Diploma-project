import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { CarouselItem } from "./carouselItem";

export type params = (`${string} - ${number}р` | `${string} - ${string} ${number}р`)[]
export function RepairService() {
    const gold: params = [
        'Пайка - от 300р',
        'Пайка пустотел - от 250р',
        'Полировка - от 150р',
        'Чистка на голтовке - 150р',
        'Рихтовка - 150р',
        'Растяжка, уменьшение кольца на один размер - 350р',
        'Увеличение, уменьшение (при помощи врезки, вырезки) - от 400р',
        'Замена колечка (ушка) - от 550р',
        'Замена замка - от 350р'
    ];
    const silver: params = [
        'Пайка - от 200р',
        'Пайка пустотел - от 250р',
        'Полировка - 100р',
        'Чистка на голтовке - 150р',
        'Рихтовка - 100р',
        'Растяжка, уменьшение кольца на один размер - 200р',
        'Увеличение, уменьшение (при помощи врезки, вырезки) - от 250р',
        'Замена колечка (ушка) - от 350р',
        'Замена замка - от 180р',
        'Чернение - 200р'
    ];
    const repair: params = [
        'Закрепка, раскрепка одного камня - 150р',
        'Вклейка камня - 50р',
        'Замена пружины, штифта, болтика и т.п. - от 100р'
    ];

    return (
        <div
        id="repair"
        className="
        container
        mx-auto
        bg-white
        py-[2rem]
        px-[2rem]">
            <h1
            className="
            text-3xl
            font-bold
            text-center
            after:content-['']
            after:block
            after:w-[30%]
            after:h-[1px]
            after:bg-gray-400
            after:mx-auto
            after:mt-[1rem]
            mb-[2rem]">РАСЦЕНКИ НА РЕМОНТ</h1>
            <Carousel
            showIndicators={false}
            infiniteLoop={true}
            showStatus={false}
            autoPlay={true}
            interval={7000}
            stopOnHover={true}
            showThumbs={false}>
                <CarouselItem title="Золото" text={gold} />
                <CarouselItem title="Серебро" text={silver} />
                <CarouselItem title="Ремонт" text={repair} />
            </Carousel>
        </div>
    );
}