type FooterProps = {
  clubName: string;
  addressLine: string;
  phone: string;
  email: string;
};

export function Footer({ clubName, addressLine, phone, email }: FooterProps) {
  return (
    <footer className="border-t border-border pt-10 pb-14 text-center text-sm text-muted-foreground">
      <p className="font-serif text-base font-medium text-foreground">
        {clubName}
      </p>
      <address className="mt-3 not-italic leading-relaxed">
        {addressLine}
        <br />
        <a className="underline-offset-4 hover:underline" href={`tel:${phone.replace(/\D/g, "")}`}>
          {phone}
        </a>
        <span aria-hidden className="mx-2 text-border">
          ·
        </span>
        <a className="underline-offset-4 hover:underline" href={`mailto:${email}`}>
          {email}
        </a>
      </address>
    </footer>
  );
}
