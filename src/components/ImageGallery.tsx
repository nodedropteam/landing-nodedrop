import React from 'react'
import WebsiteMockup1 from "../assets/website_mockup_business_energy.png"
import WebsiteMockup2 from "../assets/website_mockup_business_museum.png"
import WebsiteMockup3 from "../assets/website_mockup_business_realestate.png"
import WebsiteMockup4 from "../assets/website_mockup_saas.png"
import Image from 'next/image'

export default function ImageGallery() {
    return (
        <div className='gallery-wrapper'>
            <div className="gallery-inner flex flex-wrap gap-2">
                <Image className='w-full sm:w-[35%] lg:w-[18%] grow'  height={300} src={WebsiteMockup1} alt="Website Mockup 1" />
                <Image className='w-full sm:w-[35%] lg:w-[18%] grow'  height={300} src={WebsiteMockup2} alt="Website Mockup 2" />
                <Image className='w-full sm:w-[35%] lg:w-[18%] grow'  height={300} src={WebsiteMockup3} alt="Website Mockup 3" />
                <Image className='w-full sm:w-[35%] lg:w-[18%] grow'  height={300} src={WebsiteMockup4} alt="Website Mockup 4" />
            </div>
        </div>
    )
}
