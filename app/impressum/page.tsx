export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#06070b] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold mb-10">Impressum</h1>

        <p className="mb-6">
          <strong>Angaben gemäß § 5 TMG</strong>
        </p>

        <p className="mb-6">
          Vevoga Systems<br />
          Inhaber: Andreas Kallweit<br />
          Panoramastraße 30<br />
          77815 Bühl<br />
          Deutschland
        </p>

        <p className="mb-6">
          E-Mail: info@vevoga-systems.de
        </p>

        <p>
          <strong>Umsatzsteuer</strong><br />
          Als Kleinunternehmer gemäß § 19 UStG wird keine Umsatzsteuer erhoben.
        </p>
      </div>
    </div>
  );
}
