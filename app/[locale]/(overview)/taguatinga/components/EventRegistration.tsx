
import React from 'react';
import { Button } from './button';
import { Card } from './card';
import { Input } from './input';
//import { Input } from '@/components/ui/input';

const EventRegistration: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white" id="inscricao">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Inscreva-se no evento</h2>
          <p className="text-lg mb-8 text-blue-100">Vagas limitadas. Garanta já a sua participação!</p>
          
          <Card className="p-6 bg-white text-left">
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Seu nome completo" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                    Organização/Empresa
                  </label>
                  <Input 
                    id="organization" 
                    type="text" 
                    placeholder="Nome da sua organização" 
                    className="w-full"
                  />
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2">
                    Confirmar inscrição
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 text-center mt-2">
                  Ao se inscrever, você concorda com os nossos termos de uso e política de privacidade.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;
