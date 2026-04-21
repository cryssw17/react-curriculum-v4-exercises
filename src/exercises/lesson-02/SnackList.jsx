export default function SnackList() {
  const snacksList = [
    { name: 'Cookies', rank: 5 },
    { name: 'Gummy Worms', rank: 4 },
    { name: 'Chips', rank: 3 },
    { name: "Reese's", rank: 2 },
    { name: 'Raspberries/Blackberries', rank: 1 },
  ];

  return (
    <div>
      <ul>
        {snacksList
          .toSorted((a, b) => a.rank - b.rank)
          .map((snack) => (
            <li key={snack.rank}>{snack.name}</li>
          ))}
      </ul>
    </div>
  );
}
