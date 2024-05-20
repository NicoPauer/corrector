// Modulue for handle forms of this web © 2024 NicoPauer

// Abstract logic


function convertHex(list)
{
   // Turn into hex code [R, G, B] list
   let code = (list[0].toString(16).padStart(2, '0') + list[1].toString(16).padStart(2, '0') + list[2].toString(16).padStart(2, '0'));
   
   return "#" + code;
}

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
   // Get color from color picker passed as parameter and return a 3-items [R, G, B] list with decimal values for red, green and blue
    let color = picker.value.replace("#", "");
  // List to pass in [R, G, B] format   
    let colorArrayCode = []
 // Each to characters of the six of color turn into decimal value and add it to colorArrayCode
   
    colorArrayCode.push(parseInt(color[0] + color[1], 16));
    colorArrayCode.push(parseInt(color[2] + color[3], 16));
    colorArrayCode.push(parseInt(color[4] + color[6], 16));
    
    return colorArrayCode;
}

function complementary(rgbCode)
{
    // Return hex code of the complementary color [R, G, B] passed as parameter in same formar
      let code = [255, 255, 255];
    /* 
    
    By definition in the chromatic circle could look that the sum of two color give white 

        For example: 
        
        The complementary color of yellow is blue, yellow has code [255, 255, 0] and blue has code [0, 0, 255] sum that and 
        get the code of the white [255, 255, 255]. for get the other only make the difference between white and the gived 
        hexCode in this case [255, 255, 255] - [0, 0, 255] = [255, 255, 0],  [255, 255, 0] is complementary to [0, 0, 255].
        
      */
  
    code = difRGB(code, rgbCode);
  
    return convertHex(code);
}

// Graphical interface logic is on the html file for have more control and can access to all the properties of a good waay
