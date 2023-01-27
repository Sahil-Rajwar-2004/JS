const pie = 3.141592653589;
const e = 2.718281828459;
const h = 6.626e-34;
const electron_mass = 1.6e-19;
const c = 3e8;
const k = 9e9;
const R = 1.0937e7;
const G = 6.6743e-11;
const gas_const = 8.3145;

const none = null;
const not_defined = undefined;

const yes = 1;
const no = 0;
const True = true;
const False = false;

const googol = 1e100;
const ang = 1e-10;
const pos_infinity = Infinity;
const neg_infinity = -Infinity;

const g_sun = 274;
const g_mercury = 3.7;
const g_venus = 8.87;
const g = 9.8;
const g_mars = 3.712;
const g_jupiter = 24.79;
const g_saturn = 10.44;
const g_uranus = 8.87;
const g_neptune = 11.15;


function mean(let array){
	let sum = 0;
	for(let i=0;i<array.length;i++){
		sum += array[i];
	}
	return sum/array.length;
}

