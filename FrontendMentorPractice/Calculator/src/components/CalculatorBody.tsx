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

    const isOperator = (item: ButtonType) => ['+', '-', 'x', '/'].includes(item);

    const calculateResult = () => {
        const secondNumber = displayNumber;
        const first = Number(firstNumber ?? '0');
        const second = Number(secondNumber);

        if (operation === '/' && second === 0) {
            alert('Impossível dividir por zero.');
            return '0'; 
        }

        const operationsMap: { [key in ButtonType]?: (a: number, b: number) => number } = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            'x': (a, b) => a * b,
            '/': (a, b) => a / b,
        };

        const result = operationsMap[operation!]?.(first, second);
        return String(result ?? '0');
    }

    const handleButtonClick = (item: ButtonType) => {
        switch(item) {
            case 'DEL':
                handleDelete();
                break;
            case 'RESET':
                handleReset();
                break;
            case '=':
                handleEqual();
                break;
            default:
                isOperator(item) ? handleNumberOperations(item) : handleNumberAddition(item);
        }
    }

    const handleDelete = () => {
        if (displayNumber === '0') return;

        setDisplayNumber((prev) => {
            const newVal = prev.slice(0, -1) || '0';
            return newVal === '-' ? '0' : newVal
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
        } else {
            setFirstNumber(displayNumber);
        }

        setOperation(item);
        setDisplayNumber('0');
        setIsJustCalculated(true);
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
            <div className={`w-full ${bgColor} rounded-md p-6 ${textColor} flex flex-col items-end`}>
                <div className="w-full overflow-x-auto overflow-y-hidden">
                    <div className="text-5xl font-bold whitespace-nowrap text-right">
                        {displayNumber}
                    </div>
                </div>
            </div>
            <div className={`w-full ${bgColor} rounded-md p-6 flex flex-col gap-4 justify-center items-center`}>
                {buttons.map((row, rowIndex) => (
                    <div key={rowIndex} className="w-full flex items-center justify-between gap-2 sm:gap-5">
                        {row.map((item, index) => (
                            <button
                                onClick={() => handleButtonClick(item)} 
                                key={index}
                                className={`flex ${row.length === 2 ? 'w-1/2' : 'flex-1'} 
                                    items-center justify-center cursor-pointer font-bold text-2xl sm:text-3xl px-3 py-2 rounded-lg 
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