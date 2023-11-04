import { Link } from "react-router-dom"
const Header = () => {
  return (
    <nav className='header'>
      <div className="logo">
        <Link to={'/'} >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAvVBMVEX///8AAAD+oRazs7Ourq7i4uLo6Oj+ngD+mwBcXFxubm5nZ2f8/Pz+mQD/+vaEhISSkpL/38H/qhf/3LqSj4vQ0NDw8PCLi4t8fHyKVwyAUQv+pjL+qT3+s2P/8OP/2LT+xIj+wYD/9u3/u3f+uG4cHBw1NDQqKiqRcFH+rEv/5s2SXAmRVAD+sFOOYCv/1aSKgXv/ypQPDg3CwcFQUFA/Pz+ko6NuWEDWggDFfxE9JgVUNQfr3dC+gTypZAAZjS1WAAACrElEQVRoge3Zf3eaMBQGYAhoohiqdeg6BdG5duqcc25d9/P7f6xRVyGJIPRwc+nOyfun9vQxySUxV8syMTExMTExMTH5P9IOWqMG2N7Ytu13Dj7ctY9Bl71/rn2LPNsd+5RWQy4u7GXuHeJU97qZa7sNueOG3Cs81xLd14iu15DbaWieRRexrqR57uOxUj2/j5pxN5SEgx6+e3NNCOWrNQYsum8SlzzSsX7XO3eTsJXu6e4o83wKnfho7kZwE3mqUxbneUMopTiyVM8fyCoMt4QjyJL7cRc9MtFsynTLkvspI/aCPNFR24Xn/owLMvyYvSLXsoZc45gvnoMDQV7qc3POQUFmC0i39PzNZpsDHpNSPRec+zMGD1dxU5lu4arr6lJdiXKygVIKN2Cn+DmSs95ytoRz258rutDxKs0zfFoV6kpLxg25VrrCXVw3SAfcVt4ZtUpSr0PgFhR07+CW5lBnK0mXOJBfdyrEPdSA04dJ/vQtt5JcoxH05QTLLwdVXMcN8v/pi4a7taZafRKekf4JVgrlUEGuVVzp0aTsH72DU/Y0OUGdxynbqtUKHbVLUrPFeHeCv+Jc+9Pcp0Pu4MKj7HtAB3fMaV1jy6PbyrIfgbaespOxZJ13E0qnQ0D5XpC94jHH/Nj/GQDK/Spy/HSVAL2cvyqXYw1XGEv8ypfIeX8wZzoubYqcU9tzoQcDek0tkeOsDcL3sK68zoosum+h3Qtytr6EaXBl+VtaQlEouMANkDz5YTlY+L6/ngttRejGS668oTypZM6FbiYLdbmifCO1bnXOsyJ/V10d9Zwj/1AHrNt9Oqt+no0XfN84z6/ffx4UlhLIY7gw/o4wkWVkDrw/F2axmxBGj2F0EuP91pYkGu6X4XYZz1B+6zIxMTExMTExMTExeUn5C8IUK2oqauXxAAAAAElFTkSuQmCC" alt="" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
            <li><Link to = '/explore' >Explore</Link></li>
            <li> <Link className="active" to={'problemset/all'} > Problems </Link></li>
            <li><Link to = '/contest' >Contest</Link></li>
            <li><Link to= '/discuss' >Discuss</Link></li>
            <li><Link to= '/interview' >Interview</Link></li>
            <li><Link to= '/store' >Store</Link></li>
        </ul>
      </div>
      <div className="nav-icons">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
        </svg>
        <button className='premium' >
          Premium
        </button>
      </div>
    </nav>
  )
}

export default Header
