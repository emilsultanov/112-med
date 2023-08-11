import {HTMLAttributes, PropsWithChildren} from "react";
import {cva} from "class-variance-authority";


export type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TextVariants = 'regular' | 'medium' | 'semibold' | 'bold';

type TextProps = PropsWithChildren<HTMLAttributes<HTMLParagraphElement>> & {
	size: TextSizes;
	variant: TextVariants;
}


const textStyles = cva(
	'',
	{
		variants:{
			size:{
				xs: '',
				sm: '',
				md: '',
				lg: '',
				xl: '',
				'2xl': ''
			},
			variant: {
				regular: '',
				medium: '',
				semibold: '',
				bold: ''
			}
		},
		defaultVariants: {
			size: 'xl',
			variant: 'regular'
		}
	}
);


export function Text(props: TextProps){
	const {size, variant, children} = props;
	return(
		<p>{children}</p>
	)
}