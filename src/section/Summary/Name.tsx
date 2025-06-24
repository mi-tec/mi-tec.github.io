import React from 'react'

function Name() {
  const [displayedText, setDisplayedText] = React.useState('');
  const [index, setIndex] = React.useState(0);

  const name = "Migara Karunarathne";

  React.useEffect(() => {
    if (index < name.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + name[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, name]);

  return (
    <div className='text-center'>
      <h1 className='text-4xl'>{displayedText}</h1>
      <h2 className='mt-5 text-3xl'>Software Engineer</h2>
    </div>
  )
}

export default Name