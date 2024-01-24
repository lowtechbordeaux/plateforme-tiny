export default function Header() {
  return (
    <footer className="container mb-8 border-t py-4">
      <div className="flex flex-wrap">
        <div className="mx-4 my-2">
          <h3 className="text-xl font-medium text-black mb-1">Low-Tech Bordeaux</h3>
          <div>
            <p>Au Garage Moderne</p>
            <p>1, rue des Étrangers</p>
            <p>33300 Bordeaux</p>
            <p>FRANCE</p>
          </div>
        </div>
        <div className="mx-4 my-2">
          <h3 className="text-lg font-medium text-black mb-1">Mail</h3>
          <p className="underline">contact at lowtechbordeaux.org</p>
        </div>
        <div className="mx-4 my-2">
          <h3 className="text-lg font-medium text-black mb-1">Réseaux</h3>
          <div>
            <a
              className="underline"
              href="https://fb.com/lowtechbordeaux"
              target="_blank"
            >Facebook</a
            >,
            <a
              className="underline"
              href="https://instagram.com/lowtechbordeaux"
              target="_blank"
            >Instagram</a
            >,
            <a
              className="underline"
              href="https://www.helloasso.com/associations/low-tech-bordeaux"
              target="_blank"
            >Helloasso</a
            >,
            <a
              className="underline"
              href="https://www.youtube.com/channel/UCXZS6Zgi09COLJkkgbbHBwg"
              target="_blank"
            >Youtube</a
            >,
            <a
              className="underline"
              href="https://discord.gg/DHAfV7N43U"
              target="_blank"
            >Discord</a
            >
          </div>
        </div>
        <div className="mx-4 my-2">
          <h3 className="text-lg font-medium text-black mb-1">
            Avec le soutien de
          </h3>
          <div className="flex gap-8">
            <img
              src="./assets/images/UE-FSE.jpg"
              className="h-20"
              alt="Union Européene Fond Social Européen"
            />
            <img
              src="./assets/images/Region_Nouvelle-Aquitaine_drapeau.jpg"
              className="h-20"
              alt="Drapeau region nouvelle aquitaine"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
