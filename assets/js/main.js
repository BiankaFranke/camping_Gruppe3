console.log('It works');

function ChangeRadius(event) {
    event.preventDefault();
    let radius_output = document.querySelector('#radius').value;
    document.querySelector("#radiusInput").innerHTML = radius_output + '   km';
};