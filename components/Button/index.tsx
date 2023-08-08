import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import { type ButtonHTMLAttributes } from 'react';

const buttonStyles = cva(
    [
        'font-semibold',
        'bg-transparent',
        'border',
        'border-blue-500',
        'inline-flex',
        'items-center',
        'justify-center',
        'rounded',
        'hover:bg-blue-500',
        'text-blue-800',
        'hover:text-white',
        'hover:border-transparent',
        'text',
    ],
    {
        variants: {
            intent: {
                primary: [
                    'bg-blue-600',
                    'focus:border-blue-500',
                    'focus:ring-2',
                    'focus:ring-blue-200',
                ],
            },

            size: {
                s: ['px-4', 'py-2', 'text-base'],
                m: ['px-6', 'py-3', 'text-lg'],
                l: ['px-8', 'py-4', 'text-xl'],
            },
        },
        defaultVariants: {
            size: 'm',
        },
    },
);

export type ButtonProps = VariantProps<typeof buttonStyles>;
type Props = Record<string, unknown> &
    ButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, size, type = 'button', ...rest }: Props) {
    return (
        // eslint-disable-next-line react/button-has-type
        <button {...rest} type={type} className={buttonStyles({ size })}>
            {children}
        </button>
    );
}

export default Button;
