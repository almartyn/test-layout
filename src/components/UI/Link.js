
const Link = (props)=> {
   return (
      <div  activeClass="active"
      to={props.to}
      spy={true}
      smooth={true}
      offset={-70}
      duration= {500}></div>
   );
}
export default Link;