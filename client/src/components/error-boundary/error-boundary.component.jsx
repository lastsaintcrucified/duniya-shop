import React from "react";
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from "./error-boundary.styles.jsx";

class ErrorBoundary extends React.Component{
    state={
        hasErrored: false
    }

    static getDerivedStateFromError(error){
        return{hasErrored: true}
    }

    componentDidCatch(error,info){
        console.log(error);
    }

    render(){
        if(this.state.hasErrored){
        return(
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl="https://i.imgur.com/oCkEbrA.png"/>
                <ErrorImageText>Sorry,this page is lost</ErrorImageText>
            </ErrorImageOverlay>
        )
    }
    return this.props.children;
    }

}

export default ErrorBoundary;