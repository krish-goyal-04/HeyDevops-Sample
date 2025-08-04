import { FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

const mentorLogos = [
  { src: "icons/391-3915457_informatica-logo-png-transparent-png.png", alt: "Informatica" },
  { src: "icons/Effective_Programming_for_America_logo.svg.png", alt: "Epam" },
  { src: "icons/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo.png", alt: "Amazon" },
  { src: "icons/png-transparent-paytm-standalone-hd-logo.png", alt: "Paytm" },
  { src: "icons/pngimg.com - microsoft_PNG20.png", alt: "Microsoft" },
  { src: "icons/SAP_logo.png", alt: "SAP" },
  { src: "icons/Walmart_logo.svg.png", alt: "Walmart" },
];

const MentorDetails = ()=>{
    return(
        <div>
            <section className="w-full  bg-white dark:bg-gray-900 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8 px-10 py-8 md:py-20 md:pr-14">
                <div className="flex-shrink-0">
                <img
                    src="/assets/profile.webp"
                    alt="Praveen Singampalli"
                    className="w-80 h-102 object-cover rounded-2xl shadow-lg"
                />
                </div>
                {/* Mentor Details */}
                <div className="flex-1 flex flex-col items-start">
                <button className="mb-3 px-4 py-1 text-md font-medium bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition">
                    Meet your mentor
                </button>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-1">
                    Praveen Singampalli
                </h2>
                <p className="font-semibold text-gray-800 mb-4 text-xl dark:text-white">
                        DevOps and Cloud Engineer at one of the largest retail tech industry
                    </p>
                <div className="text-gray-800 text-lg dark:text-gray-200 mt-4 mb-4">
                    <p className=" mb-3">
                        Hey! I am a youtuber by passion and a teacher/mentor to the DevOps community. I love to see my community generating the success results as I have trained more than 15,000 devops professionals on various platforms like Youtube, Linkedin, Upgrad etc.
                    </p>
                    <p className=" mb-6">
                        My mission is to help professionals like you to make sure you are also getting into your dream organizations.
                    </p>
                </div>
                
                <div className="mb-10">
                    <span className="font-semibold text-gray-800 mb-4 text-xl dark:text-gray-200">Cracked interviews at top brands such as</span>
                    <div className="flex flex-wrap gap-4 items-center mt-3 ">
                    {mentorLogos.map(logo => (
                        <img
                        key={logo.alt}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-6 object-contain"
                        />
                    ))}
                    </div>
                </div>
                {/* Social/Stats */}
                <div className="flex gap-8 mt-2 text-black dark:text-white">
                    <div className="flex items-center gap-1 text-red-600 text-xl font-bold">
                    <FaYoutube size={36} />
                    <span className="text-black dark:text-white text-lg font-semibold ml-1">50k</span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-700 text-xl font-bold">
                    <FaLinkedin size={36} />
                    <span className="text-black dark:text-white text-lg font-semibold ml-1">90k</span>
                    </div>
                    <div className="flex items-center gap-1 text-sky-500 text-xl font-bold">
                    <FaTwitter size={36} />
                    <span className="text-black dark:text-white text-lg font-semibold ml-1">11k</span>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}
export default MentorDetails