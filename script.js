function oddOrEven(i,j){
    return (i+j)%2===0
}

for(let i=1; i<9; i++){
    for(let j=1; j<9; j++){
        let newDiv = document.createElement('div')
        document.getElementById('parent').appendChild(newDiv)
        newDiv.className = 'outer-box'
        let newDiv1 = document.createElement('div')
        for(let m=j-1;m<j;m++){
            document.getElementsByClassName('outer-box')[m].appendChild(newDiv1)
        }
        newDiv1.className = oddOrEven(i,j)?'white':'black'
        newDiv1.classList.add('box')
        
    }
}
