document.getElementById('add-btn').addEventListener('click', function(){
    const inputValue = document.getElementById('input-value').value;

    if(inputValue == ''){
        alert('please enter a value!');
    }
    else{
        const mainContainer = document.getElementById('content-container');
        const tableContainer = document.createElement('tr');
        tableContainer.innerHTML = 
    }
})