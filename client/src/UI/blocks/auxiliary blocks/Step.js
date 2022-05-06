import React from "react";

function Step({context}) {
    return (
        <div style={{width: '30%', height:'100%'}}>
            <div className={'step_gradient'}>
                <div className={'step'}>
                    {context}
                </div>
            </div>
        </div>
    );
}

export default Step
