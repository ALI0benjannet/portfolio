import Title from "./Title";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-16 rounded-3xl border border-base-200/60 bg-base-100/80 p-6 shadow-xl scroll-mt-28"
    >
      <Title title="Contact" />
      <div className="grid gap-6 md:grid-cols-2 text-left">
        <div className="space-y-3">
          <p className="text-base text-base-content/80">
            Disponible pour des missions  stages ou collaborations. Écrivez-moi et je vous réponds rapidement.
          </p>
          <div className="space-y-2 text-sm text-base-content/70">
            <p>
              <span className="font-semibold text-base-content">Email :</span> ali.benjannette@gmail.com
            </p>
            <p>
              <span className="font-semibold text-base-content">Téléphone :</span> +216 54 098 546
            </p>
            <p>
              <span className="font-semibold text-base-content">Localisation :</span> Monastir, Tunisie
            </p>
          </div>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Votre nom" className="input input-bordered w-full" />
          <input type="email" placeholder="Votre email" className="input input-bordered w-full" />
          <input type="text" placeholder="Objet" className="input input-bordered w-full" />
          <textarea placeholder="Votre message" className="textarea textarea-bordered w-full h-28" />
          <button type="button" className="btn btn-accent w-full">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;