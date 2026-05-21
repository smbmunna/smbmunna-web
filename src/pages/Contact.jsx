import about_me_img from '@/assets/about_me_cover.jpg'

export default function Contact() {

    return (
        <div className="w-full mb-16 px-4 pt-16 flex flex-col items-center min-h-full mx-auto rounded-2xl bg-[#343539]">
            <img className='rounded-2xl w-3/4 h-1/4' src={about_me_img} alt="About me Cover" />
            <h1 className='mt-12 font-semibold text-2xl'>Page Under Maintenance</h1>
        </div>
    )
}