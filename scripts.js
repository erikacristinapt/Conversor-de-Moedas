const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcon= 149.599

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const TextReal = document.getElementById('real-text-value')
    const currencyValueText = document.getElementById('currency-value-text')

    // TextReal.innerHTML = inputReais (forma antiga)
    TextReal.innerHTML = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }
    ).format(inputReais)


    //currencyValueText.innerHTML = inputReais/dólar (forma antiga)

    if (select.value === 'US$ Dólar americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'
            }
        ).format(inputReais / dolar)

    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency',
                currency: 'EUR'
            }
        ).format(inputReais / euro)

    }

    if (select.value === '₿ Bitcoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency',
                currency: 'XBT'
            }
        ).format(inputReais / bitcon)

    }
    //console.log(inputReais / dólar)
}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name-dolar')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = './assets/EUA.svg'
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/Euro.svg'
    }

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/logo-bitcoin.png'
    }
    convertValues()

}


button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)