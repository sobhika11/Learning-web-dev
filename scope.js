//lexical scope - A function can be called where it is written

function outer(){
    let msg="hello"
    function inner(){
        console.log(msg)
    }
    inner()
}
outer()

