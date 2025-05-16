export const WorksStyleSection = () => {
  return (
    <section className='mb-8'>
      <h3 className='flex items-center gap-2 text-xl font-semibold text-indigo-700 mb-2'>
        <span className='inline-block text-2xl'>📚</span> Mijn Werkwijze
      </h3>
      <div className='mb-2'>
        <strong>Kennis Opbouwen</strong>
        <p className='text-gray-700'>
          Ik doe dit door zowel nieuwe technologieën te leren als mijn bestaande
          kennis te verdiepen. Het draait om een balans tussen innovatie en de
          praktische toepassing van bewezen oplossingen.
        </p>
      </div>
      <div>
        <strong>Leermethode</strong>
        <p className='text-gray-700'>
          Ik leer met behulp van boeken als 'Clean Code', 'Head First Design
          Patterns' en 'Don’t Make Me Think', gecombineerd met AI-gestuurde
          leermethodes. Ik zoek altijd naar manieren om de codekwaliteit en
          onderhoudbaarheid te verbeteren.
        </p>
      </div>
    </section>
  );
};
