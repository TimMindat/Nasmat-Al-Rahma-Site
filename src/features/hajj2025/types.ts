export interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export interface Feature {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}