
document.getElementById('triangle-btn').addEventListener('click', () => {
    const triangleArea = 0.5 * calculateArea('t-bredth', 't-height');

    const bredth = getInputValues('t-bredth');
    const height = getInputValues('t-height');

    const title = getText('title-triangle');
    if(isNaN(bredth)){
        return alert('PLEASE ENTER VALID NUMBER');
    }
    else if(isNaN(height)){
        return alert('PLEASE ENTER VALID NUMBER');
    }
    else{
        const getUl = document.getElementById('area-list');
        const createElement = document.createElement('li');
        createElement.innerText = `${title} (${bredth} x ${height}) = ${triangleArea}`;
        getUl.appendChild(createElement);

        makeEmptyField('t-bredth', 't-height');
    }
    

})

document.getElementById('rectangle-btn').addEventListener('click', () => {
    const Area = calculateArea('w-rectangle', 'l-rectangle');

    const width = getInputValues('w-rectangle');
    const length = getInputValues('l-rectangle');
    const title = getText('title-rectangle');

    if(isNaN(width)){
        return alert('PLEASE ENTER VALID NUMBER');
    }
    else if(isNaN(length)){
        return alert('PLEASE ENTER VALID NUMBER');
    }
    else{
        const getUl = document.getElementById('area-list');
        const createElement = document.createElement('li');
        createElement.innerText = `${title} (${width} x ${length}) = ${Area}`;
        getUl.appendChild(createElement);

        makeEmptyField('w-rectangle', 'l-rectangle');
    }


})


document.getElementById('parallelogram-btn').addEventListener('click', () => {
    const Area = calculateArea('p-bredth', 'p-height');

    const bredth = getInputValues('p-bredth');
    const height = getInputValues('p-height');
    const title = getText('title-parallelogram');

    if(isNaN(bredth)){
        return alert('PLEASE ENTER VALID NUMBER');
    }
    else if(isNaN(height)){
        return alert('PLEASE ENTER VALID NUMBER');
    }
    else{
        const getUl = document.getElementById('area-list');
        const createElement = document.createElement('li');
        createElement.innerText = `${title} (${bredth} x ${height}) = ${Area}`;
        getUl.appendChild(createElement);

        makeEmptyField('p-bredth', 'p-height');
    }


})


document.getElementById('rhombus-btn').addEventListener('click', () => {
    const Area = 0.5 * calculateArea('d1', 'd2');

    const d1 = getInputValues('d1');
    const d2 = getInputValues('d2');
    const title = getText('rhombus-title');

    if(isNaN(d1)){
        return alert('PLEASE ENTER VALID NUMBER');
    }
    else if(isNaN(d2)){
        return alert('PLEASE ENTER VALID NUMBER');
    }
    else{
        const getUl = document.getElementById('area-list');
        const createElement = document.createElement('li');
        createElement.innerText = `${title} (${d1} x ${d2}) = ${Area}`;
        getUl.appendChild(createElement);

        makeEmptyField('d1', 'd2');
    }


})


document.getElementById('pentagon-btn').addEventListener('click', () => {
    const Area = 0.5 * calculateArea('p-pentagon', 'b-pentagon');

    const d1 = getInputValues('p-pentagon');
    const d2 = getInputValues('b-pentagon');
    const title = getText('title-pentagon');

    if(isNaN(d1)){
        return alert('PLEASE ENTER VALID NUMBER');
    }
    else if(isNaN(d2)){
        return alert('PLEASE ENTER VALID NUMBER');
    }
    else{
        const getUl = document.getElementById('area-list');
        const createElement = document.createElement('li');
        createElement.innerText = `${title} (${d1} x ${d2}) = ${Area}`;
        getUl.appendChild(createElement);

        makeEmptyField('p-pentagon', 'b-pentagon');
    }

})


document.getElementById('ellipse-btn').addEventListener('click', () => {
    const Area = 3.1416 * calculateArea('a-ellipse', 'b-ellipse');

    const d1 = getInputValues('a-ellipse');
    const d2 = getInputValues('b-ellipse');
    const title = getText('title-ellipse');

    if(isNaN(d1)){
        return alert('PLEASE ENTER VALID NUMBER');
    }
    else if(isNaN(d2)){
        return alert('PLEASE ENTER VALID NUMBER');
    }else{
        const getUl = document.getElementById('area-list');
        const createElement = document.createElement('li');
        createElement.innerText = `${title} (${d1} x ${d2}) = ${Area.toFixed(2)}`;
        getUl.appendChild(createElement);

        makeEmptyField('a-ellipse', 'b-ellipse');
    }


})
// console.log(multiply(3,6));