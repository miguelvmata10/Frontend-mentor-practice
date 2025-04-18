import { useState } from "react";
import { buttons, ButtonType } from "../types/calculatorConfig";

interface CalculatorBodyProps {
    bgColor: string;
    textColor: string;
    buttonColors: {
        numberBtt: string;
        resetDelBtt: string;
        equalBtt: string; 
    };
}

const CalculatorBody = ({ bgColor, textColor, buttonColors}: CalculatorBodyProps) => {
    const [ firstNumber, setFirstNumber ] = useState<string | null>(null);
    const [ displayNumber, setDisplayNumber ] = useState<string>('0');
    const [ operation, setOperation ] = useState<ButtonType | null>(null);
    const [ isJustCalculated, setIsJustCalculated ] = useState<boolean>(false);

    const calculateResult = () => {
        const secondNumber = displayNumber;
        const first = Number(firstNumber ?? '0');
        const second = Number(secondNumber);
        let result = '';

        if (operation === '/' && second === 0) {
            alert('Impossível dividir por zero.');
            return '0'; 
        }

        switch (operation) {
            case '+':
                result = String(first + second);
                break;
            case '-':
                result = String(first - second);
                break;
            case 'x':
                result = String(first * second);
                break;
            case '/':
                result = String(first / second);
                break;
            default:
                return '0';
        }

        return result;
    }

    const handleButtonClick = (item: ButtonType) => {
        if (item === 'DEL') {
            handleDelete();
        }
        else if (item === 'RESET') {
            handleReset();
        }
        else if (item === '=') {
            handleEqual();
        }
        else if (item === '+' || item === '-' || item === 'x' || item === '/' ) {
            handleNumberOperations(item);
        }
        else {
            handleNumberAddition(item);
        }
    }

    const handleDelete = () => {
        if (displayNumber === '0') return;

        setDisplayNumber((prev) => {
            if (prev.length === 1) return '0'; 
            return prev.slice(0, -1)
        })
    }

    const handleReset = () => {
        setFirstNumber(null);
        setDisplayNumber('0');
        setOperation(null);
        setIsJustCalculated(false);
    }

    const handleEqual = () => {
        if (!operation || !firstNumber) return;

        const result = calculateResult();

        setDisplayNumber(result);
        setFirstNumber(result);
        setOperation(null);
        setIsJustCalculated(true);
    }

    const handleNumberOperations = (item: ButtonType) => {
        if (firstNumber && operation) {
            const result = calculateResult();
            setDisplayNumber(result);
            setFirstNumber(result);
            setOperation(item);
            setIsJustCalculated(true);
        } else {
            setFirstNumber(displayNumber);
            setOperation(item);
            setDisplayNumber('0');
        }
    }

    const handleNumberAddition = (item: ButtonType) => {
        if (isJustCalculated) {
            setIsJustCalculated(false);
            setDisplayNumber('0');
        }

        setDisplayNumber((prev) => {
            if (prev === '0' && item === '.') return '0.';
            if (prev === '0') return item;
            if (prev.includes('.') && item === '.') return prev;

            return prev + item
        })
    };

    return (
        <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className={`w-full overflow-hidden ${bgColor} rounded-md p-6 ${textColor} flex text-5xl font-bold items-center justify-end`}>
                {displayNumber}
            </div>
            <div className={`w-full ${bgColor} rounded-md p-6 flex flex-col gap-4 justify-center items-center`}>
                {buttons.map((row, rowIndex) => (
                    <div key={rowIndex} className="w-full flex items-center justify-between gap-1 sm:gap-5">
                        {row.map((item, index) => (
                            <button
                                onClick={() => handleButtonClick(item)} 
                                key={index}
                                className={`flex ${row.length === 2 ? 'w-1/2' : 'flex-1'} 
                                items-center justify-center cursor-pointer font-bold text-3xl px-3 py-2 rounded-lg 
                                hover:scale-102 duration-300 border-b-4 active:border-b-0 active:duration-initial 
                                ${
                                    item === '=' 
                                    ? buttonColors.equalBtt 
                                    : ['RESET', 'DEL'].includes(item) 
                                        ? buttonColors.resetDelBtt
                                        : buttonColors.numberBtt
                                }`}>
                                    {item}
                          </button>   
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CalculatorBody