import { motion } from "motion/react";
import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "../utils/cn";

interface TimelineStep {
  title: string;
  description?: string;
  isCompleted: boolean;
  isActive: boolean;
}

export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="relative border-r-2 border-gray-100 pr-6 space-y-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          <div className="absolute -right-[35px] top-1 bg-white">
            {step.isCompleted ? (
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            ) : step.isActive ? (
              <div className="w-6 h-6 rounded-full border-2 border-gold-main flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gold-main" />
              </div>
            ) : (
              <Circle className="w-6 h-6 text-gray-300" />
            )}
          </div>
          <div>
            <h4 className={cn(
              "font-bold text-base",
              step.isActive ? "text-gold-dark" : step.isCompleted ? "text-gray-900" : "text-gray-400"
            )}>
              {step.title}
            </h4>
            {step.description && (
              <p className="text-sm text-gray-500 mt-1">{step.description}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
