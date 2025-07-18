// Tipos para el proyecto CuaimasPower
import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  isPopular?: boolean;
}

export interface Plan {
  id: string;
  icon: LucideIcon;
  color: string;
  borderColor: string;
  popular: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}