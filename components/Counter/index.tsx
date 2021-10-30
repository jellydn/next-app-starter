import { useAtom } from 'jotai';

import counterAtom from '../../store/counter';

function Counter() {
    const [count, setCount] = useAtom(counterAtom);
    return (
        <div className="flex mb-8">
            <button
                type="button"
                onClick={() => setCount((counter) => counter + 1)}
                className="flex items-center p-10 bg-gray-100 border-gray-500 rounded-lg shadow-xs dark:bg-gray-800"
            >
                <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        Counter
                    </p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                        {count}
                    </p>
                </div>
            </button>
        </div>
    );
}

export default Counter;
