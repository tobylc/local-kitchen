import React from 'react';
import { ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <div className="relative">
        <ChefHat className="h-8 w-8 text-orange-500 transform group-hover:scale-105 transition-transform" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-400 rounded-full opacity-75" />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-gray-900 leading-none">Local</span>
        <span className="text-2xl font-bold text-orange-500 leading-none">Kitchen</span>
      </div>
    </Link>
  );
};

export default Logo;