
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface EventHeaderProps {
  title: string;
  date: string;
  subtitle?: string;
  backgroundImage?: string;
}

const EventHeader: React.FC<EventHeaderProps> = ({ title, date, subtitle, backgroundImage }) => {
  const [showSabado, setShowSabado] = React.useState(false);
  const [showDomingo, setShowDomingo] = React.useState(false);

  return (
    <div className="relative">
      <div
        className="bg-[url('/img/programacao/taguatinga/background.png')] h-[600px] md:h-[600px] pt-6 flex items-center justify-center"
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-0">
            <Image
              src="/img/programacao/taguatinga/curicaca.png"
              layout="responsive"
              width={250}
              height={150}
              alt="Logo Curicaca"
            />
          </div>
          <p className="text-xl md:text-2xl text-white mb-8 mt-8">Taguatinga, {date}</p>
          <p className="text-xl md:text-2xl text-white mb-8 mt-4 uppercase font-bold">Retire aqui o seu ingresso gratuito:</p>
          <div className="flex flex-wrap gap-4 justify-center lg:flex-row">

            <div
              className="relative inline-block text-left w-full md:w-[50%] lg:w-auto"
              onClick={() => setShowSabado(!showSabado)}
            >
              <div>
                <button
                  type="button"
                  className="w-full border-white text-white hover:bg-white hover:text-purple-900 px-6 py-3 rounded-md text-lg font-medium border flex items-center justify-between"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Sábado 24/05
                  <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>

              {showSabado && (
                <div
                  className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    <Link
                      href="https://app.4.events/c/SlN4RE1GZ3NRelJnQ21BSw==/plugin/inscricao/1/c81e728d9d4c2f636f067f89cc14862c?direct=true&autoopen=true"
                      target="_blank"
                      className="block px-4 py-2 text-lg text-gray-700"
                      role="menuitem"
                      id="menu-item-0"
                    >Cidadão</Link>

                    <Link
                      href="https://app.4.events/c/SlN4RE1GZ3NRelJnQ21BSw==/plugin/inscricao/1/eccbc87e4b5ce2fe28308fd9f2a7baf3?direct=true&autoopen=true"
                      target="_blank"
                      className="block px-4 py-2 text-lg text-gray-700"
                      role="menuitem"
                      id="menu-item-0"
                    >Empreendedor</Link>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative inline-block text-left w-full md:w-[50%] lg:w-auto"
              onClick={() => setShowDomingo(!showDomingo)}
            >
              <div>
                <button
                  type="button"
                  className="w-full border-white text-white hover:bg-white hover:text-purple-900 px-6 py-3 rounded-md text-lg font-medium border flex items-center justify-between"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Domingo 25/05
                  <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>

              {showDomingo && (
                <div
                  className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    <Link
                      href="https://app.4.events/c/SlN4RE1GZ3NRelJnQ21BSw==/plugin/inscricao/2/1679091c5a880faf6fb5e6087eb1b2dc?direct=true&autoopen=true"
                      target="_blank"
                      className="block px-4 py-2 text-lg text-gray-700"
                      role="menuitem"
                      id="menu-item-0"
                    >Cidadão</Link>

                    <Link
                      href="https://app.4.events/c/SlN4RE1GZ3NRelJnQ21BSw==/plugin/inscricao/2/8f14e45fceea167a5a36dedd4bea2543?direct=true&autoopen=true"
                      target="_blank"
                      className="block px-4 py-2 text-lg text-gray-700"
                      role="menuitem"
                      id="menu-item-0"
                    >Empreendedor</Link>
                  </div>
                </div>
              )}
            </div>











            {/* <Button className="bg-white text-purple-900 hover:bg-purple-50 px-6 py-3 rounded-md text-lg font-medium">
              Inscreva-se
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-6 py-3 rounded-md text-lg font-medium">
              Programa Completo <ArrowRight className="ml-2 h-5 w-5" />
            </Button> */}
          </div>
        </div>
      </div>
      {/* <div className="bg-black py-4 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-white font-medium">← Voltar</Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default EventHeader;
