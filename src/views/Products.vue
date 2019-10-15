<template>
        <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6"><h2> all <b>products</b></h2></div>
                        <div class="col-sm-6">
                            <div class="btn-group" data-toggle="buttons">
                                <label class="btn btn-info active">
                                    <input type="radio" name="status" value="all" checked="checked"> All
                                </label>
                                <label class="btn btn-success">
                                    <input type="radio" name="status" value="active"> Active
                                </label>
                                <label class="btn btn-warning">
                                    <input type="radio" name="status" value="inactive"> Inactive
                                </label>
                                <label class="btn btn-danger">
                                    <input type="radio" name="status" value="expired"> Expired
                                </label>							
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>products</th>
                            <th>url</th>
                            <th>Created&nbsp;On</th>
                            <th>Status</th>
                            <th>name &nbsp;product</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr data-status="active">
                            <td>1</td>
                            <td><a href="#">loremvallis.com</a></td>
                            <td>04/10/2013</td>
                            <td><span class="label label-success">Active</span></td>
                            <td>pepsi</td>
                            <td><a href="#" class="btn btn-sm manage">Manage</a></td>
                        </tr>
                        <tr data-status="inactive">
                            <td>2</td>
                            <td><a href="#">quisquamut.net</a></td>
                            <td>05/08/2014</td>
                            <td><span class="label label-warning">Inactive</span></td>
                            <td>sabritas originales</td>
                            <td><a href="#" class="btn btn-sm manage">Manage</a></td>
                        </tr>
                        <tr data-status="active">
                            <td>3</td>
                            <td><a href="#">convallissed.com</a></td>
                            <td>11/05/2015</td>
                            <td><span class="label label-success">Active</span></td>
                            <td>huevo kinder </td>
                            <td><a href="#" class="btn btn-sm manage">Manage</a></td>
                        </tr>
                        <tr data-status="expired">
                            <td>4</td>
                            <td><a href="#">phasellusri.org</a></td>
                            <td>06/09/2016</td>
                            <td><span class="label label-danger">Expired</span></td>
                            <td>papitas</td>
                            <td><a href="#" class="btn btn-sm manage">Manage</a></td>
                        </tr>
                        <tr data-status="inactive">
                            <td>5</td>
                            <td><a href="#">facilisleo.com</a></td>
                            <td>12/08/2017</td>
                            <td><span class="label label-warning">Inactive</span></td>
                            <td>coca cola </td>
                            <td><a href="#" class="btn btn-sm manage">Manage</a></td>
                        </tr>
                    </tbody>
                    
                </table>
              
              <button v-on:click="addProduct">click perro </button>

            </div>     

</template>

<script>
export default {
    data(){
        return{
            token:'',
            permisos:'',
            rol:'',
            
        }
    },
    mounted(){
        this.start();
    },
    methods: {
        start:function() {
            this.token=JSON.parse(localStorage.getItem("token")); 
            console.log("el vedadero token "+this.token);

            if(this.$router.history.current.path== '/Products/1'){
                console.log("administrado en en la caja ");
                this.rol=1;
                console.log(" admin token "+this.token);
                console.log(" admin rol "+this.rol);
                
            }
            if(this.$router.history.current.path== '/Products/2'){
               console.log("cajero en la caja ");
               this.rol=2;
               console.log("cajero  token "+this.token);
               console.log("cajero rol "+this.rol);

            }          
        },
        addProduct:function(){
            console.log("entro en el metodo add product");
            this.$router.push('/AddProducts');
            console.log("enviar el token y el rol ");
            localStorage.setItem('token', JSON.stringify(this.token));
            localStorage.setItem('rol', JSON.stringify(this.rol));

            /*this.$router.push('/Products/'+response.data.user.rol);*/
        },
       
    },
}
</script>

<style>

	.table-wrapper {
        width: 850px;
        background: #fff;
        padding: 20px 30px 5px;
        margin: 30px auto;
        box-shadow: 0 0 1px 0 rgba(0,0,0,.25);
    }
	.table-title .btn-group {
		float: right;
	}
	.table-title .btn {
		min-width: 50px;
		border-radius: 2px;
		border: none;
		padding: 6px 12px;
		font-size: 95%;
		outline: none !important;
		height: 30px;
	}
    .table-title {
		border-bottom: 1px solid #e9e9e9;
		padding-bottom: 15px;
		margin-bottom: 5px;
		background: rgb(0, 50, 74);
		margin: -20px -31px 10px;
		padding: 15px 30px;
		color: #fff;
    }
    .table-title h2 {
		margin: 2px 0 0;
		font-size: 24px;
	}
    table.table tr th, table.table tr td {
        border-color: #e9e9e9;
		padding: 12px 15px;
		vertical-align: middle;
    }
	table.table tr th:first-child {
		width: 40px;
	}
	table.table tr th:last-child {
		width: 100px;
	}
    table.table-striped tbody tr:nth-of-type(odd) {
    	background-color: #fcfcfc;
	}
	table.table-striped.table-hover tbody tr:hover {
		background: #f5f5f5;
	}
    table.table td a {
        color: #2196f3;
    }
	table.table td .btn.manage {
		padding: 2px 10px;
		background: #37BC9B;
		color: #fff;
		border-radius: 2px;
	}
	table.table td .btn.manage:hover {
		background: #2e9c81;		
	}





</style>