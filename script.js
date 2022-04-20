const container = document.getElementById('container')

function grid(rows, columns) {
    container.style.gridTemplateColumns = `repeat(${columns},1fr)`
        container.style.gridTemplateRows = `repeat(${rows},1fr)`
        container.style.width = '500px'
        container.style.height = '500px'
        container.style.margin = 'auto'
        container.style.gap = '0px 0px'
    for(i = 0; i<(rows*columns); i++){
        const box = document.createElement('div')
        box.addEventListener('mouseover', function changeCol (){
            box.style.backgroundColor = 'red'
        })
        box.style.border = '1px solid black'  
        container.appendChild(box)
    }
}

grid(16, 16)

const button = document.getElementById('button')

function changeSize (size) {
    size = prompt("Enter a value between 1 to 100");
    container.textContent = ''
    if (1 <= size && size <= 100) {
        grid (size, size);
    } else {
        grid (16, 16);
        alert ("Only type values between 1 to 100");
    }

}


    

