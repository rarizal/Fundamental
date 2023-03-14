class Employee {
	constructor(nama, jabatan, umur) {
		this.nama = nama;
		this.jabatan = jabatan;
		this.umur = umur;
	}
}

class SalCalc extends Employee {
	constructor(nama, jabatan, umur, tipe, jam) {
		super(nama, jabatan, umur);
		this.tipe = tipe;
		this.jam = jam;
	}

	salary() {
		if (this.tipe == "full") {
			const gajifull = 100000;

			if (this.jam <= 6) {
				return this.jam * gajifull;
			} else if (this.jam > 6 && this.jam < 24) {
				return (
					this.jam * gajifull + (this.jam - 6) * (gajifull - 25000)
				);
			}
			return "Jam kerja tidak boleh lebih dari 24 jam.";
		} else if (this.tipe == "part") {
			const gajipart = 50000;

			if (this.jam <= 6) {
				return this.jam * gajipart;
			} else if (this.jam > 6 && this.jam < 24) {
				return (
					this.jam * gajipart + (this.jam - 6) * (gajipart - 20000)
				);
			}
			return "Jam kerja tidak boleh lebih dari 24 jam.";
		}

		return "Tentukan jenis employment terlebuh dahulu.";
	}
}

let jono = new SalCalc("Jono", "Production", 44, "full", 14);
let joan = new SalCalc("Joanne", "Staff", 23, "full", 3);

// console.log(joan.salary());

/////////////////////////////////////////////////////////////////////////////

class ShootingGame {
	constructor(player1, player2) {
		this.player1 = player1;
		this.player2 = player2;
	}

	getRandomItem() {
		const health = Math.random() < 0.5 ? 0 : 10;
		const power = Math.random() < 0.5 ? 10 : 0;
		return { health, power };
	}

	start() {
		let turn = 1;
		while (true) {
			console.log(`Turn ${turn}`);

			// give players items as per randomizer
			const item1 = this.getRandomItem();
			const item2 = this.getRandomItem();

			// player 1 shoots player 2
			console.log(
				`Player ${this.player1.name} shoots ${this.player2.name}`
			);
			this.player1.hit(this.player2.power);
			console.log(
				`Player ${this.player1.name} remaining health: ${this.player1.health}`
			);

			// check if player 2 is dead
			if (this.player2.health <= 0) {
				console.log(`Player ${this.player1.name} wins!`);
				break;
			}

			// player 2 shoots player 1
			console.log(
				`Player ${this.player2.name} shoots ${this.player1.name}`
			);
			this.player2.hit(this.player1.power);
			console.log(
				`${this.player1.name} remaining health: ${this.player1.health}`
			);

			// check if player 1 is dead
			if (this.player1.health <= 0) {
				console.log(`Player ${this.player2.name} wins!`);
				break;
			}

			//apply items to players
			this.player1.useItem(item1);
			this.player2.useItem(item2);

			turn++;
		}
	}
}

class Player {
	constructor(name, health = 100, power = 10) {
		this.name = name;
		this.health = health;
		this.power = power;
	}

	hit() {
		this.health -= this.power;
	}

	useItem(item) {
		this.health += item.health;
		this.power += item.power;
	}

	showStatus() {
		console.log(`Health: ${this.health}, Power: ${this.power}`);
	}
}

const playera = new Player("Kiki");
const playerb = new Player("Buba");
const game = new ShootingGame(playera, playerb);
game.start();

console.log("lorem ipsum");
