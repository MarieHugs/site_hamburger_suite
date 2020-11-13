document.addEventListener("DOMContentLoaded", function(event) {

    //Un commentaire
    console.log("Ça fonctionne!!!");

    var informations = [
        {
            id: "pizza",
            title: "Nos Pizza",
            slogan: "Eat. Pizza. Repeat.",
            type: ["pepperoni", "All Dress", "Baaaaaacon"],
            image: "images/pizza/main.jpg",
            description: "NY style pesto ricotta onions chicken and bacon chicken wing peppers pie lasagna steak. Parmesan hawaiian extra sauce, onions pizza roll meatball stuffed burnt mouth black olives meatball thin crust bbq rib. Chicken and bacon pizza roll ham thin crust",    
            gallery: ["images/pizza/1.jpg", "images/pizza/2.jpg", "images/pizza/3.jpg"]

        }, {
            id: "bacon",
            title: "Baaaaacoonnn",
            slogan: "Bacon c'est comme un High-five pour ta bouche",
            type: ["À l'érable", "Bacon de sanglier", "avec du bacon", "au bacon", "avec du bacon"],
            image: "images/bacon/main.jpg",
            description: "Leberkas hamburger ribeye, jerky frankfurter prosciutto tail fatback. Ham hock venison andouille ham turducken porchetta tenderloin t-bone flank beef ribs salami ribeye pork belly short ribs shankle. Cow capicola ground round, pancetta flank spare ribs swine pork chop chuck rump brisket sirloin",    
            gallery: ["images/bacon/1.jpg", "images/bacon/2.jpg", "images/bacon/3.jpg"]
        }, {
            id: "beigne",
            title: "Beigne",
            slogan: "Donut worry be happy",
            type: ["Glacé au chocolat", "Crème Boston", "Fraises", "Rousettes au miel", "À 'ancienne"],
            image: "images/donuts/main.jpg",
            description: "Cake sweet tiramisu lollipop donut sprinkles dolor tiramisu marzipan jelly. Tiramisu muffin cookie orange dolor marzipan croissant sweet ipsum muffin. Tiramisu donut marzipan croissant lollipop orange cookie sugar vanilla cake. Sugar orange muffin sweet cake croissant sprinkles dolor jelly cake",    
            gallery: ["images/donuts/1.jpg", "images/donuts/2.jpg", "images/donuts/3.jpg"]
        }
    ]

    if (document.querySelector(".page-item")){
        initItem();
    }

    function initItem(){

        var URL = window.location.search; //va chercher mon URL
        console.log(URL);

        var params = new URLSearchParams(URL); // va chercher précisément les  paramètres de mon URL
        console.log(params);

        //quel type de contenu qu'on veut

        var type = params.get("type") || "bacon";//cible le paramètre de mon url et remet sa valeur
        console.log(type);


        var contenu = informations.find(element => element.id === type); //cherche dans le tableau information tous les éléments a qui les éléments id sont égal au type de ma page
        console.log(contenu);


        var titre = document.querySelector(".main-title");
        titre.innerHTML = contenu.title;

        var slogan = document.querySelector(".sub-title");
        slogan.innerHTML = contenu.slogan;

        var desc = document.querySelector(".sub-description p");
        desc.innerHTML = contenu.description;

        var img = document.querySelector(".sub-image img");
        img.src = contenu.image;


        var liste = document.querySelector(".type-list");
        liste.innerHTML = "";

        for(let i=0; i<contenu.type.length ;i++) { //fait une boucle for sur le contenu du tableau informations pour ciblé chaque items de liste présent
            console.log(contenu.type[i]);

            let li = document.createElement("li"); //crée un élément li dans le document

            li.innerHTML = contenu.type[i]; // initie le contenur qui sera afficher avec le contenu du tableau informations
            liste.appendChild(li); //cible notre variable liste de notre page HTML et crée le contenu que l'on veut soit le li à l'endroit désiré sopit dans la liste sur la page HTML
        }


        var thumbnails = document.querySelectorAll(".thumb img"); // cible toutes les images dans les div thumbs identifier
        thumbnails.src = "" //met la src des images a nul ou juste vide

        for(let index = 0; index<thumbnails.length; index++){ //fait une boucle sur les images de la gallerie de notre -page HTMl
            console.log(thumbnails[index]);

            var thumbs = thumbnails[index];
            thumbs.src = contenu.gallery[index]; //cible la src des images pour la remplacer par le contenu du tableau informations
        }
    }



});