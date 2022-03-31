const WishLang = props => {
  const {item, updateTabId, activeBtn} = props
  const {id, buttonText} = item

  const onClickTab = () => {
    updateTabId(id)
  }
  const c = activeBtn ? 'active-red' : ''
  return (
    <li>
      <button onClick={onClickTab} type="button" className={`btn ${c}`}>
        {buttonText}
      </button>
    </li>
  )
}
export default WishLang
