
import React from 'react';
import TopNavbar from '@/components/layout/TopNavbar';
import BottomNavbar from '@/components/layout/BottomNavbar';
import DashboardCards from '@/components/dashboard/DashboardCards';
import { motion } from 'framer-motion';
import { useProject } from '@/context/ProjectContext';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const Dashboard = () => {
  const {
    projects,
    currentProject,
    setCurrentProject
  } = useProject();
  
  const handleProjectChange = (projectId: string) => {
    const selectedProject = projects.find(p => p.id === projectId);
    if (selectedProject) {
      setCurrentProject(selectedProject);
    }
  };
  
  return <div className="flex flex-col min-h-screen bg-gray-50">
      <TopNavbar />
      
      <motion.div 
        className="flex-1 container max-w-4xl mx-auto p-3 pb-20" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col mb-0"
        >
          {currentProject && <div className="mt-3 mb-2 relative w-full max-w-md mx-auto">
              <Select value={currentProject.id} onValueChange={handleProjectChange}>
                <SelectTrigger className="w-full h-12 bg-white text-base border-gray-200 shadow-sm">
                  <SelectValue placeholder="Select Project" />
                </SelectTrigger>
                <SelectContent className="bg-white border-tanseeq/30 rounded-lg z-50">
                  {projects.map(project => <SelectItem key={project.id} value={project.id} className="hover:bg-tanseeq/10 cursor-pointer rounded-md my-0.5">
                      {project.name}
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>}
        </motion.div>
        
        <DashboardCards />
      </motion.div>
      
      <BottomNavbar />
    </div>;
};

export default Dashboard;
