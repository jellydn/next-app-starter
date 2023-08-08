import { useAtom } from 'jotai';

import counterAtom from '../../store/counter';
import Button from '../Button';

function Counter() {
    const [count, setCount] = useAtom(counterAtom);
    return (
        <div className="flex flex-col justify-center my-5">
            <Button
                size="s"
                onClick={() => {
                    setCount((counter) => counter + 1);
                }}
            >
                +1
            </Button>
            <span>Counter: {count}</span>
        </div>
    );
}

export default Counter;
