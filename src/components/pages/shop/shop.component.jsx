import React from "react"
import ShopData from "./collections";
import CollectionPreview from "../../collection-preview/collection-preview.component";

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: ShopData
        }
    }
    
    render(){
        const {collections} = this.state;
        console.log(collections)
        return(
            <div>
                {collections.map(({id, ...otherColectionProps})=>(
                    <CollectionPreview key={id} {...otherColectionProps}/>
                ))}
            </div>
        )
    }
}


export default ShopPage;