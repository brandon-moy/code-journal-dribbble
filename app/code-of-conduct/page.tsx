const Conduct = () => {
  return (
    <section className="flex-start flex-col paddings mb-16 font-opensans">
      <p className="text-4xl font-semibold">Code of Conduct</p>
      <p className="text-lg pt-6">Let&apos;s keep this simple.</p>
      <ol className="list-decimal paddings pt-16 text-2xl">
        <li className="py-6">
          <p>No harassment.</p>
          <p className="text-lg py-4">
            Harassment of other users will not be tolerated. This includes but
            is not limited to spam, direct messages, misusing features in a way
            that is detrimental to other users.
          </p>
        </li>
        <li className="py-6">
          <p>Keep all posted projects and images SFW.</p>
          <p className="text-lg py-4">
            This includes images and content of the following natures: illegal,
            pornographic, racist, sexist, graphic, grotesque, inflammatory,
            and/or generally offensive.
          </p>
        </li>
        <li className="py-6">
          <p>Only post your own work.</p>
          <p className="text-lg py-4">
            Posting projects your got ideas from other places or followed along
            with are fine, but do not post another person&apos;s worka s your
            own. If credit is due to these user, be sure to credit them in the
            description.
          </p>
        </li>
      </ol>
      <p className="text-sm italic">
        Code of Conduct subject to change as need arises.
      </p>
    </section>
  );
};

export default Conduct;
