type props = {
  className: string;
};

export default function LocationMap({ className }: props) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.9227504599443!2d77.42599774129705!3d8.181095408762323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f120c85c1189%3A0x258f382bc1ffb307!2sOdel%20Digest%20Restaurant!5e0!3m2!1sen!2sin!4v1718415747646!5m2!1sen!2sin"
      className={className}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      aria-label="Google map location for Odel digest restaurant"
    />
  );
}
