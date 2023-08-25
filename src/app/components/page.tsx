'use client'

import {useState} from "react";
import {Button} from "@/components/Button";
import {Modal} from "@/components/Modal";

export default function Components(){
	const [isVisible, setIsVisible] = useState(false);
	
	return(
		<div>
			<Button size={'md'} color={'primary-dark'} onClick={() => setIsVisible(true)}>
				Open modal
			</Button>
			<Modal  isVisible={isVisible} onClose={() => setIsVisible(false)}/>
		</div>
	)
}