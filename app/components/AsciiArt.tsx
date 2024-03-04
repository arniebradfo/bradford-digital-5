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
    _-¯|  ¯-_   |
   |   |  _-¯   |
   |   | ¯-_ _-¯ 
 _-¯   |    ¯    
¯-_ _-¯          
   ¯
   
   JAMES BRADFORD / UX ENGINEER
   ---
   github.com/arniebradfo/bradford-digital-5

`;

const asciiArtComment = document.createComment(asciiArt);
