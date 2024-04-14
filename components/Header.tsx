interface Props {
  type: string;
  query: string;
  category: string;
}

const Header = ({ type, query, category }: Props) => {

  if(query && category){
    return(
      <h1 className="heading3 self-start text-white-800">
        Resultados De Búsqueda Para "{query}" En 
        <span className="capitalize">{category}</span>
      </h1>
    )
  }

  if(query){
    return(
      <h1 className="heading3 self-start text-white-800">
        Resultados De Búsqueda Para "{query}"
      </h1>
    )
  }

  if(category){
    <h1 className="heading3 self-start text-white-800">
      <span className="capitalize">{category}</span>
    </h1>
    
  }

  return (
    <h1 className="heading3 self-start text-white-800">
      Sin Resultados
    </h1>
  )
}

export default Header
