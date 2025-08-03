import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const UpdatePannel = () => {
  return (
    <div className="max-w-md w-full mt-5 mx-auto">
      <Card className="rounded-2xl shadow-lg dark:shadow-none dark:bg-gray-900 transition-colors duration-300">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700 pb-2">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Course Updates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-yellow-300 text-lg leading-relaxed">
            Kubernetes HandsOn Project Classes Starting This Week! Enrol Now!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdatePannel;
