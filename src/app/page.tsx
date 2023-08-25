import {Display} from "@/components/Display";
import {Text} from "@/components/Text";
import {Button} from "@/components/Button";
import {AlertCircle} from 'react-feather'
import {Modal} from "@/components/Modal";


export default function Home() {
	return (
		<div className={'h-full'}>
			<div className={'mb-7'}>
				<Display tag={'h1'} size={'2xl'} variant={'regular'}>Display-2xl-regular</Display>
				<Display tag={'h1'} size={'2xl'} variant={'medium'}>Display-2xl-medium</Display>
				<Display tag={'h1'} size={'2xl'} variant={'semibold'}>Display-2xl-semibold</Display>
				<Display tag={'h1'} size={'2xl'} variant={'bold'}>Display-2xl-bold</Display>
			</div>
			<div className={'mb-7'}>
				<Display tag={'h1'} size={'xl'} variant={'regular'}>Display-xl-regular</Display>
				<Display tag={'h1'} size={'xl'} variant={'medium'}>Display-xl-medium</Display>
				<Display tag={'h1'} size={'xl'} variant={'semibold'}>Display-xl-semibold</Display>
				<Display tag={'h1'} size={'xl'} variant={'bold'}>Display-xl-bold</Display>
			</div>
			<div className={'mb-7'}>
				<Display tag={'h1'} size={'lg'} variant={'regular'}>Display-xl-regular</Display>
				<Display tag={'h1'} size={'lg'} variant={'medium'}>Display-xl-medium</Display>
				<Display tag={'h1'} size={'lg'} variant={'semibold'}>Display-xl-semibold</Display>
				<Display tag={'h1'} size={'lg'} variant={'bold'}>Display-xl-bold</Display>
			</div>
			<div className={'flex justify-around'}>
				<div className={'mb-7 shadow-xs p-2'}>
					<Text size={'xl'} variant={'regular'}>Text-xl-regular</Text> // new Text(xl, regular)
					<Text size={'xl'} variant={'medium'}>Text-xl-medium</Text>
					<Text size={'xl'} variant={'semibold'}>Text-xl-semibold</Text>
					<Text size={'xl'} variant={'bold'}>Text-xl-bold</Text>
				</div>
				<div className={'mb-7 shadow-sm p-2'}>
					<Text size={'lg'} variant={'regular'}>Text-lg-regular</Text>
					<Text size={'lg'} variant={'medium'}>Text-lg-medium</Text>
					<Text size={'lg'} variant={'semibold'}>Text-lg-semibold</Text>
					<Text size={'lg'} variant={'bold'}>Text-lg-bold</Text>
				</div>
				<div className={'mb-7 shadow-md p-2'}>
					<Text size={'md'} variant={'regular'}>Text-md-regular</Text>
					<Text size={'md'} variant={'medium'}>Text-md-medium</Text>
					<Text size={'md'} variant={'semibold'}>Text-md-semibold</Text>
					<Text size={'md'} variant={'bold'}>Text-md-bold</Text>
				</div>
				<div className={'mb-7 shadow-lg p-2'}>
					<Text size={'sm'} variant={'regular'}>Text-sm-regular</Text>
					<Text size={'sm'} variant={'medium'}>Text-sm-medium</Text>
					<Text size={'sm'} variant={'semibold'}>Text-sm-semibold</Text>
					<Text size={'sm'} variant={'bold'}>Text-sm-bold</Text>
				</div>
				<div className={'mb-7 shadow-xl p-2'}>
					<Text size={'xs'} variant={'regular'}>Text-xs-regular</Text>
					<Text size={'xs'} variant={'medium'}>Text-xs-medium</Text>
					<Text size={'xs'} variant={'semibold'}>Text-xs-semibold</Text>
					<Text size={'xs'} variant={'bold'}>Text-xs-bold</Text>
				</div>
				<div className={'mb-7 shadow-2xl p-2'}>
					<Text size={'xs'} variant={'regular'}>Text-xs-regular</Text>
					<Text size={'xs'} variant={'medium'}>Text-xs-medium</Text>
					<Text size={'xs'} variant={'semibold'}>Text-xs-semibold</Text>
					<Text size={'xs'} variant={'bold'}>Text-xs-bold</Text>
				</div>
				<div className={'mb-7 shadow-3xl p-2'}>
					<Text size={'xs'} variant={'regular'}>Text-xs-regular</Text>
					<Text size={'xs'} variant={'medium'}>Text-xs-medium</Text>
					<Text size={'xs'} variant={'semibold'}>Text-xs-semibold</Text>
					<Text size={'xs'} variant={'bold'}>Text-xs-bold</Text>
				</div>
			</div>
			<div className="mt-7 p-5 flex gap-2 items-start">
				<Button size={'sm'} color={'primary-dark'}>
					<AlertCircle className={'h-5'} />
					sm-primary-dark
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'md'} color={'primary-dark'}>
					<AlertCircle className={'h-5'} />
					md-primary-dark
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'lg'} color={'primary-dark'}>
					<AlertCircle className={'h-5'} />
					lg-primary-dark
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'xl'} color={'primary-dark'}>
					<AlertCircle className={'h-5'} />
					xl-primary-dark
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'2xl'} color={'primary-dark'}>
					<AlertCircle className={'h-6'} />
					2xl-primary-dark
					<AlertCircle className={'h-6'} />
				</Button>
			</div>
			<div className="mt-7 p-5 flex gap-2 items-start">
				<Button size={'sm'} color={'primary-medium'}>
					<AlertCircle className={'h-5'} />
					sm-primary-medium
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'md'} color={'primary-medium'}>
					<AlertCircle className={'h-5'} />
					md-primary-medium
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'lg'} color={'primary-medium'}>
					<AlertCircle className={'h-5'} />
					lg-primary-medium
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'xl'} color={'primary-medium'}>
					<AlertCircle className={'h-5'} />
					xl-primary-medium
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'2xl'} color={'primary-medium'} disabled>
					<AlertCircle className={'h-5'} />
					2xl-primary-medium
					<AlertCircle className={'h-5'} />
				</Button>
			</div>
			<div className="mt-7 p-5 flex gap-2 items-start">
				<Button size={'sm'} color={'primary-light'}>
					<AlertCircle className={'h-5'} />
					sm-primary-light
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'md'} color={'primary-light'}>
					<AlertCircle className={'h-5'} />
					md-primary-light
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'lg'} color={'primary-light'}>
					<AlertCircle className={'h-5'} />
					lg-primary-light
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'xl'} color={'primary-light'}>
					<AlertCircle className={'h-5'} />
					xl-primary-light
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'2xl'} color={'primary-light'} disabled>
					<AlertCircle className={'h-5'} />
					2xl-primary-light
					<AlertCircle className={'h-5'} />
				</Button>
			</div>
			<div className="mt-7 p-5 flex gap-2 items-start">
				<Button size={'sm'} color={'gray-dark'}>
					<AlertCircle className={'h-5'} />
					sm-gray-dark
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'md'} color={'gray-dark'}>
					<AlertCircle className={'h-5'} />
					md-gray-dark
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'lg'} color={'gray-dark'}>
					<AlertCircle className={'h-5'} />
					lg-gray-dark
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'xl'} color={'gray-dark'}>
					<AlertCircle className={'h-5'} />
					xl-gray-dark
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'2xl'} color={'gray-dark'} disabled>
					<AlertCircle className={'h-5'} />
					2xl-gray-dark
					<AlertCircle className={'h-5'} />
				</Button>
			</div>
			<div className="mt-7 p-5 flex gap-2 items-start">
				<Button size={'sm'} color={'gray-medium'}>
					<AlertCircle className={'h-5'} />
					sm-gray-medium
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'md'} color={'gray-medium'}>
					<AlertCircle className={'h-5'} />
					md-gray-medium
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'lg'} color={'gray-medium'}>
					<AlertCircle className={'h-5'} />
					lg-gray-medium
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'xl'} color={'gray-medium'}>
					<AlertCircle className={'h-5'} />
					xl-gray-medium
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'2xl'} color={'gray-medium'} disabled>
					<AlertCircle className={'h-5'} />
					2xl-gray-medium
					<AlertCircle className={'h-5'} />
				</Button>
			</div>
			<div className="mt-7 p-5 flex gap-2 items-start">
				<Button size={'sm'} color={'gray-light'}>
					<AlertCircle className={'h-5'} />
					sm-gray-light
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'md'} color={'gray-light'}>
					<AlertCircle className={'h-5'} />
					md-gray-light
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'lg'} color={'gray-light'}>
					<AlertCircle className={'h-5'} />
					lg-gray-light
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'xl'} color={'gray-light'}>
					<AlertCircle className={'h-5'} />
					xl-gray-light
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'2xl'} color={'gray-light'} disabled>
					<AlertCircle className={'h-5'} />
					2xl-gray-light
					<AlertCircle className={'h-5'} />
				</Button>
			</div>
			<div className="mt-7 p-5 flex gap-2 items-start">
				<Button size={'sm'} color={'error-dark'}>
					<AlertCircle className={'h-5'} />
					sm-error-dark
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'md'} color={'error-dark'}>
					<AlertCircle className={'h-5'} />
					md-gray-dark
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'lg'} color={'error-dark'}>
					<AlertCircle className={'h-5'} />
					lg-gray-dark
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'xl'} color={'error-dark'}>
					<AlertCircle className={'h-5'} />
					xl-gray-dark
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'2xl'} color={'error-dark'} disabled>
					<AlertCircle className={'h-5'} />
					2xl-gray-dark
					<AlertCircle className={'h-5'} />
				</Button>
			</div>
			<div className="mt-7 p-5 flex gap-2 items-start">
				<Button size={'sm'} color={'error-medium'}>
					<AlertCircle className={'h-5'} />
					sm-error-medium
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'md'} color={'error-medium'}>
					<AlertCircle className={'h-5'} />
					md-gray-medium
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'lg'} color={'error-medium'}>
					<AlertCircle className={'h-5'} />
					lg-gray-medium
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'xl'} color={'error-medium'}>
					<AlertCircle className={'h-5'} />
					xl-gray-medium
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'2xl'} color={'error-medium'} disabled>
					<AlertCircle className={'h-5'} />
					2xl-gray-medium
					<AlertCircle className={'h-5'} />
				</Button>
			</div>
			<div className="mt-7 p-5 flex gap-2 items-start">
				<Button size={'sm'} color={'error-light'}>
					<AlertCircle className={'h-5'} />
					sm-error-light
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'md'} color={'error-light'}>
					<AlertCircle className={'h-5'} />
					md-gray-light
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'lg'} color={'error-light'}>
					<AlertCircle className={'h-5'} />
					lg-gray-light
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'xl'} color={'error-light'}>
					<AlertCircle className={'h-5'} />
					xl-gray-light
					<AlertCircle className={'h-5'} />
				</Button>
				<Button size={'2xl'} color={'error-light'} disabled>
					<AlertCircle className={'h-5'} />
					2xl-gray-light
					<AlertCircle className={'h-5'} />
				</Button>
			</div>
			
		</div>
	)
}
