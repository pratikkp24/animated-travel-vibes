
import React from 'react';
import Logo from '@/components/Logo';

const PageHeader: React.FC = () => {
  return (
    <header className="w-full pt-6 px-6">
      <div className="max-w-screen-xl mx-auto flex justify-start">
        <div className="animate-slide-up">
          <Logo size="md" animated={false} imageSrc="/lovable-uploads/8ef10f67-4be2-44c7-8331-150171b1f4db.png" hideText={true} />
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
