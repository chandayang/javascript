//解决js在进行加减运算中出现的精度损失问题
var calculator = {
	add : function(a, b){
		var len1, len2;
		try{
			len1 = a.toString().split('.')[1].length;
		}catch(e){
			len1 = 0;
		}
		try{
			len2 = b.toString().split('.')[1].length;
		}catch(e){
			len2 = 0;
		}

		var power = Math.pow(10, Math.max(len1, len2));
		return Math.round(a*power + b*power)/power;
	},
	sub : function(a, b){
		var len1, len2;
		try{
			len1 = a.toString().split('.')[1].length;
		}catch(e){
			len1 = 0;
		}
		try{
			len2 = b.toString().split('.')[1].length;
		}catch(e){
			len2 = 0;
		}

		var power = Math.pow(10, Math.max(len1, len2));
		return Math.round(a*power - b*power)/power;
	},
	mul : function(a, b){
		var len1, len2;
		try{
			len1 = a.toString().split('.')[1].length;
		}catch(e){
			len1 = 0;
		}
		try{
			len2 = b.toString().split('.')[1].length;
		}catch(e){
			len2 = 0;
		}

		var num1 = Number(a.toString().replace(".", ""));
		var num2 = Number(b.toString().replace(".", ""));

		return (num1*num2)/Math.pow(10, len2+len1);
	},
	div : function(a, b){
		var len1, len2;
		try{
			len1 = a.toString().split('.').length;
		}catch(e){
			len1 = 0;
		}
		try{
			len2 = b.toString().split('.')[1].length;
		}catch(e){
			len2 = 0;
		}

		var num1 = Number(a.toString().replace(".", ""));
		var num2 = Number(b.toString().replace(".", ""));

		return (num1/num2)*Math.pow(10, len2-len1);
	}

}