  // Decimal to binary conversion using recursion 
    function find(
      decimal_number: number, 
      mod: number): number 
    { 
        return decimal_number % mod; 
    } 
      
    console.log(find(7, 8));