import {ElementType, InputHTMLAttributes, ReactElement, ReactNode} from "react";
import {Text} from "@/components/Text";


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
	label?: string;
	errorText?: string;
	helperText?: string;
	wrapperClassName?: string;
	isInvalid?: boolean;
	icon?: ReactNode
}

export function Input(props: InputProps) {
	const {icon, label, errorText, helperText, wrapperClassName, isInvalid, ...rest} = props;
	return(
		<div className={`inline-flex flex-col ${wrapperClassName}`}>
			{label ? <Text  size={'sm'} variant={'medium'} className={'text-gray-700 mb-1.5'}>{label}</Text>  : null}
			<div className={'flex px-3 py-2 gap-2'}>
				<span className={'text-gray-500 max-w-5 h-5'}>{icon}</span>
				<input  {...rest}/>
			</div>
			{isInvalid && errorText ? <Text size={'sm'} variant={'regular'} className={'text-error-500'}>{errorText}</Text> : helperText ? <Text size={'sm'} variant={'regular'} className={'text-gray-600'}>{helperText}</Text> : null}
		</div>
	)
}