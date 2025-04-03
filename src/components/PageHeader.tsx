
import React from 'react';
import Logo from '@/components/Logo';

const PageHeader: React.FC = () => {
  return (
    <header className="w-full pt-6 px-6">
      <div className="max-w-screen-xl mx-auto flex justify-start">
        <div className="animate-slide-up">
          <Logo size="md" animated={false} imageSrc="/lovable-uploads/911a6fe7-c7d7-4128-bd52-d0129ca6f8d6.png" hideText={true} />
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
