import React, {Suspense} from 'react';
import {AppStateType} from "../redux/redux-store";


type MapStateToProps = {}
const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {}
}

function withSuspense<T>(Component: React.ComponentType<T>) {
    return (props: MapStateToProps) => {
        return <Suspense fallback={<div>Loading...</div>}>
            <Component {...props as T}/>
        </Suspense>
    }
};


export default withSuspense