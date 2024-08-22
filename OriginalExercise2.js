function greet(name) {
    if (name) {
      return "Hello, " + name + "!";
    } else {
      return "Hello!";
    }
  }
  
  const greet = (name) =>  {
    return name ? `Hello,${name} !`: `Hello!`
  }
  console.log(greet('Chichi'))
