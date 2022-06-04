import React, { useState } from 'react';
import  "../CSS/TabControls.scss"

const TabControls = ({
    menuItems,
    selectedItem,
    onMenuItemClick,
}) => {
    const tabContainerRef = React.useRef();
    const [fixHeader, setHeaderFixed] = useState(0);

    return (
        <div className="container dark:bg-slate-800 text-black bg-indigo-100 rounded-lg font-sans" >
            <div
                ref={tabContainerRef}
                className={`wrapper bg-indigo-200 text-center`}
            >
                {
                    menuItems.map(item => {
                        const isSelected = selectedItem.key === item.key;
                        const handleMenuItemClick = () => {
                            onMenuItemClick(item);
                            if (!isSelected) setHeaderFixed(false);
                        };
                        return (
                            <div
                                className={` text-center content-center menuItem ${isSelected ? "selectedItem" : ""}`}
                                onClick={handleMenuItemClick}
                                key={item.label}
                                
                                style={{width:"100%"}}
                            >
                                <div className='align-center'>{item.label || item}</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default TabControls;
