$(function(){

    var employees=[];

    var app = $.sammy(function () {

        this.element_selector = '#content';


        this.get('#/add', function (context) {
            context.$element().load('addEmployee.html',function(){
                $('#btnAdd').click(function(){
                    var employee={
                        name:$('#inputName').val(),
                        surname:$('#inputSurname').val(),
                        mail:$('#inputMail').val()
                    }

                    employees.push(employee);
                    //console.log(employees);
                })
            });

            
        });

        this.get('#/list', function (context) {
            context.$element().load('listEmployee.html',function(){
                for (let index = 0; index < employees.length; index++) {
                    $('ul').append('<li class="list-group-item"><div class="row"><div class="col-md-4">'+
                            employees[index].name+'</div><div class="col-md-4">'+
                            employees[index].surname+'</div><div class="col-md-4">'+
                            employees[index].mail+'</div></div></li>'
                        
                        );
                    
                }
            });
        });
    })

    

    app.run('#/');

});