import {ButtonHTMLAttributes, PropsWithChildren} from "react";


type IconButtonSizes = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type ColorShade = 'light' | 'medium' | 'dark';

interface IconButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>{

}

export function IconButton(props: IconButtonProps){
	const {children} = props;
	return(
		<button>
			{children}
		</button>
	)
}