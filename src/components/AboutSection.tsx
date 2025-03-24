const AboutSection = () => (
  <div>
    <h2 className="text-xl font-bold">🌟 About Me</h2>
    <ul className="list-disc pl-6">
      <li>
        Currently working on{" "}
        <a
          target="_blank"
          className="text-blue-600 hover:underline"
          href="https://github.com/joelaj06/auto-manager"
        >
          Auto Manager
        </a>
      </li>
      <li>
        Currently working as a software engineer at{" "}
        <a
          target="_blank"
          className="text-blue-600 hover:underline"
          href="https://www.appsolinfosystems.com"
        >
          Appsol Information Systems
        </a>
        .
      </li>
      <li>Opened to freelance projects and remote work.</li>
    </ul>
  </div>
);

export default AboutSection;
