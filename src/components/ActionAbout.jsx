
const ActionAbout = ({title, btnText}) => {
  return (
    <section className="section-spacing">
    <div className="text-center py-8 px-4 bg-myCustomColor-lighterGreen rounded-xl shadow-md lg:shadow-lg shadow-myCustomColor-light lg:w-5/6 mx-auto my-8 xl:max-w-7xl">
        <h2 className="section-headers pb-7"> { title}</h2>
        <button type="button" className="action-buttons  bg-slate-950 hover:bg-primary active:bg-primary transitions"> { btnText}</button>
  </div>
</section>
  )
}

export default ActionAbout