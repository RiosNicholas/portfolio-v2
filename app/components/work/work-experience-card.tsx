import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface WorkExperienceCardProps {
  position: string;
  company: string;
  startDate: string;
  location: string;
  endDate?: string;
  description?: string;
};

const WorkExperienceCard = ({ position, company, location, startDate, endDate, description }: WorkExperienceCardProps) => {
  return (
    <Card className="flex p-4 mb-4 border-neutral-300 w-full md:w-4/5 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <CardHeader>
        <CardDescription className="flex justify-between">
          <p className="text-sm text-muted-foreground mb-2">
            {startDate} – {endDate || 'Present'}
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            {location}
          </p>
        </CardDescription>
        <CardTitle>
          <h3 className="text-lg font-bold">{position}</h3>
          <p className="semibold">{company}</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        { description && (<p className="text-sm">{description}</p>)}
      </CardContent>
    </Card>
  );
};

export default WorkExperienceCard;
