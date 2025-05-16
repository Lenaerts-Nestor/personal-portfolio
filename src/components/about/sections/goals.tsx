export const GoalsSection = () => {
  return (
    <section className='mb-8'>
      <h3 className='flex items-center gap-2 text-xl font-semibold text-indigo-700 mb-2'>
        <span className='inline-block text-2xl'>🎯</span> Mijn Doelen
      </h3>
      <p className='text-gray-700 mb-2'>
        Ik wil een fullstack developer worden die bestaande systemen onderhoudt
        en optimaliseert. Mijn focus ligt op het verbeteren van efficiëntie en
        functionaliteit, in plaats van altijd nieuwe technologieën te bouwen.
      </p>
      <blockquote className='border-l-4 border-indigo-400 pl-4 italic text-gray-500 bg-indigo-50 py-2 rounded'>
        Het draait niet alleen om nieuwe features maken, maar om bestaande
        systemen toekomstbestendig en onderhoudsvriendelijk te houden.
      </blockquote>
    </section>
  );
};
