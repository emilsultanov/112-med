'use client'
import {Dialog, Transition} from "@headlessui/react";
import {Button} from "@/components/Button";
import {X} from 'react-feather'
import {Display} from "@/components/Display";
import {Text} from "@/components/Text";
import {Fragment} from "react";


interface ModalProps {
	isVisible: boolean;
	onClose: () => void;
	title?: string;
}

export function Modal(props: ModalProps) {
	const {isVisible = true, onClose = () => {}, title} = props;
	return(
		<Transition appear show={isVisible} as={Fragment}>
			<Dialog open={isVisible} onClose={onClose} className={'z-10 relative'}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-70"
					leave="ease-in duration-200"
					leaveFrom="opacity-70"
					leaveTo="opacity-0"
				>
					<Dialog.Overlay className={'opacity-70 bg-gray-900 fixed inset-0'} />
				</Transition.Child>
				<div className={'fixed inset-0 flex items-start justify-center'}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Dialog.Panel className="w-full max-w-md bg-white rounded-md p-6 mt-52 transform transition-all">
							<div className={'flex justify-end'}>
								<Button size={'sm'} color={'gray-light'} onClick={onClose}>
									<X/>
								</Button>
							</div>
							<Dialog.Title as={Display} size={'xs'} variant={'semibold'}>
								Title
							</Dialog.Title>
							<Dialog.Description as={Text} size={'md'} variant={'regular'} className={'text-gray-600'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam assumenda consectetur cupiditate, dolorem illo, impedit pariatur sapiente tempora temporibus unde voluptate voluptatibus? Ab accusantium aut corporis expedita sunt.</Dialog.Description>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	)
}