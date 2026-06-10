export interface Product {
  id: string;
  series: 'Y' | 'Z';
  name: string;
  kv: '10KV' | '35KV';
  price: number;
  description: string;
  features: string[];
  specs: Record<string, string>;
  image: string; // placeholder gradient
}

export const products: Product[] = [
  {
    id: 'y-10kv',
    series: 'Y',
    name: 'Y系列 对地电容电流检测设备',
    kv: '10KV',
    price: 15800,
    description: 'Y系列10KV对地电容电流检测设备，采用高精度传感技术，适用于10KV配电网的电容电流精确测量，为电网安全运行提供可靠保障。',
    features: [
      '高精度电容电流测量，误差 ≤ ±1%',
      '自适应补偿算法，抗干扰能力强',
      '7寸彩色触摸屏，操作简便',
      '支持数据存储与USB导出',
      '内置过压保护，安全可靠',
      'IP65防护等级，适应恶劣环境',
    ],
    specs: {
      '额定电压': '10KV',
      '测量范围': '0～500A',
      '测量精度': '±1%',
      '工作温度': '-25℃～+65℃',
      '防护等级': 'IP65',
      '重量': '约12kg',
    },
    image: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
  },
  {
    id: 'y-35kv',
    series: 'Y',
    name: 'Y系列 对地电容电流检测设备',
    kv: '35KV',
    price: 1980,
    description: 'Y系列35KV对地电容电流检测设备，专为35KV高压配电网设计，具备超宽测量范围与卓越的稳定性，是高压电网检测的首选方案。',
    features: [
      '高压专用传感模块，35KV等级绝缘',
      '宽范围电容电流测量，0～800A',
      '智能温补系统，全温度范围精准',
      '无线数据传输，支持远程监控',
      '多重安全联锁，杜绝操作风险',
      '模块化设计，维护便捷',
    ],
    specs: {
      '额定电压': '35KV',
      '测量范围': '0～800A',
      '测量精度': '±1%',
      '工作温度': '-30℃～+70℃',
      '防护等级': 'IP66',
      '重量': '约18kg',
    },
    image: 'linear-gradient(135deg, #B91C1C 0%, #7F1D1D 100%)',
  },
  {
    id: 'z-10kv',
    series: 'Z',
    name: 'Z系列 对地电容电流检测设备',
    kv: '10KV',
    price: 13800,
    description: 'Z系列10KV对地电容电流检测设备，经济实用型方案，在保证测量精度的前提下大幅降低采购成本，适用于预算敏感型项目。',
    features: [
      '性价比之选，降低采购成本',
      '核心测量性能不打折，精度 ±1.5%',
      '紧凑轻量化设计，便于携带',
      'LED高清显示屏，阳光下清晰可见',
      '一键自动校准，零门槛操作',
      '长续航锂电池，连续工作8小时',
    ],
    specs: {
      '额定电压': '10KV',
      '测量范围': '0～400A',
      '测量精度': '±1.5%',
      '工作温度': '-20℃～+60℃',
      '防护等级': 'IP54',
      '重量': '约8kg',
    },
    image: 'linear-gradient(135deg, #1E3A5F 0%, #15294A 100%)',
  },
  {
    id: 'z-35kv',
    series: 'Z',
    name: 'Z系列 对地电容电流检测设备',
    kv: '35KV',
    price: 17800,
    description: 'Z系列35KV对地电容电流检测设备，经济型高压检测方案，融合Z系列的成本优势与35KV高压适应能力，是中小型变电站的理想选择。',
    features: [
      '经济型高压方案，总拥有成本低',
      '35KV全电压等级覆盖',
      '测量范围 0～600A',
      '智能诊断功能，自动识别异常',
      '抗震防摔设计，野外作业无忧',
      '3年超长质保，售后无忧',
    ],
    specs: {
      '额定电压': '35KV',
      '测量范围': '0～600A',
      '测量精度': '±1.5%',
      '工作温度': '-20℃～+65℃',
      '防护等级': 'IP55',
      '重量': '约14kg',
    },
    image: 'linear-gradient(135deg, #1E40AF 0%, #1E3A5F 100%)',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsBySeries(series: 'Y' | 'Z'): Product[] {
  return products.filter((p) => p.series === series);
}
