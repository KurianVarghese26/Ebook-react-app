import React from "react";

const Greet = (props) =>
{
    const {name,sweetName,children} = props
return(

<div>
<h1>Hello {name} also known as {sweetName}</h1>
{children}
</div>

)
}


export default Greet; 