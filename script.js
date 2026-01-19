// 物品数据结构定义
const itemsData = [
    {
        name: "全物品",
        icon: "💎",
        locations: [
            {
                name: "全物品",
                x: 100,
                y: 15,
                z: 0,
                dimension: "end"
            }
        ]
    }
];

// DOM元素引用
const itemsContainer = document.getElementById('itemsContainer');
const detailsContent = document.getElementById('detailsContent');

// 初始化函数
function init() {
    // 生成物品列表
    generateItemsList();
}

// 生成物品列表
function generateItemsList() {
    itemsContainer.innerHTML = '';
    
    itemsData.forEach((item, index) => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        itemCard.dataset.itemIndex = index;
        
        itemCard.innerHTML = `
            <div class="item-icon">${item.icon}</div>
            <div class="item-name">${item.name}</div>
        `;
        
        // 添加点击事件
        itemCard.addEventListener('click', () => {
            showItemDetails(item);
            
            // 更新选中状态
            document.querySelectorAll('.item-card').forEach(card => {
                card.classList.remove('active');
            });
            itemCard.classList.add('active');
        });
        
        itemsContainer.appendChild(itemCard);
    });
}

// 显示物品详情
function showItemDetails(item) {
    let locationsHtml = '';
    
    item.locations.forEach((location, index) => {
        // 维度显示名称
        const dimensionNames = {
            'overworld': '主世界',
            'nether': '下界',
            'end': '末地'
        };
        
        // 根据维度获取文件夹名称（处理下界文件夹名称的特殊情况）
        const dimensionFolder = location.dimension === 'nether' ? 'nerther' : location.dimension;
        
        // 自动生成跳转链接
        const jumpUrl = `./${dimensionFolder}/index.html?x=${location.x}&z=${location.z}`;
        
        locationsHtml += `
            <div class="location-card">
                <div class="location-title">位置 ${index + 1}: ${location.name}</div>
                <div class="location-details">
                    <div class="detail-item">
                        <div class="detail-label">坐标:</div>
                        <div class="detail-value">X: ${location.x}, Y: ${location.y}, Z: ${location.z}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">维度:</div>
                        <div class="detail-value">
                            <span class="dimension ${location.dimension}">${dimensionNames[location.dimension]}</span>
                        </div>
                    </div>
                </div>
                <a href="${jumpUrl}" class="jump-button">查看地图</a>
            </div>
        `;
    });
    
    detailsContent.innerHTML = `
        <div class="item-info active">
            <div class="info-header">
                <h3>${item.icon} ${item.name}</h3>
            </div>
            <div class="locations-list">
                ${locationsHtml}
            </div>
        </div>
    `;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 允许用户自定义物品的函数（示例）
function addCustomItem(itemData) {
    itemsData.push(itemData);
    generateItemsList();
}

// 允许用户删除物品的函数（示例）
function removeItem(itemIndex) {
    if (itemIndex >= 0 && itemIndex < itemsData.length) {
        itemsData.splice(itemIndex, 1);
        generateItemsList();
        // 清空详情面板
        detailsContent.innerHTML = `
            <div class="empty-state">
                <p>请点击左侧的物品查看详细信息</p>
            </div>
        `;
    }
}

// 允许用户更新物品的函数（示例）
function updateItem(itemIndex, updatedData) {
    if (itemIndex >= 0 && itemIndex < itemsData.length) {
        itemsData[itemIndex] = { ...itemsData[itemIndex], ...updatedData };
        generateItemsList();
        // 如果当前显示的是更新的物品，重新显示详情
        const activeCard = document.querySelector(`.item-card.active`);
        if (activeCard && parseInt(activeCard.dataset.itemIndex) === itemIndex) {
            showItemDetails(itemsData[itemIndex]);
        }
    }
}