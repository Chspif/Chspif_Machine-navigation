// 物品数据结构定义
const itemsData = [
    {
        name: "全物品",
        icon: "",
        locations: [
            {
                name: "全物品",
                x: 90,
                y: 49,
                z: 2,
                dimension: "end"
            },

            
        ]
    },
    {
        name: "煤炭",
        icon: "",
        locations: [
            {
                name: "煤炭",
                x: -123,
                y: 180,
                z: 76,
                dimension: "nether"
            },

            
        ]
    },
    {
        name: "金锭与猪灵交易所",
        icon: "",
        locations: [
            {
                name: "80w猪人塔",
                x: 446,
                y: 138,
                z: 319,
                dimension: "nether",
               
            },
            {
                name: "小小猪人塔",
                x: 137,
                y: 244,
                z: 307,
                dimension: "nether",
               
            },
            {
                name: "大叔猪人塔",
                x: -822,
                y: 128,
                z: 761,
                dimension: "nether",
                
            },
            {
                name: "猪灵交易",
                x: 446,
                y: 138,
                z: 319,
                dimension: "nether",
                
            }
        ]
    },
    {
       
        name: "食物",
        icon: "",
        locations: [
            {
                name: "猪肉农场",
                x: -581,
                y: 128,
                z: 791,
                dimension: "nether",
                
            }
    
        ]
    },
    {
        
        name: "冰",
        icon: "",
        locations: [
            {
                name: "刷冰机",
                x: -128,
                y: 128,
                z: -55,
                dimension: "nether",
              
            }
        ]
    },
    {
        
        name: "重力方块",
        icon: "",
        locations: [
            {
                name: "刷沙机",
                x: 133,
                y: 128,
                z: 222,
                dimension: "nether",
                
            }
        ]
    },
    {
        
        name: "海晶灯，海晶石",
        icon: "💡",
        locations: [
            {
                name: "鱼塔",
                x: -571,
                y: 128,
                z: 611,
                dimension: "nether",
                
            }
        ]
    },
    {
        
        name: "火药/绿宝石/不死图腾/红石/粘液块",
        icon: "",
        locations: [
            {
                name: "掠夺塔",
                x: -591,
                y: 128,
                z: 622,
                dimension: "nether",
               
            },
               {
                name: "沼泽刷怪塔1",
                x: -754,
                y: 128,
                z: 595,
                dimension: "nether",
               
            },
               {
                name: "沼泽刷怪塔2",
                x: 770,
                y: 128,
                z: 425,
                dimension: "nether",
               
            }
        ]
    },
    {
        
        name: "骨块",
        icon: "",
        locations: [
            {
                name: "船吸刷怪塔",
                x: 564,
                y: 128,
                z: 8,
                dimension: "nether",
            
            },
            {
                name:"凋零骷髅塔",
                x: -123,
                y: 180,
                z: 76,
                dimension: "nether",
            }
        ]
    },
    {
        
        name: "下届之星",
        icon: "",
        locations: [
            {
                name: "杀凋机",
                x: -99,
                y: 123,
                z: 22,
                dimension: "nether",
            
            }
           
        ]
    },
     {
        
        name: "蛙鸣灯",
        icon: "",
        locations: [
            {
                name: "蛙鸣灯农场",
                x: -12,
                y: 128,
                z: -142,
                dimension: "nether",
            
            }
        ]
    },
    {
        
        name: "岩浆膏",
        icon: "",
        locations: [
            {
                name: "岩浆膏农场",
                x: -749,
                y: 128,
                z: 282,
                dimension: "nether",
            
            }
            
        ]
    },
    {
        
        name: "伪和平",
        icon: "",
        locations: [
            {
                name: "主世界伪和平",
                x: -1292,
                y: 128,
                z: 562,
                dimension: "nether",
            
            },
            {
                name:"下界伪和平",
                x: "?",
                y: "?",
                z: "?",
                dimension: "nether",
            }
        ]
    },
    {
        
        name: "唱片",
        icon: "",
        locations: [
            {
                name: "唱片农场",
                x: 20,
                y: 128,
                z: -594,
                dimension: "nether",
            
            }
           
        ]
    },
     {
        
        name: "木头/石头",
        icon: "",
        locations: [
            {
                name: "树场",
                x: -111,
                y: 66,
                z: -419,
                dimension: "end",
            
            },
            {
                name:"刷石机",
                x: -111,
                y: 66,
                z: -419,
                dimension: "end",
            }
        ]
    },
    {
        
        name: "熔炉",
        icon: "",
        locations: [
            {
                name: "320熔炉组",
                x: 76,
                y: 149,
                z: -231,
                dimension: "end",
            
            },
            {
                name:"凋零骷髅塔",
                x: -123,
                y: 180,
                z: 76,
                dimension: "end",
            }
        ]
    },
     {
        
        name: "凋零玫瑰",
        icon: "",
        locations: [
            {
                name: "凋零玫瑰农场",
                x: 587,
                y: 59,
                z: 789,
                dimension: "end",
            
            }
           
        ]
    },
    {
        
        name: "装备/潜影壳",
        icon: "",
        locations: [
            {
                name: "村民交易",
                x: -477,
                y: 57,
                z: 0,
                dimension: "end",
            
            },
            {
                name: "贝厂",
                x: -435,
                y: 159,
                z: -883,
                dimension: "end",
            
            }
          
        ]
    },
    {
        
        name: "山羊角",
        icon: "",
        locations: [
            {
                name: "山羊角农场",
                x: -138,
                y: 66,
                z: -580,
                dimension: "end",
            
            },
          
          
        ]
    },
       {
        
        name: "花",
        icon: "",
        locations: [
            {
                name: "全花种刷花机",
                x: 3047,
                y: 127,
                z: 4520,
                dimension: "overworld",
            
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