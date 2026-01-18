// 物品数据结构定义
const itemsData = [
    {
        id: 1,
        name: "钻石",
        icon: "💎",
        locations: [
            {
                name: "钻石矿洞",
                x: 123,
                y: 15,
                z: -456,
                dimension: "overworld",
                jumpUrl: "https://map.example.com/?x=123&y=15&z=-456"
            },
            {
                name: "废弃矿井",
                x: -789,
                y: 22,
                z: 321,
                dimension: "overworld",
                jumpUrl: "https://map.example.com/?x=-789&y=22&z=321"
            }
        ]
    },
    {
        id: 2,
        name: "下界合金锭",
        icon: "⚒️",
        locations: [
            {
                name: "下界堡垒",
                x: 456,
                y: 65,
                z: 789,
                dimension: "nether",
                jumpUrl: "https://map.example.com/?x=456&y=65&z=789&dim=nether"
            }
        ]
    },
    {
        id: 3,
        name: "末影珍珠",
        icon: "🌀",
        locations: [
            {
                name: "末地城",
                x: -123,
                y: 90,
                z: -789,
                dimension: "end",
                jumpUrl: "https://map.example.com/?x=-123&y=90&z=-789&dim=end"
            },
            {
                name: "末影人农场",
                x: 789,
                y: 120,
                z: 456,
                dimension: "overworld",
                jumpUrl: "https://map.example.com/?x=789&y=120&z=456"
            }
        ]
    },
    {
        id: 4,
        name: "附魔金苹果",
        icon: "🍎",
        locations: [
            {
                name: "末地船",
                x: 321,
                y: 95,
                z: -321,
                dimension: "end",
                jumpUrl: "https://map.example.com/?x=321&y=95&z=-321&dim=end"
            }
        ]
    },
    {
        id: 5,
        name: "龙蛋",
        icon: "🐉",
        locations: [
            {
                name: "末地折跃门",
                x: 0,
                y: 60,
                z: 0,
                dimension: "end",
                jumpUrl: "https://map.example.com/?x=0&y=60&z=0&dim=end"
            }
        ]
    },
    {
        id: 6,
        name: "海晶灯",
        icon: "💡",
        locations: [
            {
                name: "海底神殿",
                x: -456,
                y: 32,
                z: 123,
                dimension: "overworld",
                jumpUrl: "https://map.example.com/?x=-456&y=32&z=123"
            }
        ]
    },
    {
        id: 7,
        name: "鞘翅",
        icon: "🦋",
        locations: [
            {
                name: "末地船",
                x: 654,
                y: 92,
                z: -654,
                dimension: "end",
                jumpUrl: "https://map.example.com/?x=654&y=92&z=-654&dim=end"
            }
        ]
    },
    {
        id: 8,
        name: "远古残骸",
        icon: "⛏️",
        locations: [
            {
                name: "下界熔岩湖",
                x: 789,
                y: 15,
                z: -123,
                dimension: "nether",
                jumpUrl: "https://map.example.com/?x=789&y=15&z=-123&dim=nether"
            },
            {
                name: "下界堡垒附近",
                x: -321,
                y: 20,
                z: 456,
                dimension: "nether",
                jumpUrl: "https://map.example.com/?x=-321&y=20&z=456&dim=nether"
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
    
    itemsData.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        itemCard.dataset.itemId = item.id;
        
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
                <a href="${location.jumpUrl}" class="jump-button" target="_blank">原型链接</a>
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
function removeItem(itemId) {
    const index = itemsData.findIndex(item => item.id === itemId);
    if (index !== -1) {
        itemsData.splice(index, 1);
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
function updateItem(itemId, updatedData) {
    const index = itemsData.findIndex(item => item.id === itemId);
    if (index !== -1) {
        itemsData[index] = { ...itemsData[index], ...updatedData };
        generateItemsList();
        // 如果当前显示的是更新的物品，重新显示详情
        const activeCard = document.querySelector(`.item-card.active`);
        if (activeCard && parseInt(activeCard.dataset.itemId) === itemId) {
            showItemDetails(itemsData[index]);
        }
    }
}