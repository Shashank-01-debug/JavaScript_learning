const company={
    name:'tech with jatin',
    trainer:{
        x:{
        name:'Jatin',
             },
        printTrainerInfo:function(){

            console.log('Trainer Name', this.x.name);
        
        }
    }
}

company.trainer.printTrainerInfo();