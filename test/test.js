"use strict"

var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server=require("../app");
let should = chai.should();
const expect = require('chai').expect;
 var request = require('supertest')
chai.use(chaiHttp);

var request = request("http://localhost:8080")


 describe('users', function() { 
    describe('POST', function(){     
        it('Should  insert json users', function(done){
        request.post('/api/users')
        .send({NameUser: "test"  , LastNameUser: "test" , EmailUser: "test@xxx.com",  PasswordUser:"123java",StatusUser:true,DateBeginUser:"2019-10-21T05:00:00.000Z" , TypeUser:{IdType:"1",Role:"Admin",DescripTypeUser:"Control de modulos"} } )    
        .expect('Content-Type', /json/)
            .end( function(err,res){
             console.log(res.body.data._id)
             expect(res).to.have.status(200);
             done();
            });       
     });
     
     it('Should  not insert json users why NameUser is empty', function(done){
         request.post('/api/users')
         .send({NameUser:"", LastNameUser: "test" , EmailUser: "testmia@xxx.com",  PasswordUser:"123java",StatusUser:true,DateBeginUser:"2019-10-21T05:00:00.000Z" , TypeUser:{IdType:"1",Role:"Admin",DescripTypeUser:"Control de modulos"} } )
             .expect('Content-Type', /json/)
             .expect(500, done);
     });
     
     it('Should  not insert the user why reques json user  is empty', function(done){
         request.post('/api/users')  
             .expect('Content-Type', /json/)
             .expect(500, done);
     });
     //la funcion users
     });

     
describe('GET', function(){
    let id = "";
    let valor = "test@xxx.com";
    let idnull = 1;

    it('Should return json as default data format', function(done){
        request.get('/api/users')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
           
             it("should get a single user_email record", (done) => {                      
             //  request.get('api/users/email'+`/${valor}`) 
               request.get('/api/users/email/test@xxx.com')
                .expect('Content-Type', /json/)
                .end( function(err,res){
                    id=res.body.data._id
                    console.log("el valor "+ id)
                    done();
                   });          
                });   


                it("should get a single user record", (done) => {         
                    request.get('/api/users'+`/${id}`)  
                    .expect('Content-Type', /json/)
                    .expect(200, done);
                         }); 

                         it("should not get a single user record", (done) => {    
                            request.get('/api/users'+`/${idnull}`)
                            .expect('Content-Type', /json/)
                            .expect(404, done);
                                 });

                                });



                                 describe('put', function(){
                                    let id = "";
                                    it("should get a single user_email record", (done) => {                      
                                        //  request.get('api/users/email'+`/${valor}`) 
                                          request.get('/api/users/email/test@xxx.com')
                                           .expect('Content-Type', /json/)
                                           .end( function(err,res){
                                               id=res.body.data._id
                                               console.log("el valor "+ id)
                                               done();
                                              });          
                                           });  


                                    
                                it('Should  update json users', function(done){         
                                   request.put('/api/users'+`/${id}`)
                                   .send({NameUser: "test3"  , LastNameUser: "test" , EmailUser: "test@xxx.com",  PasswordUser:"123java",StatusUser:true,DateBeginUser:"2019-10-21T05:00:00.000Z" , TypeUser:{IdType:"1",Role:"Admin",DescripTypeUser:"Control de modulos"} } )
                                       .expect('Content-Type', /json/)
                                       .expect(200, done);
                                });
                                
                                it('Should  update 404 json users', function(done){                               
                                    request.put('/api/users/45')
                                    .send({NameUser: "test3"  , LastNameUser: "test" , EmailUser: "test@xxx.com",  PasswordUser:"123java",StatusUser:true,DateBeginUser:"2019-10-21T05:00:00.000Z" , TypeUser:{IdType:"1",Role:"Admin",DescripTypeUser:"Control de modulos"} } )
                                       .expect(404, done);
                                });
                                
                                });
                                
                                
                                describe('delete', function(){
                                
                                    let id = "";
                                    it("should get a single user_email record", (done) => {                      
                                          request.get('/api/users/email/test@xxx.com')
                                           .expect('Content-Type', /json/)
                                           .end( function(err,res){
                                               id=res.body.data._id
                                               console.log("el valor "+ id)
                                               done();
                                              });          
                                           }); 


                               
                                           it('Should  remove json users', function(done){
                                           
                                           request.delete('/api/users'+`/${id}`)
                                           .expect('Content-Type', /json/)
                                                 .expect(200, done);
                                          });

                                it('Should  remove json users', function(done){
        
                                   request.delete('/api/users/1')
                                   .expect('Content-Type', /json/)
                                         .expect(404, done);
                                 });

                              });                    
    });


