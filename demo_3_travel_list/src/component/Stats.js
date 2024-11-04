export default function Stats({ items }) {
  if (!items.length)
    // no need to render calculation when nothing in packing-list, so we add a reminder here.
    return (
      <p className='stats'>
        <em>💪 Start adding some items to your packing list</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className='stats'>
      <em>
        {packedPercentage === 100
          ? 'You got everything ready to go ✈️ '
          : `🧳 You have ${numItems} items on your list, and you already packed ${numPacked} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
