document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.querySelectorAll('.button-menu .button1');
    buttons.forEach(button=>{
        button.addEventListener('click', function(){
            button.classList.add('clicked');
            setTimeout(()=>{
                let name = button.textContent.trim();
                window.location.href = `${name}.html`;
            }, 500);
        });
    });
});
document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.querySelectorAll('.menu-item ');
    let total_price = document.querySelector('.total-harga');
    let total = 0
    buttons.forEach(button=>{
        let price = button.querySelector('.menu-price').textContent.trim();
        let price_value = parseInt(price.replace('Rp.', '').replace('.', '').replace(',00', ''));
        let selected = false;
        button.addEventListener('click', function(){
            if (selected == false){
                button.classList.add('selected');
                total += price_value;
                selected = true;
            }
            else{
                button.classList.remove('selected');
                total -= price_value;
                selected = false;
            }
            total_price.textContent = `Total: Rp. ${total.toLocaleString('id-ID')},00`;
        });
    });
});