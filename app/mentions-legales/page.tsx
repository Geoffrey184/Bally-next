export default function MentionsLegales() {
    return (
        <div className="max-w-4xl mx-auto p-6 mt-32">
            {/* Utilisation de mt-32 pour plus d'espace sous la navbar */}
            <h1 className="text-2xl font-bold mb-4">Mentions Légales</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">1. Éditeur du site</h2>
                <p>
                    Nom de l’entreprise : <strong>[Nom de l’entreprise]</strong> <br />
                    Forme juridique : <strong>[Ex : SAS, SARL, Auto-entrepreneur]</strong> <br />
                    Capital social : <strong>[Montant en €]</strong> <br />
                    SIRET : <strong>[Numéro SIRET]</strong> <br />
                    Adresse : <strong>[Adresse complète]</strong> <br />
                    Téléphone : <strong>[Numéro de téléphone]</strong> <br />
                    Email : <a href="mailto:[email]" className="underline">[email]</a>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">2. Hébergement</h2>
                <p>
                    Le site est hébergé par : <br />
                    <strong>Vercel Inc.</strong> <br />
                    Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA <br />
                    Site Web : <a href="https://vercel.com" target="_blank" className="underline">vercel.com</a>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">3. Propriété intellectuelle</h2>
                <p>
                    L’ensemble du contenu présent sur ce site (<em>textes, images, logo, etc.</em>) est protégé
                    par les lois en vigueur sur la propriété intellectuelle. Toute reproduction ou distribution
                    sans autorisation préalable est interdite.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">4. Données personnelles</h2>
                <p>
                    Le site peut collecter certaines données personnelles (ex: via un formulaire de contact). Ces
                    données sont traitées conformément à la réglementation en vigueur, notamment le RGPD. Pour
                    plus d’informations, consultez notre <a href="/politique-confidentialite" className="underline">Politique de Confidentialité</a>.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">5. Cookies</h2>
                <p>
                    Ce site utilise des cookies pour améliorer l’expérience utilisateur. En continuant à naviguer
                    sur ce site, vous acceptez leur utilisation. Vous pouvez gérer vos préférences dans votre
                    navigateur.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">6. Contact</h2>
                <p>
                    Pour toute question ou réclamation, vous pouvez nous contacter à l’adresse suivante :
                    <a href="mailto:[email]" className="underline"> [email] </a>.
                </p>
            </section>
        </div>
    );
}
