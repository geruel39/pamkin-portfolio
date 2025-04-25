export const Button = ({ text, click }) => {

    return <div className="info-img p-[1px]">
            <div className="p-1 bg-[#121212]">
                <button onClick={click} className={`p-1 cursor-pointer border border-yellow-700 text-sm text-nowrap transition duration-200 hover:scale-110 hover:text-yellow-700 hover:border-transparent`}>
                
                {text}

                </button>
            </div>
        </div>;
}