import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const UpdatePannel = () => {
  return (
    <Card className="rounded-2xl shadow-lg dark:shadow-none dark:bg-gray-900 transition-colors duration-300">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700 pb-2">
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Course Updates
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-gray-700 dark:text-yellow-300 text-lg leading-relaxed">
          Kubernetes HandsOn Project Classes Starting This Week! Enrol Now!
        </p>
      </CardContent>
    </Card>
  );
};

export default UpdatePannel;
