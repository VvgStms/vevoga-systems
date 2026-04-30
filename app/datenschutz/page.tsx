export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#06070b] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold mb-10">Datenschutzerklärung</h1>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Verantwortlicher</h2>
        <p className="text-white/70 leading-7">
          Vevoga Systems<br />
          Inhaber: Andreas Kallweit<br />
          Panoramastraße 30<br />
          77815 Bühl<br />
          Deutschland<br />
          E-Mail: info@vevoga-systems.de
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Hosting</h2>
        <p className="text-white/70 leading-7">
          Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA gehostet.
          Beim Aufruf der Website werden technische Verbindungsdaten (IP-Adresse, Zeitstempel, aufgerufene Seite)
          in Server-Logs gespeichert. Dies erfolgt auf Basis von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
          an einem sicheren und stabilen Betrieb der Website). Die Daten werden nach spätestens 30 Tagen gelöscht.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Kontaktformular</h2>
        <p className="text-white/70 leading-7">
          Wenn Sie das Kontaktformular auf dieser Website nutzen, werden Ihre Angaben (Name, Unternehmen,
          E-Mail-Adresse, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage verarbeitet. Die Daten werden
          ausschließlich zur Beantwortung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der Bearbeitung von Anfragen).
        </p>
        <p className="text-white/70 leading-7 mt-3">
          Für den Versand der E-Mails nutzen wir den Dienst Resend (Resend Inc.,
          2261 Market Street #4008, San Francisco, CA 94114, USA). Resend verarbeitet die übermittelten Daten
          ausschließlich zur Zustellung der E-Mail in unserem Auftrag. Es besteht ein Auftragsverarbeitungsvertrag
          gemäß Art. 28 DSGVO. Weitere Informationen unter resend.com/privacy.
        </p>
        <p className="text-white/70 leading-7 mt-3">
          Die eingehenden E-Mails werden in Ihrem IONOS-Postfach gespeichert.
          IONOS SE, Elgendorfer Str. 57, 56410 Montabaur ist dabei als Auftragsverarbeiter tätig.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Keine Tracking- oder Analyse-Tools</h2>
        <p className="text-white/70 leading-7">
          Diese Website verwendet keine Cookies, kein Google Analytics und keine sonstigen Tracking- oder
          Analyse-Dienste. Es werden keine Nutzerprofile erstellt.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Ihre Rechte</h2>
        <p className="text-white/70 leading-7">
          Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO),
          Einschränkung der Verarbeitung (Art. 18 DSGVO) sowie Datenübertragbarkeit (Art. 20 DSGVO).
          Zur Ausübung Ihrer Rechte: info@vevoga-systems.de
        </p>
        <p className="text-white/70 leading-7 mt-3">
          Zuständige Aufsichtsbehörde: Landesbeauftragter für den Datenschutz und die Informationsfreiheit Baden-Württemberg.
        </p>

        <p className="text-white/40 text-sm mt-12">Stand: April 2026</p>
      </div>
    </div>
  );
}
