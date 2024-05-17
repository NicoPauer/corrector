/* Library for correction using mediation between extremes © 2024 NicoPauer
 Object to encapsule the corrector logic and data for security reasons */

var corrector = function(min, max)
{
    /* Init JSON for be a good start point */
      let copy = {min_corrector:1, max_corrector:10};
    // Matize extremes values with intermediate values e.g: for 1 and -1 add zero.
      this.fixing = function (value, different_value)
      {
        // Add values to JSON with the init value 5 only for create this like JSON and be predictible and so long predictible as be as possible
        copy[value] = 5;
        copy[different_value] = 5;
      }

     this.aprox = function(value)
     {
        // Turn to start mid values the parameter
         if (copy[value] >= 1)
         { 
           copy[value] -= 1;
           this.aprox(value);
         }
         else
         {
           copy[value] = 3;
         }
     }
 
     this.getJSON = function()
      {
       // Get JSON to modify externally if would be necessary copying result of it to an external variable
          return copy;
      } 
     // Optimize with this
      delete copy, start, end;
};
