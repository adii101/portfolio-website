import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

const SkillBar = ({ name, percentage, color = "bg-primary" }: SkillBarProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Progress value={percentage} className="h-2" indicatorColor={color} />
      </motion.div>
    </div>
  );
};

export default SkillBar;
