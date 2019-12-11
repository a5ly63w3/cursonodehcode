function soma(x,callback){
	return setTimeout(()=>{
		return callback(null,x+5000);
	},3000);
}
function resolveSoma(err,dados){
	if(err)throw err;
	console.log(dados);
}
soma(400,resolveSoma);