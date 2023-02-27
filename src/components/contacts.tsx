export function Contacts() {
    const contacts: string[] = ['Телефон: +7 (34374) 6-06-32', 'Электронная почта: zzolotoyklyuchick@mail.ru'];

    return (
        <div
        id="contacts"
        className="
        container
        mx-auto
        bg-neutral-800
        lg:flex
        lg:justify-around
        lg:space-y-0
        py-[2rem]
        px-[2rem]
        space-y-[2rem]">
            <div>
                <h1
                className="
                text-yellow-600
                md:text-3xl
                text-2xl
                font-bold
                after:content-['']
                after:block
                lg:after:w-[40%]
                after:w-[20%]
                after:h-[1px]
                after:bg-yellow-500
                after:mt-[1rem]">КОНТАКТЫ</h1>
                <div
                className="
                lg:mt-[2rem]
                mt-[1.5rem]">
                    {contacts.map(
                        (el, i) =>
                        <p
                        key={i}
                        className="
                        text-white
                        md:text-lg
                        text-md">{el}</p>
                    )}
                </div>
            </div>

            <div>
                <h1
                className="
                text-yellow-600
                md:text-3xl
                text-2xl
                font-bold
                after:content-['']
                after:block
                lg:after:w-[40%]
                after:w-[20%]
                after:h-[1px]
                after:bg-yellow-500
                after:mt-[1rem]">АДРЕС</h1>
                <div
                className="
                lg:mt-[2rem]
                mt-[1.5rem]">
                    <p
                    className="
                    text-white
                    md:text-lg
                    text-md">г. Сысерть, ул. Орджоникидзе, 54А, 624022</p>
                </div>
            </div>
        </div>
    );
}