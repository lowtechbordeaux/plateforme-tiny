export default async function Index() {
  return (
    <div>
      <div className="flex flex-col items-center py-4 mb-4">
        <img
          src="./assets/images/logo-192.png"
          className="w-24 mb-6"
          alt="lowtechbordeaux logo"
        />

        <img
          src="./assets/images/lowtech-title.png"
          className="w-64 max-w-full mb-2 mx-4"
          alt="lowtechbordeaux title"
        />
        <h1 className="text-md uppercase font-medium font-sans tracking-wide">
          Bordeaux
        </h1>

        <p className="font-serif text-center mt-6 mb-2 text-bluey-1 -rotate-6">
          « Apprendre à faire mieux avec moins »
        </p>
      </div>
      <div className="text-white bg-greeny-1">
        <div className="container py-8">
          <h2 className="font-serif text-xl font-bold uppercase mb-4">Kézako ?</h2>

          <p>
            Nous sommes une association qui croit au pouvoir de l’innovation
            utile, accessible et durable pour répondre aux enjeux d’aujourd’hui
            et de demain : les low-technologies offrent à chacun et partout, les
            moyens de répondre à ses besoins dans le respect des Humains et de
            la Planète !
          </p>

          <p className="font-serif text-center mt-4 mb-8 -rotate-6">
            « Son crédo: la Résilience ! »
          </p>

          <h2 className="text-xl font-bold text-yellowy-1 uppercase mb-4">
            3 activités principales:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="">
              <h3 className="text-xl font-medium font-serif mb-1">
                Sensibilisation
              </h3>
              <ol className="list-decimal list-inside">
                <li>
                  Organisation d’actions de sensibilisation auprès du grand
                  public, scolaires, collectivités & entreprises du territoire.
                </li>
                <li>
                  Animation de la communauté avec des évènements, des
                  conférences, des sorties, des apéros, etc.
                </li>
              </ol>
            </div>
            <div className="">
              <h3 className="text-xl font-medium font-serif mb-1">Makerspace</h3>
              <ol className="list-decimal list-inside">
                <li>
                  Centre de pratique avec outillages professionnels mutualisés,
                  formations, stages et ateliers.
                </li>
                <li>Encadrement d’étudiants de l’enseignement supérieur.</li>
                <li>
                  Espace coworking pour les entrepreneurs avec une démarche
                  low-tech.
                </li>
              </ol>
            </div>
            <div className="">
              <h3 className="text-xl font-medium font-serif mb-1">
                Bureau d’étude
              </h3>
              <ol className="list-decimal list-inside">
                <li>
                  Mettre la low-tech au service de l’innovation avec son pôle
                  R&D.
                </li>
                <li>
                  Favoriser l’émergence de solutions low-techs auprès des
                  collectivités & entreprises.
                </li>
                <li>Diffuser en open source avec des outils collaboratifs.</li>
              </ol>
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
            Qu’est-ce qu’une low-tech ?
          </h2>

          <p>
            « Une technologie simple répondant à un besoin de base, qui est
            durable dans le temps, facilement utilisable et constructible, mais
            est aussi une technologie incluant de la sobriété et participant à
            votre résilience. »
          </p>
        </div>
      </div>

      <div>
        <div className="container py-4">
          <h2 className="font-serif text-xl font-medium my-4">Nos activités</h2>

          <p>
            La low-tech nous semble être un outil majeur pour la transition
            écologique et énergétique, il est donc nécessaire que le plus de
            monde possible soit informé sur ce que c'est et quelles sont ses
            applications.
          </p>

          <p>
            À cette fin, nous pouvons intervenir pour une large variété de
            publics, allant des scolaires aux salariés d'entreprises dans des
            ateliers dédiés, en passant par les stands d'exposition et les
            conférences ou tables rondes.
          </p>

          <p>
            Notre atelier est lui aussi tourné vers la transmission des
            connaissances et de l'apprentissage de la démarche low-tech. Pour ce
            faire, nous organisons régulièrement des stages sur une thématique
            spécifique, et nous mettons petit à petit en place un catalogue de
            formation couvrant diverses thématiques pour augmenter votre
            autonomie et faire des économies. C'est aussi un lieu où se
            retrouvent les adhérents pour co-construire les projets de
            l'association et participer à ses missions d'intérêt général.
          </p>

          <p>
            Les low-techs que nous fabriquons sont conçues, construites et
            testées par le bureau de Recherche & Développement de l'association,
            pour être capable de vous fournir des données d'utilisation, de
            mieux comprendre le fonctionnement des low-techs fabriquées, et
            adapter les solutions aux besoins spécifiques du territoire. Toutes
            les low-techs proposées par l'association sont donc réellement
            utiles, elles participent concrètement à la résilience et
            l'autonomie des personnes et des structures collectives.
          </p>

          <h2 className="font-serif text-xl font-medium my-4">Nous rencontrer</h2>

          <p>
            Tous les <b>mercredis soir</b> (sauf exception), nous organisons des
            "ateliers" dans nos locaux au Garage Moderne entre membres adhérents,
            où nous construisons des low-techs.
            Ce sont des temps conviviaux où vous pourrez découvrir plus
            amplement l'association avec les bénévoles. N'hésitez pas à nous
            contacter pour en savoir plus !
          </p>
          <p>
            Vous pouvez aussi directement adhérer et participer dès maintenant
            aux activités de l'association ! Nous soutenir financièrement ou
            participer à nos activités permet de nous soutenir. Quelles que
            soient les compétences et connaissances que vous voulez apporter,
            vous serez bienvenus , de l'aide ponctuelle au projet de long terme.
          </p>
          <p>
            Low-Tech Bordeaux est uniquement composé de bénévoles.
          </p>

          <div className="flex justify-center gap-8 mt-8">
            <a
              href="https://www.helloasso.com/associations/low-tech-bordeaux#event"
              target="_blank"
            >
              <div className="btn-primary border-yellowy-1">Billetterie</div>
            </a>
            <a
              href="https://www.helloasso.com/associations/low-tech-bordeaux/adhesions/adhesion-ltb"
              target="_blank"
            >
              <div className="btn-primary border-bluey-1">Adhésion</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
