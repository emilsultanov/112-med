import {HTMLAttributes, PropsWithChildren} from "react";
import {cva} from "class-variance-authority";
import {cn} from "@/lib/utils";


export type DisplayTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type DisplaySizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type DisplayVariants = 'regular' | 'medium' | 'semibold' | 'bold';

type DisplayProps = PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> & {
	tag?: DisplayTags;
	size: DisplaySizes;
	variant: DisplayVariants
}

const displayStyles = cva(
	'not-italic text-gray-900',
	{
		variants:{
			size:{
				xs: 'text-2xl leading-8',
				sm: 'text-3xl leading-9',
				md: 'text-4xl leading-44 -tracking-[0.72px]',
				lg: 'text-5xl leading-60 -tracking-[0.96px]',
				xl: 'text-6xl leading-72 -tracking-[1.2px]',
				'2xl': 'text-7xl leading-90 -tracking-[1.44px]'
			},
			variant: {
				regular: 'font-normal',
				medium: 'font-medium',
				semibold: 'font-semibold',
				bold: 'font-bold'
			}
		},
		defaultVariants: {
			size: 'md',
			variant: 'regular'
		}
	}
);

export function Display(props: DisplayProps) {
	const {tag, size, variant, children, className} = props;
	const Tag = tag ?? 'h6';
	return(
		<Tag className={cn(displayStyles({size, variant, className}))}>{children}</Tag>
	)
}