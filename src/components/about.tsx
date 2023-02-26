export function About() {
    const week: string[] = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    const hours: string[] = ["10-18", "10-19", "10-19", "10-19", "10-19", "10-19", "10-18"];
    
    return (
            <div
            id="about"
            className="
            bg-white
            container
            mx-auto
            py-[2rem]
            px-[1rem]
            flex
            justify-around">
                <div
                className="
                w-[35rem]
                h-auto
                px-[1rem]
                py-[1rem]
                bg-neutral-800">
                    <h1
                    className="
                    text-white
                    text-3xl
                    font-bold">О нас</h1>
                    <p
                    className="
                    text-white
                    text-xl
                    mt-[1rem]">
                        "Золотой ключик" - это ювелирный магазин, где вы можете приобрести или отдать в ремонт свои украшения!
                    </p>
                    <p
                    className="
                    text-yellow-500
                    text-xl
                    mt-[1rem]">
                        Также мы делаем дубликаты ключей: от простых английских ключей до сложных сейфовых.
                    </p>
                </div>

                <div
                className="
                w-[25rem]
                h-auto
                px-[1rem]
                py-[1rem]
                bg-neutral-800">
                    <h1
                    className="
                    text-white
                    text-3xl
                    font-bold">График работы</h1>
                    <div
                    className="flex space-x-[2rem] mt-[1rem]">
                        <ul>{week.map((el, i) => <li className="text-white" key={i}>{el}</li>)}</ul>
                        <ul>{hours.map((el, i) => <li className="text-white/70" key={i}>{el}</li>)}</ul>
                    </div>
                </div>
            </div>

    );
}