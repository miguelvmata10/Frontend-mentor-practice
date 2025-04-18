interface ThemeOptions {
    id: number;
    label: string;
}

interface ToogleThemeSelectorProps {
    selected: number;
    setSelected: (id: number) => void;
    options: ThemeOptions[];
    bgColor: string;
    textColor: string;
    buttonColors: {
        numberBtt: string;
        resetDelBtt: string;
        equalBtt: string; 
    };
}

const ToogleThemeSelector = ({ selected, setSelected, options, bgColor, textColor, buttonColors }: ToogleThemeSelectorProps) => {

    return (
        <div className={`flex gap-4 items-center ${textColor}`}>
            <p className={`font-medium text-sm ${textColor}`}>THEME</p>
            <div className={`relative rounded-full ${bgColor} flex px-2 py-1`}>
                {options.map((button) => (
                    <button 
                        key={button.id}
                        onClick={() => setSelected(button.id)}
                        className={`relative z-10 cursor-pointer flex items-center justify-center w-8 h-8 ${selected === button.id ? 'text-white': 'text-gray-400'}`}>
                        {button.label}
                    </button>
                ))}
                <div className={`absolute w-8 h-8 rounded-full ${buttonColors.equalBtt} transition-transform duration-200 ease-in-out`} 
                    style={{ transform: `translateX(${(selected - 1) * 32}px)` }} // largura de cada botão -> 32 px
                />
            </div>
        </div>
    )
}
export default ToogleThemeSelector