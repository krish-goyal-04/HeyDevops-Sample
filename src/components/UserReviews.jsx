import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Demo review data
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

const UserReviews = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <Carousel loop={true}>
        <CarouselContent className="flex space-x-6">
          {reviews.map(({ id, name, rating, comment }) => (
            <CarouselItem
              key={id}
              className="w-80 flex-shrink-0 rounded-2xl bg-white dark:bg-gray-800 shadow-lg p-6 text-gray-900 dark:text-gray-100 transition"
            >
              <div className="flex flex-col h-full">
                <h3 className="font-bold text-xl mb-2">{name}</h3>
                <p className="mb-4 text-yellow-400 text-lg">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</p>
                <p className="text-base leading-relaxed flex-1">"{comment}"</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full bg-blue-600 text-white p-2 shadow-lg hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 transition cursor-pointer"
          aria-label="Previous review"
        />
        <CarouselNext
          className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full bg-blue-600 text-white p-2 shadow-lg hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 transition cursor-pointer"
          aria-label="Next review"
        />
      </Carousel>
    </div>
  );
};

export default UserReviews;
