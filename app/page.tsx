export default async function Index() {
  return (
    <div>
      <div className="flex flex-col items-center py-8">

        <p className="font-serif text-xl text-center text-bluey-1">
          Plateforme de mise en relation entre acteurs autour du projet de tiny house low tech
        </p>

      </div>

      <div className="text-white bg-greeny-1">
        <div className="container py-8">
          <h2 className="font-serif text-xl font-bold uppercase mb-4">
            Kézako ?
          </h2>

          <p>
            Low Tech Lab Bordeaux va, au cours des deux prochaines années, entreprendre un projet de construction de Tiny House équipées de Low-Techs, tels qu’un poêle de masse, un garde manger, marmite norvégienne ou une jardinière autonome.

            Ce projet fera collaborer différentes associations, et la tiny sera exposée sur les quais de la Garonne à Bordeaux.
          </p>

          <h2 className="text-xl font-bold text-yellowy-1 uppercase my-4">
            Les associations partenaires:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="">
              <h3 className="text-xl font-medium font-serif mb-1">
                LowTechLab Bordeaux
              </h3>
              <div className="">
                <p>
                  Low Tech Lab Bordeaux (LTLB) est une association de Loi 1901 qui croit au pouvoir de l'innovation utile, accessible et durable pour répondre aux enjeux écologiques d'aujourd'hui et de demain.

                  Les basses technologies offrent à chacun et partout, les moyens de répondre à ses besoins dans le respect des Humains et de la Planète.

                </p>
                <p>
                  Ses valeurs : Accessibilité, partage, sobriété, résilience, collaboration, autonomie, réemploi
                </p>
              </div>
            </div>
            <div className="">
              <h3 className="text-xl font-medium font-serif mb-1">
                Tiny Lab
              </h3>
              <div>
                <p>
                  Association créée par des professionnels de l'éco-construction, dont les activités se concentrent autour de la construction inclusive de tiny houses et habitats légers autonomes.
                </p>
              </div>
            </div>
            <div className="">
              <h3 className="text-xl font-medium font-serif mb-1">
                La planche
              </h3>
              <div >
                <p>
                  Atelier partagé situé dans le quartier Saint-Michel à Bordeaux entièrement dédié au matériau bois, dans lequel artisans·anes, concepteurs·trices et grand public viennent mutualiser des outils de travail, apprendre, fabriquer et partager leurs savoir-faire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-wrap gap-4 md:gap-8 justify-center align-center py-8"
      >
        <a
          className="underline"
          href="https://fb.com/lowtechbordeaux"
          target="_blank"
        >
          <div className="w-14 h-14 bg-facebook bg-cover"></div>
        </a>
        <a
          className="underline"
          href="https://instagram.com/lowtechbordeaux"
          target="_blank"
        >
          <div className="w-14 h-14 bg-instagram bg-cover"></div>
        </a>
        <a
          className="underline"
          href="https://www.youtube.com/channel/UCXZS6Zgi09COLJkkgbbHBwg"
          target="_blank"
        >
          <div className="w-14 h-14 bg-youtube bg-cover"></div>
        </a>
        <a
          className="underline"
          href="https://discord.gg/DHAfV7N43U"
          target="_blank"
        >
          <div className="w-14 h-14 bg-discord bg-cover"></div>
        </a>
      </div>

      <div className="bg-bluey-1 text-white">
        <div className="container py-8">
          <h2 className="font-serif text-xl font-medium mb-4">
            Les objectifs
          </h2>

          <p>
            Sensibiliser le grand public autour des enjeux écologiques, l'éco-construction, de la low tech et du réemploi.
            Proposer des chantiers participatifs où chacun peut venir contribuer ou apprendre à bricoler
            En créant un maillage des acteurs Low Tech sur le territoire, l’association veut devenir la vitrine du réseau Low Tech de la région, développer des partenariats avec les autres acteurs et créer une dynamique sur le territoire de la Nouvelle-Aquitaine.
          </p>
        </div>
      </div>

    </div >
  );
}
