// Fix: Import React to resolve namespace error
import React from 'react';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface NavLink {
  name: string;
  href: string;
}