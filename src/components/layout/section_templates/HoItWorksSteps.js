import React from 'react';

function HowItWorksSteps(props){
    return (
        <section className='hiw-steps sect'>
            <div>
                <p className="hiws-num">1</p>
                <h1 className="hiws-step">Step Name</h1>
                <p className="hiws-desc">Description text</p>
                <div className="hiws-icon">icon here</div>
                <ul className="hiws-lists">
                <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                </ul>
            </div>
            <div>
            <p className="hiws-num">2</p>
                <h1 className="hiws-step">Step Name</h1>
                <p className="hiws-desc">Description text</p>
                <div className="hiws-icon">icon here</div>
                <ul className="hiws-lists">
                <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                </ul>
            </div>
            <div>
            <p className="hiws-num">3</p>
                <h1 className="hiws-step">Step Name</h1>
                <p className="hiws-desc">Description text</p>
                <div className="hiws-icon">icon here</div>
                <ul className="hiws-lists">
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                </ul>
            </div>
        </section>
    )
}

export default HowItWorksSteps;