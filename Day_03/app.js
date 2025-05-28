var btnOpen = document.querySelector('.open_model_btn');
var model = document.querySelector('.model');
var btnClose = document.querySelector('.model_header i');
var iconClose = document.querySelector('.model_footer button');
// console.log(btnOpen);
// console.log(model);
// console.log(btnClose);
// console.log(iconClose);

function toggleModel(e) {
    console.log(e.target);
    model.classList.toggle('hidden')
}

btnOpen.addEventListener('click', toggleModel);

btnClose.addEventListener('click', toggleModel);
iconClose.addEventListener('click', toggleModel);
model.addEventListener('click', function (e) {
    if(e.target == e.currentTarget) {
        toggleModel(e);
    }
});