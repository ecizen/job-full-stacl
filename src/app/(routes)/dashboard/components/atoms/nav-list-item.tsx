
const NavlistItem = () => {

    const Item = [
        {id:1, labelLink: "Find Jobs", link: "/find-jobs"},
        {id:2, labelLink: "Find Talent", link: "/find-jobs"},
        {id:3, labelLink: "Upload Jobs", link: "/find-jobs"},
        {id:4, labelLink: "Comunity", link: "/find-jobs"},
    ]
  return(
   <>
   {Item.map((item)=> (
         <li key={item.id} className="text-xs">
              <a href={item.link} className="text-gray-400 hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-100">{item.labelLink}</a>
         </li>
   ))}
   </>
  )
}

export default NavlistItem;