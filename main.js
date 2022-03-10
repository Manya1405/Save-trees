var reasons = [
    "Trees Provide humans and animals shade",
    "Trees Prevent Soil erosion and a lot of natural disasters",
    "Trees provide us food to eat",
    "Trees provide us medicines and are itself natural medicines"
    ];
    
    var images = [
     "https://images.unsplash.com/photo-1621795884610-ad8dfdeef2ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ4OTU1Mw&ixlib=rb-1.2.1&q=80&w=400",
     "https://images.unsplash.com/photo-1600298882698-312a4137fd33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ4OTU5MQ&ixlib=rb-1.2.1&q=80&w=400",
     "https://images.unsplash.com/photo-1566804770468-867f6158bda5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ4OTYzMQ&ixlib=rb-1.2.1&q=80&w=400",
     "https://images.unsplash.com/photo-1563050291-de6ebf576ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDQ4OTY2MQ&ixlib=rb-1.2.1&q=80&w=400" 
    ];
    
    var i = 0;
    function nextslide(){
      document.getElementById("reasontext").innerHTML=reasons[i];
       document.getElementById("album").src=images[i];
     document.getElementById("audio").play();
    i++;
     if(i>3)
       {
         i=0;
       }
    }
    