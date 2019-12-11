function sum(x){
	return new Promise((resolve,reject)=>{
		if(Number(x)==NaN || Number(x)==undefined || typeof x != 'number'){
			reject('Tá de brincadeira!');
		}
		setTimeout(()=>{
		 resolve(x + 5000);
	},3000);
	}) 
}
async function main(){
	try{
		const result = await sum(3000);
		console.log(`O resultado: ${result}`)
	}catch(error){
		console.log(`Erro:${error}`);
	}
}
main();