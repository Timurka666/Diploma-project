export function Contacts() {
    const contacts: string[] = ['Телефон: +7 (34374) 6-06-32'];

    return (
        <div
        className="
        container
        mx-auto
        bg-neutral-800
        flex
        justify-around
        py-[2rem]
        px-[2rem]">
            <div>
                <h1
                className="
                text-yellow-600
                text-3xl
                font-bold
                after:content-['']
                after:block
                after:w-[150px]
                after:h-[1px]
                after:bg-yellow-500
                after:mt-[1rem]">КОНТАКТЫ</h1>
                <div
                className="
                mt-[2rem]">
                    {contacts.map(
                        (el, i) =>
                        <p
                        key={i}
                        className="
                        text-white
                        text-lg">{el}</p>
                    )}
                </div>
            </div>

            <div>
                <h1
                className="
                text-yellow-600
                text-3xl
                font-bold
                after:content-['']
                after:block
                after:w-[30%]
                after:h-[1px]
                after:bg-yellow-500
                after:mt-[1rem]">АДРЕС</h1>
                <div
                className="
                mt-[2rem]">
                    <p
                    className="
                    text-white
                    text-lg">г. Сысерть, ул. Орджоникидзе, 54А, 624022</p>
                </div>
            </div>
        </div>
    );
}