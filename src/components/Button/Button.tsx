import {PropsWithChildren} from "react";

interface ButtonProps extends PropsWithChildren{

}

export function Button({children}:ButtonProps){
	return(
		<button className={'text-primary-600'}>{children}</button>
	)
}