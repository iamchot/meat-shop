import React, { useState } from 'react';
import { ShoppingCart, Phone, MapPin, Clock, Star, Menu, X, CheckCircle, Truck, ShieldCheck, ChevronRight, Facebook, Instagram } from 'lucide-react';

const MeatShopWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'ทั้งหมด' },
    { id: 'beef', name: 'เนื้อวัว' },
    { id: 'pork', name: 'เนื้อหมู' },
    { id: 'chicken', name: 'เนื้อไก่' },
    { id: 'processed', name: 'เนื้อแปรรูป' },
  ];

  const products = [
    { id: 1, name: 'เนื้อริบอายพรีเมียม', category: 'beef', price: '890 / กก.', image: 'https://placehold.co/400x300/800000/FFF?text=Ribeye+Premium', desc: 'เนื้อลายสวย นุ่ม ละลายในปาก เหมาะสำหรับสเต๊ก' },
    { id: 2, name: 'เนื้อสันนอก (Sirloin)', category: 'beef', price: '650 / กก.', image: 'https://placehold.co/400x300/800000/FFF?text=Sirloin', desc: 'เนื้อนุ่มติดมันเล็กน้อย ย่างหอมๆ' },
    { id: 3, name: 'หมูสามชั้นสไลด์', category: 'pork', price: '220 / กก.', image: 'https://placehold.co/400x300/e6a6a6/333?text=Pork+Belly', desc: 'สไลด์บางกำลังดี เหมาะสำหรับชาบู ปิ้งย่าง' },
    { id: 4, name: 'สันคอหมูคุโรบุตะ', category: 'pork', price: '350 / กก.', image: 'https://placehold.co/400x300/e6a6a6/333?text=Kurobuta+Neck', desc: 'เนื้อนุ่ม ชุ่มฉ่ำ รสชาติเข้มข้น' },
    { id: 5, name: 'อกไก่ลอกหนัง', category: 'chicken', price: '95 / กก.', image: 'https://placehold.co/400x300/f5deb3/333?text=Chicken+Breast', desc: 'โปรตีนเน้นๆ สะอาด สดใหม่ทุกวัน' },
    { id: 6, name: 'ไส้กรอกรมควัน', category: 'processed', price: '150 / แพ็ค', image: 'https://placehold.co/400x300/b22222/FFF?text=Sausage', desc: 'หนังกรอบ เนื้อแน่น หอมกลิ่นรมควัน' },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">M</div>
                <span className="font-bold text-xl text-red-800">MEAT MARKET</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-red-700 font-medium">หน้าแรก</a>
              <a href="#products" className="text-gray-600 hover:text-red-700 font-medium">สินค้าของเรา</a>
              <a href="#about" className="text-gray-600 hover:text-red-700 font-medium">เกี่ยวกับเรา</a>
              <a href="#contact" className="text-gray-600 hover:text-red-700 font-medium">ติดต่อ</a>
              <button className="bg-red-700 text-white px-5 py-2 rounded-full hover:bg-red-800 transition flex items-center gap-2">
                <Phone size={18} /> โทรสั่งเลย
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-red-700 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-2">
             <a href="#home" className="block px-4 py-3 text-gray-700 hover:bg-red-50" onClick={toggleMenu}>หน้าแรก</a>
             <a href="#products" className="block px-4 py-3 text-gray-700 hover:bg-red-50" onClick={toggleMenu}>สินค้าของเรา</a>
             <a href="#about" className="block px-4 py-3 text-gray-700 hover:bg-red-50" onClick={toggleMenu}>เกี่ยวกับเรา</a>
             <a href="#contact" className="block px-4 py-3 text-gray-700 hover:bg-red-50" onClick={toggleMenu}>ติดต่อ</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-red-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            เนื้อสด คุณภาพพรีเมียม <br/> ส่งตรงถึงครัวคุณ
          </h1>
          <p className="text-xl md:text-2xl text-red-100 mb-10 max-w-2xl mx-auto">
            คัดสรรเนื้อวัว เนื้อหมู และเนื้อไก่ เกรดดีที่สุด สะอาด ปลอดภัย สดใหม่ทุกวัน เพื่อมื้อพิเศษของครอบครัว
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="bg-white text-red-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              ดูรายการสินค้า
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition">
              วิธีการสั่งซื้อ
            </a>
          </div>
        </div>
      </section>

      {/* Features / USP */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-red-50 rounded-2xl">
              <div className="w-16 h-16 bg-red-100 text-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">สดใหม่ทุกวัน</h3>
              <p className="text-gray-600">รับประกันความสด ตัดแต่งใหม่ทุกออเดอร์ ไม่มีการแช่แข็งค้างสต็อกนาน</p>
            </div>
            <div className="p-6 bg-red-50 rounded-2xl">
              <div className="w-16 h-16 bg-red-100 text-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">มาตรฐานความสะอาด</h3>
              <p className="text-gray-600">กระบวนการผลิตถูกสุขอนามัย ปลอดภัย ไร้สารเร่งเนื้อแดง</p>
            </div>
            <div className="p-6 bg-red-50 rounded-2xl">
              <div className="w-16 h-16 bg-red-100 text-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">จัดส่งรถห้องเย็น</h3>
              <p className="text-gray-600">ส่งถึงหน้าบ้านด้วยรถควบคุมอุณหภูมิ เพื่อรักษาคุณภาพเนื้อให้ดีที่สุด</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">สินค้าแนะนำ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">เลือกช้อปเนื้อสัตว์คุณภาพที่เราคัดสรรมาให้คุณ แยกตามประเภทเพื่อความสะดวก</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-red-700 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden group border border-gray-100">
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                   <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-red-700 shadow-sm">
                    {categories.find(c => c.id === product.category)?.name}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-red-700">{product.price}</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition">
                      <ShoppingCart size={16} /> สั่งซื้อ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="text-red-700 font-bold border-b-2 border-red-700 hover:text-red-900 transition pb-1">
              ดูสินค้าทั้งหมด
            </button>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">วิธีการสั่งซื้อที่ง่ายแสนง่าย</h2>
              <p className="text-red-100 mb-10 text-lg">ไม่ต้องยุ่งยากกับการสมัครสมาชิก เพียงแค่แอดไลน์ แจ้งรายการ แล้วรอรับของได้เลย</p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white text-red-900 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">เลือกสินค้า</h4>
                    <p className="text-red-200">ดูรายการสินค้าผ่านเว็บไซต์ หรือสอบถามแอดมิน</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white text-red-900 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">ทักแชท / โทรสั่ง</h4>
                    <p className="text-red-200">แจ้งรายการสินค้าที่ต้องการผ่าน Line หรือโทรศัพท์</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white text-red-900 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">ชำระเงิน & รอรับของ</h4>
                    <p className="text-red-200">โอนชำระเงิน และรอรับสินค้าที่จัดส่งด้วยรถห้องเย็น</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-gray-800 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-red-700">สอบถาม / สั่งซื้อทันที</h3>
              <div className="space-y-4">
                <button className="w-full bg-[#06C755] hover:bg-[#05b54d] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition transform hover:scale-105">
                  <span className="bg-white text-[#06C755] p-1 rounded font-bold text-xs">LINE</span> แอดไลน์สั่งซื้อ
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition">
                  <Phone size={20} /> 089-123-4567
                </button>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
                <p>เปิดทำการทุกวัน: 08:00 - 18:00 น.</p>
                <p className="mt-2">จัดส่งรอบ กทม. ภายใน 2 ชม. / ตจว. 1-2 วัน</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">เสียงจากลูกค้าของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex justify-center text-yellow-400 mb-4 gap-1">
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                </div>
                <p className="text-gray-600 mb-6 italic">"เนื้อคุณภาพดีมากจริงๆ ค่ะ สั่งมาทำสเต็กที่บ้าน เนื้อนุ่มมาก แพ็คเกจจิ้งสะอาด ส่งไวมาก ไว้จะอุดหนุนอีกแน่นอนค่ะ"</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                    <img src={`https://placehold.co/100x100?text=U${i}`} alt="User" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm">คุณลูกค้าประจำ {i}</p>
                    <p className="text-xs text-gray-500">แม่บ้าน</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Story */}
      <section id="about" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">เกี่ยวกับ MEAT MARKET</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              เราเริ่มต้นจากการเป็นเขียงเนื้อเล็กๆ ในตลาดสด ที่ใส่ใจในทุกรายละเอียดการคัดสรร 
              วันนี้เราขยายสู่โลกออนไลน์ด้วยปณิธานเดิม คือการส่งมอบเนื้อสัตว์ที่ "สะอาด ปลอดภัย และจริงใจ" 
              สู่มือลูกค้าทุกคน เราเชื่อว่าอาหารที่ดี เริ่มต้นจากวัตถุดิบที่ดี
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t border-gray-700 pt-8">
              <div>
                <h4 className="text-3xl font-bold text-red-500 mb-1">10+</h4>
                <p className="text-sm text-gray-400">ปีแห่งประสบการณ์</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-red-500 mb-1">500+</h4>
                <p className="text-sm text-gray-400">ลูกค้าประจำ</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-red-500 mb-1">100%</h4>
                <p className="text-sm text-gray-400">รับประกันคุณภาพ</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-red-500 mb-1">24h</h4>
                <p className="text-sm text-gray-400">พร้อมรับออเดอร์</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-gray-100 border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">M</div>
                <span className="font-bold text-xl text-gray-900">MEAT MARKET</span>
              </div>
              <p className="text-gray-600 mb-6">ร้านจำหน่ายเนื้อสัตว์คุณภาพเยี่ยม สดใหม่ทุกวัน ส่งตรงถึงหน้าบ้านคุณ</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-blue-600 shadow-sm transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-pink-600 shadow-sm transition">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">เมนูลัด</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-600 hover:text-red-700">หน้าแรก</a></li>
                <li><a href="#products" className="text-gray-600 hover:text-red-700">สินค้าของเรา</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-red-700">เรื่องราวของร้าน</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-red-700">ติดต่อเรา</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">หมวดหมู่สินค้า</h4>
              <ul className="space-y-3">
                <li><button onClick={() => setActiveCategory('beef')} className="text-gray-600 hover:text-red-700 text-left">เนื้อวัวพรีเมียม</button></li>
                <li><button onClick={() => setActiveCategory('pork')} className="text-gray-600 hover:text-red-700 text-left">เนื้อหมูอนามัย</button></li>
                <li><button onClick={() => setActiveCategory('chicken')} className="text-gray-600 hover:text-red-700 text-left">เนื้อไก่สด</button></li>
                <li><button onClick={() => setActiveCategory('processed')} className="text-gray-600 hover:text-red-700 text-left">อาหารแปรรูป</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">ติดต่อเรา</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <MapPin size={20} className="text-red-700 flex-shrink-0 mt-1" />
                  <span>123 ถนนตัวอย่าง แขวงตัวอย่าง เขตตัวอย่าง กรุงเทพฯ 10XXX</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Phone size={20} className="text-red-700 flex-shrink-0" />
                  <span>089-123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Clock size={20} className="text-red-700 flex-shrink-0" />
                  <span>ทุกวัน 08:00 - 18:00 น.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
            &copy; 2024 Meat Market Online. All rights reserved. Designed for Demo.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MeatShopWebsite;