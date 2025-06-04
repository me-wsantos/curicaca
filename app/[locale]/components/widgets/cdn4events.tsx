import Script from "next/script";

interface Cdn4EventsProps {
  args: string;
}

export default function Cdn4Events({ args }: Cdn4EventsProps) {
  return (
    <>
      <Script
        id="widget-4events"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (w, d, s, o, f, js, fjs) {
              w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
              js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
              js.id = o; js.src = f; js.async = 1;
              fjs.parentNode.insertBefore(js, fjs);
            }(window, document, 'script', 'widget4Events', 'https://cdn.4.events/mi-widget/bundle.js'));
            widget4Events('init', {
                client_id: '24825',
                event_id: '1',
                position: 'left',
                button_text: 'INSCREVA-SE',
                language: 'pt-br',
                flow: 'default',
                image: 'https://4eventsfiles.nyc3.digitaloceanspaces.com/imagem_fundo_widget/24825/1/9bffead781a5b5f504d84a87e60f006266531d2d.JPG',
                theme: {
                  button_color: '#bcdb07',
                  button_text_color: '#e8370f',
                },
              });
          `,
        }}
      />
    </>
  );
}