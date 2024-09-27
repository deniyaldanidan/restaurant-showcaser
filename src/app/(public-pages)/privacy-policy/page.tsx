export default function PrivacyPolicyPage() {
  return (
    <section className="terms-n-policy-page">
      <div className="sub-section">
        <h2>Privacy Policy</h2>
        <p className="main-para">
          {" "}
          At Odel Digest Restaurant, we are committed to protecting your privacy
          and ensuring the security of your personal information. This Privacy
          Policy outlines how we collect, use, and safeguard your data when you
          visit our website or use our services. By accessing our website, you
          consent to the terms described in this policy.
        </p>
      </div>
      <div className="sub-section">
        <h3>Information We Collect</h3>
        <p className="normal-para">
          We may collect the following types of personal information when you
          interact with our website:
        </p>
        <ul>
          <li>
            <strong>Personal Identification Information:</strong> This includes
            your name, email address, phone number, and other contact details
            that you provide when making reservations or inquiries.
          </li>
          <li>
            <strong>Technical Information:</strong> We may collect information
            such as your IP address, browser type, device type, operating
            system, and pages visited on our website. This helps us improve the
            functionality and user experience of the site.
          </li>
        </ul>
      </div>
      <div className="sub-section">
        <h3>How we use your information</h3>
        <p className="normal-par">We use the information we collect to:</p>
        <ul>
          <li>Process your reservations and orders.</li>
          <li>
            Communicate with you regarding your booking, inquiries, and any
            special offers.
          </li>
          <li>
            Improve our website’s functionality and tailor content to better
            suit your preferences.
          </li>
          <li>
            Send promotional emails or offers, if you have opted to receive
            them.
          </li>
          <li>
            Prevent fraudulent activities and ensure the security of our website
            and services.
          </li>
        </ul>
      </div>
      <div className="sub-section">
        <h3>How we protect your information</h3>
        <p className="normal-para">
          We are committed to safeguarding your personal information. We use
          industry-standard security measures such as encryption and secure
          server technology to protect your data from unauthorized access,
          misuse, or disclosure.
        </p>
        <ul>
          <li>
            <strong>Data Security:</strong> We implement appropriate technical
            and organizational measures to ensure the security of your personal
            data.
          </li>
          <li>
            <strong>Third-Party Service Providers:</strong> We may share your
            information with trusted third-party service providers (such as
            payment processors) to help us deliver our services. These third
            parties are contractually obligated to protect your data and use it
            only for the purposes we specify.
          </li>
        </ul>
      </div>
      <div className="sub-section">
        <h3>Sharing your information</h3>
        <p className="normal-para">
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share your data in the following
          circumstances:
        </p>
        <ul>
          <li>
            <strong>Service Providers: </strong>We may share your information
            with third-party service providers who assist us in running our
            business, such as payment gateways and email marketing services.
          </li>
          <li>
            <strong>Legal Compliance: </strong>We may disclose your personal
            information if required by law, regulation, or legal process to
            protect the rights or safety of our restaurant, employees, or
            customers.
          </li>
        </ul>
      </div>
      <div className="sub-section">
        <h3>Your rights and choices</h3>
        <p className="normal-para">
          You have the following rights regarding your personal information:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> You can request access to the personal data
            we hold about you.
          </li>
          <li>
            <strong>Correction:</strong> You can update or correct your personal
            information if it is inaccurate.
          </li>
          <li>
            <strong>Deletion:</strong> You can request that we delete your
            personal information, subject to legal obligations.
          </li>
          <li>
            <strong>Marketing Preferences:</strong> You may opt out of receiving
            promotional emails from us by following the unsubscribe instructions
            in any email or by contacting us directly.
          </li>
        </ul>
      </div>
      <div className="sub-section">
        <h3>Contact Us</h3>
        <p className="normal-para">
          If you have any questions or concerns regarding this Privacy Policy,
          or if you would like to exercise any of your rights, please contact us
          at:
        </p>
        <div className="flex flex-col gap-y-1.5 mt-2">
          <p className="text-lg text-high-fg uppercase font-semibold">
            Odel Digest Restaurant
          </p>
          <p className="text-base font-medium">
            Duthie school junction, Court Road,
          </p>
          <p className="text-base font-medium">
            Nagercoil, Tamil Nadu, 629001.
          </p>
          <p className="text-base flex items-center gap-x-2">
            <span className="font-semibold">Phone:</span>
            <span className="font-medium">04652 225 230</span>
          </p>
          <p className="text-base flex items-center gap-x-2">
            <span className="font-semibold">Email:</span>
            <span className="font-medium">restaurant@odel.co.in</span>
          </p>
        </div>
      </div>
      <div className="sub-section">
        <p className="main-para">
          By using our website, you agree to this Privacy Policy. Thank you for
          trusting Odel Digest Restaurant with your personal information.
        </p>
      </div>
    </section>
  );
}

export const dynamic = "force-static";
