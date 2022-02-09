const barcodeImage = document.querySelector('#barcode-image')
const params = new URLSearchParams(window.location.search)
const barcode = params.get('barcode') || 'CLICK TO CHANGE'

const createURL = barcode =>
  `https://barcode.tec-it.com/barcode.ashx?data=${barcode}&code=Code128`

barcodeImage.src = createURL(barcode)
barcodeImage.alt = barcode

barcodeImage.onclick = () => {
  const code = prompt('Enter a barcode')

  if (code) {
    window.location.replace(`?barcode=${code}`)
  }
}
