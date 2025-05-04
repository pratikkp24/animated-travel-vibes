
import React from 'react';
import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';

const PageHeader: React.FC = () => {
  return (
    <header className="w-full pt-6 px-6">
      <div className="max-w-screen-xl mx-auto flex justify-start">
        <div className="animate-slide-up">
          <Link to="/">
            <Logo size="md" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
