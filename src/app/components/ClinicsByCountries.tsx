import Image from "next/image";


import baku from "../../../public/background-images/baku.png";
import azFlag from "../../../public/icons/azerbaijan-flag.svg";
import russia from "../../../public/background-images/russia.png";
import rsFlag from "../../../public/icons/russia-flag.svg";


export function ClinicsByCountries(){
  return(
	 <section className={'py-4'}>
		<div className="container">
		  <div className={'mb-7'}>
			 <h5 className={'text-base not-italic font-semibold leading-5 capitalize mb-2'}>Выберите клинику в другой <br className={'xs:hidden'}/> стране дешевле:</h5>
			 <span className={'text-sm not-italic font-normal leading-[normal] lowercase'}>Поиск по странам, <br className={'xs:hidden'}/> популярные направления</span>
		  </div>
		  <div className={'gap-4 grid grid-cols-1 sm:grid-cols-3'}>
			 <div>
				<div className={'relative'}>
				  <Image
					 src={baku}
					 alt={'Baku'}
				  />
				  <Image
					 src={azFlag}
					 alt={'Azerbaijan flag'}
					 className={'absolute top-4 left-5'}
				  />
				</div>
			 </div>
			 <div>
				<div className={'relative'}>
				  <Image
					 src={baku}
					 alt={'Baku'}
				  />
				  <Image
					 src={azFlag}
					 alt={'Azerbaijan flag'}
					 className={'absolute top-4 left-5'}
				  />
				</div>
			 </div>
			 <div className={'relative'}>
				<Image
				  src={russia}
				  alt={'Russia'}
				/>
				<Image
				  src={rsFlag}
				  alt={'Russia flag'}
				  className={'absolute top-4 left-5'}
				/>
			 </div>
		  </div>
		</div>
	 </section>
  )
}