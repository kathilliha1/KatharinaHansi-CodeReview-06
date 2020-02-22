var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locationn = /** @class */ (function () {
    function Locationn(city, zipcode, address, img) {
        this.city = "";
        this.address = "";
        this.img = "";
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.img = img;
    }
    Locationn.prototype.getloc = function () {
        return "<div><h4>" + this.city + "</h4><p>" + this.address + ", " + this.city + ", " + this.zipcode + "</p></div>";
    };
    Locationn.prototype.getdes = function () {
        return "<div class=\"card col-12 col-sm-12 col-md-5 col-lg-3 my-2\">\n\t\t\t <img class=\"card-img-top m-2\" width=\"150px\" src=\"" + this.img + "\">\n\t\t\t <div class=\"card-body\"><p class=\"card-text\">" + this.getloc() + "</p>\n\t\t\t </div>\n\t\t </div>";
    };
    return Locationn;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, zipcode, address, img, name, type, telephoneNumber, webAddress) {
        var _this = _super.call(this, city, zipcode, address, img) || this;
        _this.name = "";
        _this.type = "";
        _this.telephoneNumber = "";
        _this.webAddress = "";
        _this.name = name;
        _this.type = type;
        _this.telephoneNumber = telephoneNumber;
        _this.webAddress = webAddress;
        return _this;
    }
    Restaurant.prototype.getdes = function () {
        return "<div class=\"card col-12 col-sm-12 col-md-5 col-lg-3 my-2\">\n\t\t\t <img class=\"card-img-top m-2\" width=\"150px\" src=\"" + this.img + "\">\n\t\t\t <div class=\"card-body\">\n\t\t\t\t <h4 class=\"card-title\">" + this.name + "</h4>\n\t\t\t\t <p class=\"card-text\">\n                     " + _super.prototype.getloc.call(this) + "<br> " + this.type + " <br> " + this.telephoneNumber + "\n                     </p>\n\t\t\t </div>\n\t\t </div>";
    };
    return Restaurant;
}(Locationn));
var Eventt = /** @class */ (function (_super) {
    __extends(Eventt, _super);
    function Eventt(city, zipcode, address, img, name, type, telephoneNumber, webAddress, eventDate, eventTime, price) {
        var _this = _super.call(this, city, zipcode, address, img, name, type, telephoneNumber, webAddress) || this;
        _this.city = "";
        _this.zipcode = "";
        _this.address = "";
        _this.eventDate = "";
        _this.eventTime = "";
        _this.city = city;
        _this.zipcode = zipcode;
        _this.address = address;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        return _this;
    }
    Eventt.prototype.getdes = function () {
        return " <div class=\"card col-12 col-sm-12 col-md-5 col-lg-3 my-2\">\n\t\t\t\t\t\t\t\t\t <img class=\"card-img-top m-2\" src=\"" + this.img + "\">\n\t\t\t\t\t\t\t\t \t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">" + this.name + "</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"card-text\">" + this.city + " <br> " + this.address + " <br> " + this.eventDate + " <br> " + this.eventTime + " <br>" + this.price + " \n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t </div>";
    };
    return Eventt;
}(Restaurant));
var items = [
    new Locationn("Bangkok", "10100–10900", "King´s Palace", "imgs/Bangkok.jpg", "Bangkok", ""),
    new Locationn("Vietnam", 100000, "Ricefield", "imgs/ricefields.jpg"),
    new Restaurant("Dots Restaurant", 1060, "Mariahilfer Straße 103", "imgs/bulgogi.jpg", "Vienna", "Asian", "+43 1 920 99 80", "https://dots1060.at/"),
    new Restaurant("Fusion", 1020, "Praterstraße 15", "imgs/salmon.jpg", "Vienna", "Asian", "01 – 925 13 80", "", "https://www.mochi.at/mochi/"),
    new Eventt("", 100000, "47 Frith Street, London", "imgs/Mic.jpg", "Booker Jones", "", "+44 (0)20 7439 0747", "www.ronniescotts.co.uk/contact", "29.10.2020", "20:00", "€110"),
    new Eventt("", 100000, "London Palladium", "imgs/Concert.jpg", "Bastille", "", "+43(1)9529215", "www.songkick.com/concerts/39394173-bastille-at-london-palladium", "22.02.2020", "19:30", "€95")
];
for (var i = 0; i < items.length; i++) {
    if (i < 3) {
        document.getElementById("gallary1").innerHTML += items[i].getdes();
    }
    else {
        document.getElementById("gallary2").innerHTML += items[i].getdes();
    }
}
