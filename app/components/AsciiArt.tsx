"use client";

import { useLayoutEffect } from "react";

export const AsciiArt = () => {
  useLayoutEffect(() => {
    document.firstElementChild?.prepend(asciiArtComment);
    return () => asciiArtComment.remove();
  });
  return null;
};

export const asciiArt = `

         |¯-_    
    _-_  |   |   
   |   | |   |   
    ¯-¯  |   ¯-_ 
    _-¯|  ¯-_   |  JAMES BRADFORD 
   |   |  _-¯   |  UX ENGINEER    
   |   | ¯-_ _-¯ 
 _-¯   |    ¯    
¯-_ _-¯          
   ¯             

`;

const asciiArtComment = document.createComment(asciiArt);
