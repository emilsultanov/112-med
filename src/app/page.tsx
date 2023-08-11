
import {Display} from "@/components/Display";

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
    </div>
  )
}
