let i=0;

function person() {
    switch(i){
    case 0:
        document.getElementById("name").innerHTML="Peter Jones";
        document.getElementById("myImg").src="1.jpg";
        document.getElementById("position").innerHTML="INTERN";
        document.getElementById("desc").innerHTML="Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.";
        break
    case 1:
        document.getElementById("name").innerHTML="Susan Smith";
        document.getElementById("myImg").src="2.jpg";
        document.getElementById("position").innerHTML="WEB DEVELOPER";
        document.getElementById("desc").innerHTML="I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.";
        break
    case 2:
        document.getElementById("name").innerHTML="Anna Johnson";
        document.getElementById("myImg").src="3.jpg";
        document.getElementById("position").innerHTML="WEB DESIGNER";
        document.getElementById("desc").innerHTML="Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.";  
        break
    case 3:
        document.getElementById("name").innerHTML="Bill Anderson";
        document.getElementById("myImg").src="4.jpg";
        document.getElementById("position").innerHTML="BOSS";
        document.getElementById("desc").innerHTML="Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.";  
        break
    }
  }

function previous(){
    i--;
    value();
    person(i);
    console.log(i);
}

function next(){
    i++;
    value();
    person(i);
    console.log(i);
}

function randomly(){
    i = Math.floor(Math.random() * 3);
    console.log(i);
    person(i);
}

function value(){
    if(i>3){
        i=0;
    }else if(i<0){
        i=3;
    }
}
