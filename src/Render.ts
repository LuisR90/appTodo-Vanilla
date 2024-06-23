function Render( elementString:string, value: string ):string|undefined {
    const element = document.querySelector(elementString)
    if( element === null) {
        // console.error(`Element not found { ID: ${ element?.id ?? 0 } }.`);
        return;
    }

    return element.innerHTML = value
}

export default Render