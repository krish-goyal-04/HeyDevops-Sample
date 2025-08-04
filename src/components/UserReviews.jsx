import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    rating: 5,
    comment: "This course transformed my career! The instructors were amazing and the hands-on projects really helped me learn.",
  },
  {
    id: 2,
    name: "Bob Smith",
    rating: 4,
    comment: "Well structured content and interactive sessions. Highly recommended for beginners and professionals alike.",
  },
  {
    id: 3,
    name: "Catherine Lee",
    rating: 5,
    comment: "Loved the practical approach and the support from the team. The best investment I made for my career.",
  },
  {
    id: 4,
    name: "David Green",
    rating: 4,
    comment: "The course content is comprehensive and updated with the latest industry trends. Great experience overall.",
  },
  {
    id: 5,
    name: "Eva Brown",
    rating: 5,
    comment: "The projects and labs helped me gain confidence and skills needed to succeed in DevOps roles.",
  },
  {
    id: 6,
    name: "Frank Wilson",
    rating: 5,
    comment: "Excellent instructors and course materials. The community support is fantastic.",
  },
  {
    id: 7,
    name: "Grace Kim",
    rating: 4,
    comment: "Good pacing and quality content. The mentorship helped me understand complex concepts easily.",
  },
  {
    id: 8,
    name: "Henry Davis",
    rating: 5,
    comment: "Highly practical and career-focused course. I landed a job shortly after completing it!",
  },
];

const UserReviews = () => (
  <div className="w-full">
    <Carousel className="w-full">
      <CarouselContent>
        {reviews.map((review) => (
          <CarouselItem key={review.id}>
            <div className="bg-[#16213e] dark:bg-[#202b45] text-white rounded-2xl shadow-lg border border-blue-800/20 p-7 min-h-[250px] flex flex-col justify-between relative">
              <FaQuoteLeft className="absolute top-4 left-6 text-2xl text-blue-400/60" />
              <h3 className="text-lg font-bold mb-2 tracking-wide border-b border-yellow-400/70 pb-1 w-max mx-auto">{review.name}</h3>
              <div className="flex justify-center mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                  <span key={i} className="text-gray-500 text-lg">★</span>
                ))}
              </div>
              <blockquote className="text-center text-blue-100 italic leading-relaxed mt-2">
                "{review.comment}"
              </blockquote>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full z-10 shadow transition" />
      <CarouselNext className="right-3 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full z-10 shadow transition" />
    </Carousel>
  </div>
);
export default UserReviews;

