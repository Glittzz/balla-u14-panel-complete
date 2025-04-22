import { useState } from 'react';

const players = [
  "Adam Brett", "Adam Ward", "Archie Campbell", "Callum Tansey", "Caoimhin Keane",
  "Charlie O'Sullivan", "Conall Lafferty", "Craig Ruane", "Dara O Flatharta Browne",
  "Dara Surdival", "David Bourke", "Dylan Broderick", "Dylan Coleman", "Dylan Smyth",
  "Eddie Boyle", "Elijah Basquille", "Flynn Nally", "Gearoid Dempsey", "Harry Bourke",
  "Heath Nestor", "Henry Griffith", "Jack McGreal Moran", "Jamie Mullaney", "Liam Feeney",
  "Luca Walsh", "Luke Jennings", "Luke Serantes", "Matthew Fadden", "Michael Basquille",
  "Michael Loftus", "Oisin O Malley", "Ollie Cass", "Paddy Galvin", "Patrick Griffith",
  "Pj Frainey", "Rian Doherty", "Rian Nally"
];

export default function TeamSelector() {
  const [starters, setStarters] = useState(Array(15).fill(""));
  const [subs, setSubs] = useState([]);

  const handleChange = (index, value) => {
    const updated = [...starters];
    updated[index] = value;
    setStarters(updated);
    if (subs.includes(value)) {
      setSubs(subs.filter(p => p !== value));
    }
  };

  const handleSubToggle = (player) => {
    if (subs.includes(player)) {
      setSubs(subs.filter(p => p !== player));
    } else if (subs.length < 5 && !starters.includes(player)) {
      setSubs([...subs, player]);
    }
  };

  const isPicked = (player) =>
    starters.includes(player) || subs.includes(player);

  const renderDropdown = (index) => (
    <select
      value={starters[index]}
      onChange={(e) => handleChange(index, e.target.value)}
      style={{
        width: '100%',
        padding: '6px',
        borderRadius: '6px',
        fontSize: '0.9rem'
      }}
    >
      <option value="">-- Select Player --</option>
      {players.map(p => (
        <option key={p} value={p} disabled={isPicked(p)}>{p}</option>
      ))}
    </select>
  );

  const renderPitchName = (i) => (
    <div style={{
      width: '100px',
      height: '40px',
      background: '#ffffffcc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.8rem',
      borderRadius: '6px',
      boxShadow: '0 1px 2px rgba(0,0,0,0.3)'
    }}>
      {starters[i] ? `#${i + 1} ${starters[i]}` : `#${i + 1}`}
    </div>
  );

  const row = (nums, justify = 'center') => (
    <div style={{ display: 'flex', justifyContent: justify, gap: '10px', marginBottom: '10px' }}>
      {nums.map(renderPitchName)}
    </div>
  );

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '1rem',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{ textAlign: 'center', color: '#800000' }}>Balla U14 Panel Selector</h1>

      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 0 6px rgba(0,0,0,0.1)'
      }}>
        <h2>Start 15</h2>
        {starters.map((_, i) => (
          <div key={i} style={{ marginBottom: '8px' }}>
            #{i + 1}: {renderDropdown(i)}
          </div>
        ))}
      </div>

      <div style={{
        maxWidth: '500px',
        margin: '2rem auto',
        backgroundColor: '#fff',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 0 6px rgba(0,0,0,0.1)'
      }}>
        <h2>Substitutes (Pick 5)</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center'
        }}>
          {players.map(p => (
            <button
              key={p}
              onClick={() => handleSubToggle(p)}
              disabled={starters.includes(p)}
              style={{
                backgroundColor: subs.includes(p) ? '#800000' : '#ccc',
                color: subs.includes(p) ? '#fff' : '#000',
                border: 'none',
                padding: '6px 10px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.75rem'
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        background: 'linear-gradient(to bottom, #4CAF50, #2e7d32)',
        color: '#000',
        padding: '1rem',
        borderRadius: '10px',
        maxWidth: '500px',
        margin: '2rem auto',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ textAlign: 'center' }}>Final Lineup</h2>
        {row([0])}
        {row([1, 2, 3], 'space-around')}
        {row([4, 5, 6], 'space-around')}
        {row([7, 8], 'center')}
        {row([9, 10, 11], 'space-around')}
        {row([12, 13, 14], 'space-around')}

        {subs.length > 0 && (
          <>
            <h3 style={{ marginTop: '1.5rem', textAlign: 'center' }}>Substitutes</h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center'
            }}>
              {subs.map((s, i) => (
                <div key={s} style={{
                  backgroundColor: '#fff',
                  color: '#000',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  fontSize: '0.8rem'
                }}>
                  #{16 + i} {s}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
