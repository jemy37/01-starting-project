export default function Tabs({children, button, ButtonsContainer}) {
   
    return (
        <>
        <ButtonsContainer>
        {button}
        </ButtonsContainer>
        
        {children}
        </>
    )
}