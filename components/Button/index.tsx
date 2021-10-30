import type { ButtonProps } from './types';

const SIZES = {
    s: 'px-4 py-2 text-base',
    m: 'px-6 py-3 text-lg',
    l: 'px-8 py-4 text-xl',
};

const Button: React.FC<ButtonProps> = ({ children, size, ...rest }) => (
    <button
        {...rest}
        type="button"
        className={`${SIZES[size]} font-semibold bg-transparent border border-blue-500 rounded hover:bg-blue-500 text-blue-800 hover:text-white hover:border-transparent text`}
    >
        {children}
    </button>
);

export default Button;

export * from './types';
