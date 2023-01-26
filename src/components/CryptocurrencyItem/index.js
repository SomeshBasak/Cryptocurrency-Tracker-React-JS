import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoData

  return (
    <li className="contents-container">
      <div className="image-content">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="heading">{currencyName}</p>
      </div>
      <div className="table-right-side-heading">
        <p className="usd-heading">{usdValue}</p>
        <p className="euro-heading">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
