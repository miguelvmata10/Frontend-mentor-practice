import { useState } from "react";
import ToogleThemeSelector from "./components/ToogleThemeSelector";
import CalculatorBody from "./components/CalculatorBody";

function App() {
  const [selected, setSelected] = useState<number>(1);
  const options = [
    { id: 1, label: "1" },
    { id: 2, label: "2" },
    { id: 3, label: "3" },
  ];

  // Função para definir as classes de cores de acordo com o tema selecionado
  const getThemeClass = () => {
    switch (selected) {
      case 1:
        return {
          mainBgColor: "bg-[#3a4764]",
          bgColor: "bg-[#181e33]",
          textColor: "text-white",
          buttonColors: {
            numberBtt:
              "bg-[#eae3db] text-[#4b515c] border-b-[#6d666f] hover:bg-white",
            resetDelBtt:
              "bg-[#a2b2e0] text-white border-b-[#47527a] hover:bg-[#47527a]",
            equalBtt:
              "bg-[#f96d5a] text-white border-b-[#762924] hover:bg-[#762924]",
          },
        };
      case 2:
        return {
          mainBgColor: "bg-[#e6e7e7]",
          bgColor: "bg-[#d2cccd]",
          textColor: "text-[#37342f]",
          buttonColors: {
            numberBtt:
              "bg-[#e4e4e1] text-[#393833] border-b-[#a69c93] hover:bg-white",
            resetDelBtt:
              "bg-[#63b5bc] text-white border-b-[#1d646a] hover:bg-[#1d646a]",
            equalBtt:
              "bg-[#fe8a38] text-white border-b-[#91562b] hover:bg-[#91562b]",
          },
        };
      case 3:
        return {
          mainBgColor: "bg-[#16072a]",
          bgColor: "bg-[#1e0937]",
          textColor: "text-[#fbe43c]",
          buttonColors: {
            numberBtt:
              "bg-[#331b4d] text-[#fee043] border-b-[#7f2097] hover:bg-[#6b34ac]",
            resetDelBtt:
              "bg-[#8630b1] text-[#eae0ee] border-b-[#b41be8] hover:bg-[#b41be8]",
            equalBtt:
              "bg-[#94fef8] text-[#1a454b] border-b-[#65c6cc] hover:bg-[#65c6cc]",
          },
        };
      default:
        return {
          mainBgColor: "bg-[#3a4764]",
          bgColor: "bg-[#181e33]",
          textColor: "text-white",
          buttonColors: {
            numberBtt:
              "bg-[#eae3db] text-[#4b515c] border-b-[#6d666f] hover:bg-white",
            resetDelBtt:
              "bg-[#a2b2e0] text-white border-b-[#47527a] hover:bg-blue-950",
            equalBtt:
              "bg-[#f96d5a] text-white border-b-[#762924] hover:bg-red-600",
          },
        };
    }
  };

  const { mainBgColor, bgColor, textColor, buttonColors } = getThemeClass();

  return (
    <div
      className={`w-screen h-screen flex flex-col items-center justify-center p-3 ${mainBgColor}`}
    >
      <div className="w-full max-w-lg flex flex-col mx-auto gap-5">
        <div className="flex justify-between items-center">
          <span className={`font-bold ${textColor} text-2xl`}>calc</span>
          <ToogleThemeSelector
            selected={selected}
            setSelected={setSelected}
            options={options}
            bgColor={bgColor}
            textColor={textColor}
            buttonColors={buttonColors}
          />
        </div>
        <CalculatorBody
          bgColor={bgColor}
          textColor={textColor}
          buttonColors={buttonColors}
        />
      </div>
    </div>
  );
}

export default App;
