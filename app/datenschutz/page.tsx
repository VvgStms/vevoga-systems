export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#06070b] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold mb-10">Datenschutzerklärung</h1>

        <p className="mb-6">
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung personenbezogener Daten auf dieser Website.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">1. Verantwortlicher</h2>
        <p className="mb-6">
          Vevoga Systems<br />
          Andreas Kallweit<br />
          Panoramastraße 30<br />
          77815 Bühl<br />
          E-Mail: info@vevoga-systems.de
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">2. Datenverarbeitung</h2>
        <p className="mb-6">
          Beim Besuch dieser Website werden keine personenbezogenen Daten gespeichert, sofern Sie uns diese nicht aktiv mitteilen.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">3. Kontakt</h2>
        <p className="mb-6">
          Wenn Sie uns kontaktieren, werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Die Übermittlung erfolgt über Ihr E-Mail-Programm.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">4. Hosting</h2>
        <p className="mb-6">
          Diese Website wird über Vercel bereitgestellt. Es kann technisch bedingt zur Verarbeitung von Server-Logfiles kommen.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">5. Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer Daten.
        </p>
      </div>
    </div>
  );
}