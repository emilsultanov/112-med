import Image from "next/image";
import searchIcon from '../../public/icons/search.svg'
import locationMarkerIcon from '../../public/icons/location-marker.svg'

export default function Home() {
  return (
	 <main className={'h-full bg-white'}>
	 <section className={'bg-primary-blue-100 text-center text-white py-9'}>
		<div className="container">
		  <h2 className={'text-3xl not-italic font-normal capitalize mb-3'}>Бронируйте <br/>
			 медицинскую услугу</h2>
		  <p className={'text-sm capitalize font-normal not-italic leading-[normal]'}>Ищите клинику, врачей по всему миру </p>
		  <div className={'mt-8'}>
			 <ul className={'flex gap-1.5 justify-center'}>
				<li>
				  <button className={'text-black text-center text-xs not-italic font-medium leading-[normal] capitalize px-3 py-2.5 bg-white rounded-t'}>Услуги</button>
				</li>
				<li>
				  <button className={'text-white text-center text-xs not-italic font-medium leading-[normal] capitalize px-3 py-2.5 bg-primary-blue-200 rounded-t'}>Клиники</button>
				</li>
				<li>
				  <button className={'text-white text-center text-xs not-italic font-medium leading-[normal] capitalize px-3 py-2.5 bg-primary-blue-200 rounded-t'}>Врачи</button>
				</li>
			 </ul>
			 <div className={'bg-white p-4 rounded-md border border-primary-gray-100'}>
				<div className={'p-3 border border-primary-gray-100 rounded-sm bg-white flex mb-2.5'}>
				  <Image
					 src={searchIcon}
					 alt={'search-icon'}
					 className={'mr-3'}
				  />
				  <input type="text"
							className={'w-full placeholder-primary-gray-200 placeholder:text-xs placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] placeholder:capitalize'}
							placeholder={'Процедура, заболевание, клинка, врач'}
				  />
				</div>
				<div className={'p-3 border border-primary-gray-100 rounded-sm bg-white flex mb-2.5'}>
				  <Image
					 src={locationMarkerIcon}
					 alt={'location-marker-icon'}
					 className={'mr-3'}
				  />
				  <input type="text"
							className={'w-full placeholder-primary-gray-200 placeholder:text-xs placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] placeholder:capitalize'}
							placeholder={'Москва, Россия'}
				  />
				</div>
				<button className={'text-white text-center text-sm not-italic font-normal leading-[normal] capitalize bg-primary-blue-100 py-4 px-5 w-full rounded-sm'}>узнать
				  цены
				</button>
			 </div>
		  </div>
		</div>
	 </section>


  </main>)
}
