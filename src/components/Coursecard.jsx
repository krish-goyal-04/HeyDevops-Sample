import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IndianRupee,BadgePercent,Crown ,Radio,Calendar,SquareCode,LockKeyholeOpen,CircleDollarSign} from "lucide-react";
import {Button} from "./ui/button"
const Coursecard = () => {
  return (
    <div>
      <Card className="
      rounded-2xl overflow-hidden
      shadow-xl
      transition
      duration-300
      hover:shadow-2xl
      hover:bg-gray-300
      dark:hover:bg-gray-800
      relative
    ">
        <div className="absolute top-0 left-0 z-10 flex gap-2">
          <div className="bg-yellow-500 flex justify-center items-center text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-md select-none">
            <Crown className="mr-1" />
            Premium
          </div>
        </div>

        <CardHeader className="p-0">
          <img
            src="/assets/batch-12-course-banner.webp"
            alt="Batch 12 Course Banner"
            className="w-full object-cover"
          />
        </CardHeader>

        <CardContent>
          <CardTitle className="text-2xl font-bold mb-2">
            DevOps Batch 12
          </CardTitle>
          <CardDescription className="flex items-center space-x-6">
            {/* Offer Price */}
          <div className="flex items-center space-x-1 text-green-700 text-3xl font-bold">
            <IndianRupee />
            <span>4,999</span>
          </div>

          {/* Original Price with strikethrough */}
          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-lg line-through select-none">
            <IndianRupee />
            <span>12,999</span>
          </div>
          <div className="bg-red-500 flex justify-center items-center text-white text-xs font-bold px-3 py-1 rounded-full shadow-md select-none">
            <BadgePercent className="mr-1 ml-0" />
            OFFER
          </div>
          </CardDescription>

        <CardDescription className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-4">
            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 text-lg">
                <Radio className="text-blue-600 dark:text-blue-400 w-6 h-6 flex-shrink-0" />
                <span>Live Class</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 text-lg">
                <Calendar className="text-blue-600 dark:text-blue-400 w-6 h-6 flex-shrink-0" />
                <span>2 Months Duration</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 text-lg">
                <SquareCode className="text-blue-600 dark:text-blue-400 w-6 h-6 flex-shrink-0" />
                <span>14 Major Projects</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 text-lg">
                <LockKeyholeOpen className="text-blue-600 dark:text-blue-400 w-6 h-6 flex-shrink-0" />
                <span>2 Years Access</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 text-lg">
                <CircleDollarSign className="text-blue-600 dark:text-blue-400 w-6 h-6 flex-shrink-0" />
                <span>40 LPA Highest Salary</span>
            </div>
        </CardDescription>

          <CardDescription className="flex justify-between items-center mt-4">
            <Button
                variant="primary"
                className="
                    px-5 py-2 text-lg font-semibold rounded-md transition
                    bg-blue-600 text-white
                    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                    dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-blue-400
                "
                >
                Book Seat
                </Button>

                <Button
                variant="primary"
                className="
                    px-5 py-2 text-lg font-semibold rounded-md transition
                    bg-blue-600 text-white
                    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                    dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-blue-400
                "
                >
                Demo Session
                </Button>
        </CardDescription>

        </CardContent>

        <CardFooter>
          
        </CardFooter>
      </Card>
    </div>
  );
};

export default Coursecard;
