export default function PolitiqueConfidentialite() {
    return (
        <div className="max-w-4xl mx-auto p-6 mt-32">
            <h1 className="text-2xl font-bold mb-4">Politique de Confidentialité</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">1. Introduction</h2>
                <p>
                    Cette politique de confidentialité explique comment <strong>Bally Paysage</strong> collecte, utilise et protège vos données personnelles.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">2. Collecte des informations</h2>
                <p>
                    Nous collectons les informations suivantes lorsque vous utilisez notre site :
                </p>
                <ul className="list-disc list-inside">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse IP et informations de navigation</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">3. Utilisation des données</h2>
                <p>Vos données sont utilisées pour :</p>
                <ul className="list-disc list-inside">
                    <li>Répondre à vos demandes de contact</li>
                    <li>Améliorer nos services</li>
                    <li>Assurer la sécurité du site</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">4. Sécurité des données</h2>
                <p>
                    Nous mettons en place des mesures de sécurité pour protéger vos données contre l accès non autorisé.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">5. Vos droits</h2>
                <p>
                    Conformément au RGPD, vous avez le droit d accéder, de rectifier ou de supprimer vos données personnelles.
                    Pour toute demande, contactez-nous à <a href="mailto:contact@ballypaysage.com" className="underline">contact@ballypaysage.com</a>.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">6. Contact</h2>
                <p>
                    Pour toute question sur notre politique de confidentialité, contactez-nous par email à <a href="mailto:contact@ballypaysage.com" className="underline">contact@ballypaysage.com</a>.
                </p>
            </section>
        </div>
    );
}
