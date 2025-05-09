import React from "react";

const Disclaimer = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 mt-16 ">
      <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
      <p className="mb-4">
        If you require any more information or have any questions about our
        site’s disclaimer, please feel free to contact us by email at{" "}
        <a
          href="mailto:support@printmartshop.com"
          className="text-blue-900 underline"
        >
          support@printmartshop.com
        </a>
        .
      </p>
      <p className="mb-4">
        All the information on this website –{" "}
        <a
          href="https://printmartshop.com"
          className="text-blue-900 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://printmartshop.com
        </a>{" "}
        – is published in good faith and for general information purpose only.
        printmartshop does not make any warranties about the completeness,
        reliability, and accuracy of this information. Any action you take upon
        the information you find on this website (printmartshop), is strictly
        at your own risk. printmartshop will not be liable for any losses
        and/or damages in connection with the use of our website.
      </p>
      <p className="mb-4">
        From our website, you can visit other websites by following hyperlinks
        to such external sites. While we strive to provide only quality links to
        useful and ethical websites, we have no control over the content and
        nature of these sites. These links to other websites do not imply a
        recommendation for all the content found on these sites. Site owners and
        content may change without notice and may occur before we have the
        opportunity to remove a link which may have gone ‘bad’.
      </p>
      <p className="mb-4">
        Please be also aware that when you leave our website, other sites may
        have different privacy policies and terms which are beyond our control.
        Please be sure to check the Privacy Policies of these sites as well as
        their “Terms of Service” before engaging in any business or uploading
        any information.
      </p>
      <p className="mb-4">
        <strong>Consent</strong>
        <br />
        By using our website, you hereby consent to our disclaimer and agree to
        its terms.
      </p>
      <p>
        <strong>Update</strong>
        <br />
        Should we update, amend or make any changes to this document, those
        changes will be prominently posted here.
      </p>
    </div>
  );
};

export default Disclaimer;