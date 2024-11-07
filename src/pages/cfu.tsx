// about.tsx
import React from "react";

interface CfuProps {
  // Define your props here
}

const Cfu: React.FC<CfuProps> = () => {
  // Implement your component logic here
  return (
    <div>
      <h1>CFU Page</h1>
      <p>Work in progress...</p>
          <Image
      src="/concept.png"
      width={500}
      height={500}
      alt="Picture of the directory in the works"
    />
    </div>
  );
};

export default Cfu;
