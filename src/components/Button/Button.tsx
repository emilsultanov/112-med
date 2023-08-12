import {ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren} from "react";
import {cva} from "class-variance-authority";


type ButtonSizes = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type ColorShade = 'light' | 'medium' | 'dark';

type ColorVariant = 'primary' | 'gray' | 'error';

type ButtonColors = `${ColorVariant}-${ColorShade}`;


interface ButtonProps<S extends ButtonSizes = 'md'> extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
	size?: S;
	color: ButtonColors;
}


const buttonStyles = cva(
	'border rounded-lg inline-flex items-center justify-center not-italic',
	{
		variants:{
			size:{
				sm: 'gap-2 py-2 px-3.5 text-sm font-semibold leading-5',
				md: 'gap-2 py-2.5 px-4 text-sm font-semibold leading-5',
				lg: 'gap-2 py-2.5 px-4.5 text-base font-semibold leading-6',
				xl: 'gap-2 py-3 px-5 text-base font-semibold leading-6',
				'2xl': 'gap-3 py-4 px-7 text-lg font-semibold leading-7',
			},
			color:{
				'primary-dark': 'shadow-xs bg-primary-600 border-primary-600 text-[#fff] hover:bg-primary-700 hover:border-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-100 focus:bg-primary-600 focus:border-primary-600 disabled:bg-primary-200 disabled:border-primary-200 disabled:cursor-not-allowed',
				'primary-medium': 'shadow-xs bg-primary-50 border-primary-200 text-primary-700 hover:bg-primary-100 hover:text-primary-800 focus:outline-none focus:bg-primary-50 focus:ring-4 focus:ring-primary-100 focus:text-primary-700 disabled:bg-primary-25 disabled:border-primary-25 disabled:text-primary-300 disabled:cursor-not-allowed',
				'primary-light': 'border-[transparent] text-primary-700 hover:bg-primary-50 hover:text-primary-800 focus:text-primary-700 focus:outline-none focus:bg-[transparent] disabled:text-gray-300 disabled:bg-[transparent] disabled:cursor-not-allowed',
				'gray-dark': 'shadow-xs bg-gray-600 border-gray-600 text-[#fff] hover:bg-gray-700 hover:border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-100 focus:bg-gray-600 focus:border-gray-600 disabled:bg-gray-200 disabled:border-gray-200 disabled:cursor-not-allowed',
				'gray-medium': 'shadow-xs bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:bg-gray-50 focus:ring-4 focus:ring-gray-100 focus:text-gray-700 disabled:bg-gray-25 disabled:border-gray-25 disabled:text-gray-300 disabled:cursor-not-allowed',
				'gray-light': 'border-[transparent] text-gray-700 hover:bg-gray-50 hover:text-gray-800 focus:text-gray-700 focus:outline-none focus:bg-[transparent] disabled:text-gray-300 disabled:bg-[transparent] disabled:cursor-not-allowed',
				'error-dark': 'shadow-xs bg-error-600 border-error-600 text-[#fff] hover:bg-error-700 hover:border-error-700 focus:outline-none focus:ring-4 focus:ring-error-100 focus:bg-error-600 focus:border-error-600 disabled:bg-error-200 disabled:border-error-200 disabled:cursor-not-allowed',
				'error-medium': 'shadow-xs bg-error-50 border-error-200 text-error-700 hover:bg-error-100 hover:text-error-800 focus:outline-none focus:bg-error-50 focus:ring-4 focus:ring-error-100 focus:text-error-700 disabled:bg-error-25 disabled:border-error-25 disabled:text-error-300 disabled:cursor-not-allowed',
				'error-light': 'border-[transparent] text-error-700 hover:bg-error-50 hover:text-error-800 focus:text-error-700 focus:outline-none focus:bg-[transparent] disabled:text-error-300 disabled:bg-[transparent] disabled:cursor-not-allowed',
			}
		},
		defaultVariants:{
			size: 'md',
			color: 'primary-medium'
		}
	}
)

export function Button<S extends ButtonSizes>(props: ButtonProps<S>) {
	const {size = 'md', color, children, className, ...rest} = props;
	return (<button className={buttonStyles({size, color, className})} {...rest}>{children}</button>)
}