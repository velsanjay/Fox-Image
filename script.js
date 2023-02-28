async function url(){
    var v=fetch('https://randomfox.ca/floof/?i=1')
    var a=await v
    var b=await a.json()
    console.log(b.image);
    var parent=document.querySelector('.body')
    var child=document.createElement('img')
    child.setAttribute('src',b.image)
    parent.append(child)
}

    // var parent=document.querySelector('body')
    // var child=document.createElement('img')
url()
url()
url()
url()
url()
url()

function clicking(e){
    // console.log(e);
    url()
url()
url()
url()
url()
url()
}