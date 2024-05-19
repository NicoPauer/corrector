// Modulue for handle forms of this web © 2024 NicoPauer

// Abstract logic

function difRGB(first, second)
{
   // Make the difference between two 3-items arrays of integers with values of RGB colors channels
   
   let result = [];

   for (let index = 0; index < 3; index++)
   {
       // Add difference between each array component
         result.push(first[index] - second[index]);
   }

   return result;
}

function getColor(picker)
{
   // Get color from color picker passed as parameter and return a 3-items list with decimal values for red, green and blue
    let color = picker.value.replace("#", "");
  // List to pass in [R, G, B] format   
    let colorArrayCode = []
 // Each to characters of color turn into decimal value and add it to colorArrayCode
    for (let index = 0; index < 2; index++)
    {
         if ((index % 2) == 0)
         {   
           colorArrayCode.push(parseInt(color[index], 16));
           colorArrayCode.push(parseInt(color[index + 1], 16));
        }
    }
   
    return colorArrayCode;
}

function complementary(rgbCode)
{
    // Return [R, G, B] color codes list of the complementary color passed as parameter in same formar
      let code = [255, 255, 255];
    /* 
    
    By definition in the chromatic circle could look that the sum of two color give white 

        For example: 
        
        The complementary color of yellow is blue, yellow has code [255, 255, 0] and blue has code [0, 0, 255] sum that and 
        get the code of the white [255, 255, 255]. for get the other only make the difference between white and the gived 
        hexCode in this case [255, 255, 255] - [0, 0, 255] = [255, 255, 0],  [255, 255, 0] is complementary to [0, 0, 255].
        
      */
  
    code = difRGB(code, rgbCode);
  
    return code;
}

// Graphical interface logic is on the html file for have more control and can access to all the properties of a good waay
