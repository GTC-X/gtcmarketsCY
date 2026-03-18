function FooterItem({ title, lines }) {
  return (
    <div className="min-w-0">
      <p className="md:text-base text-sm font-semibold text-gray-900">{title}</p>
      <div className="mt-2 space-y-1 text-xs leading-5 text-gray-700 md:text-sm md:leading-5">
        {lines.map((line) => (
          <p key={line} className="truncate md:whitespace-normal">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.5 7.5h15v9h-15v-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5.3 8.4 12 13.2l6.7-4.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6 md:flex-row md:items-start md:justify-between">
        <div className="grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FooterItem
            title="GTC MARKETS (CY) LTD"
            lines={['Private Company Registered in Cyprus', 'Registration No. HE 443759']}
          />
          <FooterItem
            title="Registered Address:"
            lines={[
              'Αγία Ζώνης, 22A, Floor 1, Flat/Office 101',
              '3027, Limassol, Cyprus',
              'Business Office Address: PAMELVA COURT, Suite 108',
              '2 Georgiou Griva Digeni, 3035 Limassol',
            ]}
          />
          <div className="min-w-0 space-y-4">
            <FooterItem title="Hours of Operation:" lines={['Mon – Fri | 09:00 – 17:30']} />
            <FooterItem title="Phone:" lines={['(+357) 25334490']} />
          </div>
        </div>

        <div className="flex justify-start md:justify-end">
          <button
            type="button"
            aria-label="Contact"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-gray-900"
          >
            <MailIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

