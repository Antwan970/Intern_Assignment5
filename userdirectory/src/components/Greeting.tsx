import React from 'react'

interface greeting{
  name: string;
  subtitle?: string;
}

export const Greeting:React.FC<greeting> = ({name,subtitle="Welcome"}) => {
  return (
    <div className= "p-4 rounded mb-4">
      <h2 className="text-xl font-bold"> {name}</h2>
      <p>{subtitle}</p>
    </div>
  )
  
}
export default Greeting;
