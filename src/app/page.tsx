
import {Display} from "@/components/Display";
import {Text} from "@/components/Text";

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
      <div className={'mb-7'}>
        <Text size={'xl'} variant={'regular'}>Text-xl-regular</Text>
        <Text size={'xl'} variant={'medium'}>Text-xl-medium</Text>
        <Text size={'xl'} variant={'semibold'}>Text-xl-semibold</Text>
        <Text size={'xl'} variant={'bold'}>Text-xl-bold</Text>
      </div>
      <div className={'mb-7'}>
        <Text size={'lg'} variant={'regular'}>Text-lg-regular</Text>
        <Text size={'lg'} variant={'medium'}>Text-lg-medium</Text>
        <Text size={'lg'} variant={'semibold'}>Text-lg-semibold</Text>
        <Text size={'lg'} variant={'bold'}>Text-lg-bold</Text>
      </div>
      <div className={'mb-7'}>
        <Text size={'md'} variant={'regular'}>Text-md-regular</Text>
        <Text size={'md'} variant={'medium'}>Text-md-medium</Text>
        <Text size={'md'} variant={'semibold'}>Text-md-semibold</Text>
        <Text size={'md'} variant={'bold'}>Text-md-bold</Text>
      </div>
      <div className={'mb-7'}>
        <Text size={'sm'} variant={'regular'}>Text-sm-regular</Text>
        <Text size={'sm'} variant={'medium'}>Text-sm-medium</Text>
        <Text size={'sm'} variant={'semibold'}>Text-sm-semibold</Text>
        <Text size={'sm'} variant={'bold'}>Text-sm-bold</Text>
      </div>
      <div className={'mb-7'}>
        <Text size={'xs'} variant={'regular'}>Text-xs-regular</Text>
        <Text size={'xs'} variant={'medium'}>Text-xs-medium</Text>
        <Text size={'xs'} variant={'semibold'}>Text-xs-semibold</Text>
        <Text size={'xs'} variant={'bold'}>Text-xs-bold</Text>
      </div>
    </div>
  )
}
