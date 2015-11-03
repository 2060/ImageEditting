function price() {
	var x = document.getElementById("chatlieu");
	var y = document.getElementById("kichthuoc");
	var price = 0;
	if(y.selectedIndex == 1) {
		switch(x.selectedIndex) {
			case 0:
				price = 5;
				return price;
			case 1:
				price = 6;
				return price;
			case 2:
				price = 7;
				return price;
			case 3:
				price = 8;
				return price;
			case 4:
				price = 9;
				return price;
			default:
				price = 6;
				return price;
		}
	}else if(y.selectedIndex == 2) {
		switch(x.selectedIndex) {
			case 0:
				price = 4;
				return price;
			case 1:
				price = 5;
				return price;
			case 2:
				price = 6;
				return price;
			case 3:
				price = 7;
				return price;
			case 4:
				price = 8;
				return price;
			default:
				price = 5;
				return price;
		}
	}else if(y.selectedIndex == 3) {
		switch(x.selectedIndex) {
			case 0:
				price = 3;
				return price;
			case 1:
				price = 4;
				return price;
			case 2:
				price = 5;
				return price;
			case 3:
				price = 6;
				return price;
			case 4:
				price = 7;
				return price;
			default:
				price = 4;
				return price;
		}
	}else {
		switch(x.selectedIndex) {
			case 0:
				price = 6;
				return price;
			case 1:
				price = 7;
				return price;
			case 2:
				price = 8;
				return price;
			case 3:
				price = 9;
				return price;
			default:
				price = 5;
				return price;
		}
	}
}