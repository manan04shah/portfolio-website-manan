import React from 'react';

const Background = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-0">
            <div className="gradient-bg absolute w-full h-full">
                <div className="gradients-container absolute overflow-hidden">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                </div>
            </div>
        </div>
    );
};

export default Background;
