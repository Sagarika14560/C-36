class Form {
    constructor() {
      
    }
  
    display(){
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position(500, 130);
      
      var input = createInput("Name");
      var button = createButton('Play');
      
      input.position(500, 200);
      button.position(600, 250);
  
      button.mousePressed(function(){
        var name = input.value();
        input.hide();
        button.hide();
  
       
        
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);
        var greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(500, 160)
      });
  
    }
  }
  