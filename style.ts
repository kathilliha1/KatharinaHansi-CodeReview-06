class Locationn{ 
  city ="";
  zipcode: number ;
  address="";
  img ="";

constructor(city,zipcode,address,img) { 
      this.city = city;
      this.zipcode= zipcode;
      this.address= address;
      this.img= img;
         }

  getloc(){
	  	return`<div><h4>${this.city}</h4><p>${this.address}, ${this.city}, ${this.zipcode}</p></div>`
  }

  getdes (){
     	
		 return`<div class="card col-12 col-sm-12 col-md-5 col-lg-3 my-2">
			 <img class="card-img-top m-2" width="150px" src="${this.img}">
			 <div class="card-body"><p class="card-text">${this.getloc()}</p>
			 </div>
		 </div>`


  }
   
}
class Restaurant extends Locationn{
	name ="";
    type ="";
    telephoneNumber = "" ;
    webAddress = "";
	constructor(city,zipcode,address,img, name, type, telephoneNumber, webAddress){
    super(city, zipcode, address, img);
    this.name = name;
    this.type = type;
    this.telephoneNumber = telephoneNumber;
    this.webAddress = webAddress;
    
	}
  getdes (){
    
		return `<div class="card col-12 col-sm-12 col-md-5 col-lg-3 my-2">
			 <img class="card-img-top m-2" width="150px" src="${this.img}">
			 <div class="card-body">
				 <h4 class="card-title">${this.name}</h4>
				 <p class="card-text">
                     ${super.getloc()}<br> ${this.type} <br> ${this.telephoneNumber}
                     </p>
			 </div>
		 </div>` 
	}
     
  }



class Eventt extends Restaurant {
  city = "";
  zipcode = "";
  address = "";
  eventDate = "";
	eventTime = "";
	price : number; 
	constructor( city,zipcode,address,img, name, type, telephoneNumber, webAddress, eventDate, eventTime, price){
    super(city,zipcode,address,img, name, type, telephoneNumber, webAddress);
    this.city = city;
    this.zipcode = zipcode;
    this.address = address;
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.price = price;
	}
        getdes (){return` <div class="card col-12 col-sm-12 col-md-5 col-lg-3 my-2">
									 <img class="card-img-top m-2" src="${this.img}">
								 		<div class="card-body">
										<h4 class="card-title">${this.name}</h4>
										<p class="card-text">${this.city} <br> ${this.address} <br> ${this.eventDate} <br> ${this.eventTime} <br>${this.price} 
										</p>
									 </div>
							 </div>` 
							}


}
 let items =[
new Locationn("Bangkok", "10100–10900", "King´s Palace", "imgs/Bangkok.jpg", "Bangkok", ""),
 new Locationn("Vietnam", 100000, "Ricefield", "imgs/ricefields.jpg"),
 new Restaurant("Dots Restaurant", 1060, "Mariahilfer Straße 103", "imgs/bulgogi.jpg", "Vienna", "Asian", "+43 1 920 99 80", "https://dots1060.at/"),
 new Restaurant("Fusion", 1020, "Praterstraße 15", "imgs/salmon.jpg", "Vienna", "Asian", "01 – 925 13 80", "", "https://www.mochi.at/mochi/"),
 new Eventt("",100000, "47 Frith Street, London", "imgs/Mic.jpg", "Booker Jones", "", "+44 (0)20 7439 0747", "www.ronniescotts.co.uk/contact", "29.10.2020", "20:00", "€110"),
new Eventt("", 100000, "London Palladium", "imgs/Concert.jpg", "Bastille", "", "+43(1)9529215", "www.songkick.com/concerts/39394173-bastille-at-london-palladium", "22.02.2020", "19:30", "€95")
];






for (let i = 0; i < items.length; i++) {
	if (i< 3){
    document.getElementById("gallary1").innerHTML += items[i].getdes();
    } else{
        document.getElementById("gallary2").innerHTML += items[i].getdes();  
    }
   

		
	}
