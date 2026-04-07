//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Crystal';
  const age = 34;
  const hobbies = [
    'reading',
    'video games',
    'photography',
    'crochet',
    'DIY craft kits',
  ];
  return (
    <div>
      <h1>Who Am I?</h1>
      <p>
        Hi, my name is {name} and I am a {age} year old aspiring web developer
        living on the East Coast. My college years were spent hanging out on
        boats, at beaches, and trekking through salt marshes studying marine
        biology. Most of my career has been in customer service, but my
        curiosity and urge to create inspired me to begin this transition into a
        career in tech. I love learning new skills, figuring out how things
        work, and enjoy building/fixing things. Some of my hobbies include:{' '}
      </p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
