function Telefon(marka, cena, kolor, rok) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.rok = rok;
}

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", cena to " + this.cena + ", kolor to " + this.kolor + ", a rok produkcji to " + this.rok + ".");
}

var iPhone6s = new Telefon("Apple", 2250, "srebrny", 2015);
var GalaxyS6 = new Telefon("Samsung", 2000, "czarny", 2015);
var Nokia6 = new Telefon("Nokia", 1500, "czerwony", 2016);

iPhone6s.printInfo();
GalaxyS6.printInfo();
Nokia6.printInfo();



function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
} 

var btn1 = new Button('Yes');
var btn2 = new Button('Maybe');
var btn3 = new Button('No');

btn1.create();
btn2.create();
btn3.create();