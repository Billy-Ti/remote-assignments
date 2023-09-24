import { useState } from 'react';

function ContentBlock() {
    // 使用 useState 管理 btn 狀態，初始先設為 false 
    const [isAction, setIsAction] = useState(false);

    // 使用 map 產出 box 的陣列，初始都先藏起來
    const moreBlocks = [5, 6, 7, 8].map((index) => (
        <li
            key={index}
            className={`content-box content-more-block box-${index} w-100 text-center color-dark-blue pt-12 mb-16`}
            style={{ display: isAction ? 'block' : 'none' }} // 根據 isAction 狀態來顯示還是隱藏
        >
            Content Box {index}
        </li>
    ));

    // 切換 isAction 狀態，使它可以來回點擊顯示 or 隱藏
    const handleButtonClick = () => {
        setIsAction(!isAction);
    };

    return (
        <div>
            <div className="text-center">
                <button
                    className={`btn-action  color-action cursor-pointer px-12 py-20 ${isAction ? 'mb-20' : ''}`} // 根據狀態，加上 mb-20
                    type="button"
                    onClick={handleButtonClick} // 綁上方 click 事件
                >
                    Call to Action
                </button></div>

            {/* 要顯示的 box */}
            <ul className="d-flex flex-wrap">{moreBlocks}</ul>
        </div>
    );
}

export default ContentBlock;
