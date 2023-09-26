'use client'

import {useState} from "react";

import {Mail} from 'react-feather'

import {Button} from "@/components/Button";
import {Modal} from "@/components/Modal";
import {Input} from "@/components/Input";

export default function Components(){
	const [isVisible, setIsVisible] = useState(false);
	
	return(
		<div className={'p-4'}>
			<Button size={'md'} color={'primary-dark'} onClick={() => setIsVisible(true)}>
				Open modal
			</Button>
			<Modal  isVisible={isVisible} onClose={() => setIsVisible(false)}/>
			<Input label={'Email'} helperText={'This is a hint text to help user.'} placeholder={'Insert anything'} icon={<Mail />} />
		</div>
	)
}