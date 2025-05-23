
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavbar from '@/components/layout/BottomNavbar';
import FaceRecognition from '@/components/check-in/FaceRecognition';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const CheckIn = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <motion.div 
        className="p-4 flex items-center justify-between bg-tanseeq text-white shadow-md"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            className="p-2 text-white mr-2"
            onClick={() => navigate('/dashboard')}
          >
            <ArrowLeft className="h-7 w-7" />
          </Button>
          
          <div className="text-white font-medium text-base md:text-lg">
            Check In
          </div>
        </div>
        
        <div className="w-10"></div> {/* Spacer for balancing */}
      </motion.div>
      
      <motion.div 
        className="flex-1 container max-w-4xl mx-auto p-4 pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="glassmorphism mobile-card p-6">
          <FaceRecognition isCheckIn={true} />
        </div>
      </motion.div>
      
      <BottomNavbar />
    </div>
  );
};

export default CheckIn;
