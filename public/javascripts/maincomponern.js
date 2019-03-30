new Vue({
	el:"#app",
	data:{
		books:[]
	},
	created(){
		var self= this;
		$.ajax({
			url: '/singleuser',
			type: 'POST',
		})
		.done(function(re) {
			self.books=re;
			console.log(self.books);
		})
		.fail(function() {
			console.log("error");
		})
	}
})