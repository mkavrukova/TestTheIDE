var obj = (function () {
    return {
        someMethod: function () {
            console.log('stuff');
        },
        anotherMethod: function () {
            console.log('some other stuff')
        }
    }    
}());
obj.someMethod();
obj.anotherMethod();
