import {HTMLAttributes, PropsWithChildren} from "react";
import {cva} from "class-variance-authority";
import {cn} from "@/lib/utils";


export type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TextVariants = 'regular' | 'medium' | 'semibold' | 'bold';

type TextProps = PropsWithChildren<HTMLAttributes<HTMLParagraphElement>> & {
	size: TextSizes;
	variant: TextVariants;
}


const textStyles = cva(
	'not-italic text-gray-900',
	{
		variants:{
			size:{
				xs: 'text-xs leading-18',
				sm: 'text-sm',
				md: 'text-base',
				lg: 'text-lg',
				xl: 'text-xl leading-30',
			},
			variant: {
				regular: 'font-normal',
				medium: 'font-medium',
				semibold: 'font-semibold',
				bold: 'font-bold'
			}
		},
		defaultVariants: {
			size: 'xl',
			variant: 'regular'
		}
	}
);


export function Text(props: TextProps){
	const {size, variant, children, className, ...rest} = props;
	return(
		<p className={cn(textStyles({size, variant, className}))}>{children}</p>
	)
}