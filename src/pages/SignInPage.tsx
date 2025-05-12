
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { Button } from '@/components/ui/button';

const SignInPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-md mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Sign In</h1>
              <p className="text-gray-600">
                Welcome back! Please sign in to your account
              </p>
            </div>
            
            <LoginForm />
            
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">
                Don't have an account yet?
              </p>
              <Link to="/signup">
                <Button variant="outline" className="w-full">
                  Create an Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignInPage;
