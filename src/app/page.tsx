import Image from "next/image";
import searchIcon from '../../public/icons/search.svg'
import locationMarkerIcon from '../../public/icons/location-marker.svg'

export default function Home() {
  return (
	 <main className={'h-full bg-white'}>
	 <section className={'bg-primary-blue-100 text-center md:text-left text-white py-9'}>
		<div className="container">
		  <h2 className={'text-3xl not-italic font-normal capitalize mb-3 md:text-4xl lg:text-5xl'}>Бронируйте <br/>медицинскую услугу</h2>
		  <p className={'text-sm capitalize font-normal not-italic leading-[normal] md:text-lg lg:text-2xl'}>Ищите клинику, врачей по всему миру </p>
		  <div className={'mt-8'}>
			 <ul className={'flex gap-1.5 justify-center md:justify-start md:pl-5 md:gap-3 lg:pl-7'}>
				<li>
				  <button className={'text-black text-center text-xs not-italic font-medium leading-[normal] capitalize px-3 py-2.5 bg-white rounded-t md:text-sm md:px-5 lg:text-base lg:px-7'}>Услуги</button>
				</li>
				<li>
				  <button className={'text-white text-center text-xs not-italic font-medium leading-[normal] capitalize px-3 py-2.5 bg-primary-blue-200 rounded-t md:text-sm md:px-5 lg:text-base lg:px-7'}>Клиники</button>
				</li>
				<li>
				  <button className={'text-white text-center text-xs not-italic font-medium leading-[normal] capitalize px-3 py-2.5 bg-primary-blue-200 rounded-t md:text-sm md:px-5 lg:text-base lg:-px-7'}>Врачи</button>
				</li>
			 </ul>
			 <div className={'bg-white p-4 rounded-md border border-primary-gray-100 md:py-5'}>
				<div className={'flex flex-col gap-2.5 md:flex-row'}>
				  <div className={'grow'}>
					 <div className={'p-3 border border-primary-gray-100 rounded-sm bg-white flex'}>
						<Image
						  src={searchIcon}
						  alt={'search-icon'}
						  className={'mr-3'}
						/>
						<input type="text"
								 className={'w-full placeholder-primary-gray-200 placeholder:text-xs placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] placeholder:capitalize md:placeholder:text-sm'}
								 placeholder={'Процедура, заболевание, клинка, врач'}
						/>
					 </div>
				  </div>
				  <div className={'grow'}>
					 <div className={'p-3 border border-primary-gray-100 rounded-sm bg-white flex'}>
						<Image
						  src={locationMarkerIcon}
						  alt={'location-marker-icon'}
						  className={'mr-3'}
						/>
						<input type="text"
								 className={'w-full placeholder-primary-gray-200 placeholder:text-xs placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] placeholder:capitalize md:placeholder:text-sm'}
								 placeholder={'Москва, Россия'}
						/>
					 </div>
				  </div>
				  <div>
					 <button className={'text-white text-center text-sm not-italic font-normal leading-[normal] capitalize bg-primary-blue-100 py-4 px-5 w-full rounded-sm'}>узнать
						цены
					 </button>
				  </div>
				</div>
			 </div>
		  </div>
		</div>
	 </section>
	
	 <section id={'main-page-search-categories'} className={'py-5'}>
		<div className="container">
		  <div className={'flex flex-col gap-3 md:flex-row md:items-baseline'}>
			 <div>
				<span className={'text-xs not-italic font-semibold leading-[normal] md:text-sm lg:text-base'}>Поиск по:</span>
			 </div>
			 <div className={'flex gap-1 md:gap-2'}>
				<button className={'bg-primary-blue-100 text-white text-center text-xs not-italic font-semibold leading-[normal] capitalize py-2 px-3 rounded-sm md:text-sm lg:text-base lg:py-2.5 lg:px-3.5'}>направлениям</button>
				<button className={'text-black text-center text-xs not-italic font-semibold leading-[normal] capitalize py-2 px-3 rounded-sm md:text-sm lg:text-base lg:py-2.5 lg:px-3.5'}>типам</button>
				<button className={'text-black text-center text-xs not-italic font-semibold leading-[normal] capitalize py-2 px-3 rounded-sm md:text-sm lg:text-base lg:py-2.5 lg:px-3.5'}>рейтингу</button>
				<button className={'text-black text-center text-xs not-italic font-semibold leading-[normal] capitalize py-2 px-3 rounded-sm md:text-sm lg:text-base lg:py-2.5 lg:px-3.5'}>бюджету</button>
			 </div>
		  </div>
		</div>
	 </section>

  </main>)
}
