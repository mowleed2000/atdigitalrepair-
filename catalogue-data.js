// Official AT Digital Repair Centre UK in-store product catalogue
const productsData = [
  {
    "name": "Dell Latitude 7320 Touch",
    "category": "Laptops & Computers",
    "brand": "Dell",
    "price": "Enquire for price",
    "image": "catalogue-images/Dell Latitude 7320 Touch.webp",
    "variants": [
      "Touchscreen",
      "Intel Core i5/i7",
      "16GB RAM",
      "NVMe SSD",
      "Grade A Refurbished"
    ],
    "models": [],
    "flavors": [],
    "description": "Dell Latitude 7320 Touchscreen ultra-portable business laptop with Full HD touch display, high-speed NVMe SSD, and all-day battery life."
  },
  {
    "name": "Lenovo Yoga Slim 6 14IRH8",
    "category": "Laptops & Computers",
    "brand": "Lenovo",
    "price": "Enquire for price",
    "image": "catalogue-images/Lenovo Yoga Slim 6 14IRH8.webp",
    "variants": [
      "14-inch OLED",
      "Intel 13th Gen Core",
      "16GB LPDDR5",
      "512GB SSD",
      "Aluminium Chassis"
    ],
    "models": [],
    "flavors": [],
    "description": "Lenovo Yoga Slim 6 14IRH8 premium ultra-slim laptop featuring stunning high-resolution display, 13th Gen Intel processor, and lightweight design."
  },
  {
    "name": "Apple MacBook Air 13-inch (A1932)",
    "category": "Laptops & Computers",
    "brand": "Apple",
    "price": "Enquire for price",
    "image": "catalogue-images/Apple MacBook Air A1932 (2019).webp",
    "variants": [
      "13.3-inch Retina Display",
      "Intel Core i5",
      "8GB RAM",
      "Touch ID",
      "Space Grey"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple MacBook Air 13-inch (A1932) with True Tone Retina display, Touch ID, dual Thunderbolt 3 ports, and sleek lightweight unibody."
  },
  {
    "name": "Microsoft Surface Book 2",
    "category": "Laptops & Computers",
    "brand": "Microsoft",
    "price": "Enquire for price",
    "image": "catalogue-images/Microsoft Surface Book 2.jpg",
    "variants": [
      "Detachable 2-in-1 PixelSense",
      "Intel Core i7",
      "16GB RAM",
      "Dedicated Graphics",
      "Silver"
    ],
    "models": [],
    "flavors": [],
    "description": "Microsoft Surface Book 2 versatile 2-in-1 laptop and tablet with detachable high-res PixelSense touchscreen, robust hinge, and powerhouse performance."
  },
  {
    "name": "Apple iMac 21.5-inch 4K Retina (A2116)",
    "category": "Laptops & Computers",
    "brand": "Apple",
    "price": "Enquire for price",
    "image": "catalogue-images/Apple iMac A2116 (2019 Retina).webp",
    "variants": [
      "21.5-inch 4K Retina Display",
      "Intel Quad-Core",
      "SSD Upgradeable",
      "Silver"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple iMac 21.5-inch (A2116) featuring a breathtaking 4K Retina display, ultra-thin profile, crystal-clear FaceTime HD camera, and pristine audio."
  },
  {
    "name": "AMD Ryzen 5 5000 Series Processor",
    "category": "PC Components & Hardware",
    "brand": "AMD",
    "price": "Enquire for price",
    "image": "catalogue-images/AMD Ryzen 5 5000 Series Processor.webp",
    "variants": [
      "Socket AM4",
      "6 Cores / 12 Threads",
      "Up to 4.6GHz Boost",
      "PCIe 4.0 Ready"
    ],
    "models": [],
    "flavors": [],
    "description": "AMD Ryzen 5 5000 series desktop processor delivering powerhouse gaming, multitasking, and creative productivity performance."
  },
  {
    "name": "Gigabyte P750BS 750W Power Supply",
    "category": "PC Components & Hardware",
    "brand": "Gigabyte",
    "price": "Enquire for price",
    "image": "catalogue-images/Gigabyte P750BS.jpg",
    "variants": [
      "750W",
      "80 PLUS Bronze Certified",
      "120mm Hydraulic Bearing Fan",
      "Single +12V Rail"
    ],
    "models": [],
    "flavors": [],
    "description": "Gigabyte P750BS 750W power supply unit built with reliable capacitors, silent cooling, and full electrical protection for gaming rigs."
  },
  {
    "name": "EVO Labs Professional Power Supply",
    "category": "PC Components & Hardware",
    "brand": "EVO Labs",
    "price": "Enquire for price",
    "image": "catalogue-images/EVO Labs Professional Power Supply.jpg",
    "variants": [
      "ATX PSU",
      "Silent Fan",
      "High Efficiency",
      "Multiple SATA & PCIe Connectors"
    ],
    "models": [],
    "flavors": [],
    "description": "EVO Labs professional desktop power supply unit designed for stable system power, low acoustic noise, and dependable longevity."
  },
  {
    "name": "MAIWO 2.5 SATA HDD / SSD Enclosure",
    "category": "PC Components & Hardware",
    "brand": "MAIWO",
    "price": "Enquire for price",
    "image": "catalogue-images/MAIWO Generic 2.5 SATA HDD.jpg",
    "variants": [
      "USB 3.0 High Speed",
      "Tool-Free Installation",
      "Fits 2.5 SATA HDD / SSD",
      "Up to 5Gbps"
    ],
    "models": [],
    "flavors": [],
    "description": "MAIWO 2.5-inch SATA hard drive and SSD external enclosure for instant data recovery, drive cloning, and portable external storage."
  },
  {
    "name": "TP-Link Gigabit PCI Express Network Adapter",
    "category": "PC Components & Hardware",
    "brand": "TP-Link",
    "price": "Enquire for price",
    "image": "catalogue-images/TP-Link Gigabit PCI Express Network Adapter.jpg",
    "variants": [
      "10/100/1000Mbps",
      "PCIe x1 Interface",
      "Low-Profile Bracket Included",
      "Wake-on-LAN"
    ],
    "models": [],
    "flavors": [],
    "description": "TP-Link TG-3468 Gigabit PCIe network adapter providing ultra-fast wired Ethernet connectivity for desktop PCs."
  },
  {
    "name": "Marvo Scorpion Atlas 60 FN-41 Laptop Cooler",
    "category": "PC Components & Hardware",
    "brand": "Marvo",
    "price": "Enquire for price",
    "image": "catalogue-images/Marvo Scorpion Atlas 60 FN-41.jpg",
    "variants": [
      "Multi-Fan Cooling",
      "Adjustable Angle Stand",
      "Blue LED Lighting",
      "Dual USB Pass-Through"
    ],
    "models": [],
    "flavors": [],
    "description": "Marvo Scorpion Atlas 60 gaming laptop cooling pad with high-airflow fans, ergonomic height angles, and USB pass-through."
  },
  {
    "name": "TP-Link AV600 Powerline Starter Kit",
    "category": "Tech Accessories",
    "brand": "TP-Link",
    "price": "Enquire for price",
    "image": "catalogue-images/TP-Link AV600.jpg",
    "variants": [
      "Up to 600Mbps",
      "Plug and Play",
      "HomePlug AV Standard",
      "Twin Pack"
    ],
    "models": [],
    "flavors": [],
    "description": "TP-Link AV600 powerline starter kit turns existing electrical wiring into a high-speed wired internet network without running cables."
  },
  {
    "name": "TP-Link TD-W8961N 300Mbps Wireless Modem Router",
    "category": "Tech Accessories",
    "brand": "TP-Link",
    "price": "Enquire for price",
    "image": "catalogue-images/TP-Link TD-W8961N.jpg",
    "variants": [
      "300Mbps Wi-Fi",
      "4 Fast Ethernet Ports",
      "2x 5dBi Antennas",
      "ADSL2+"
    ],
    "models": [],
    "flavors": [],
    "description": "TP-Link TD-W8961N all-in-one ADSL2+ modem router providing reliable Wi-Fi coverage and wired connectivity for home and office."
  },
  {
    "name": "Apple 61W USB-C Power Adapter",
    "category": "Tech Accessories",
    "brand": "Apple",
    "price": "Enquire for price",
    "image": "catalogue-images/Apple 61 W USB-C Power Adapter.jpg",
    "variants": [
      "61W Fast Charge",
      "USB-C Port",
      "MacBook Pro / Air Compatible",
      "Genuine Quality"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple 61W USB-C power adapter delivering fast, efficient charging at home, in the office, or on the go for MacBook and USB-C devices."
  },
  {
    "name": "Yesido 90W Universal Fast Desktop Charger",
    "category": "Tech Accessories",
    "brand": "Yesido",
    "price": "Enquire for price",
    "image": "catalogue-images/Yesido 90 W Universal.jpg",
    "variants": [
      "90W Max Output",
      "Multi-Port GaN Tech",
      "Fast Charge Compatible",
      "Smart Power Delivery"
    ],
    "models": [],
    "flavors": [],
    "description": "Yesido 90W universal high-speed desktop fast charger supporting multiple laptops, smartphones, and tablets simultaneously."
  },
  {
    "name": "M-TK TG7211 Wired USB Keyboard",
    "category": "Tech Accessories",
    "brand": "M-TK",
    "price": "Enquire for price",
    "image": "catalogue-images/M-TK TG7211 Wired USB Keyboard.jpg",
    "variants": [
      "Full Size UK Layout",
      "Spill Resistant",
      "Plug & Play USB",
      "Silent Keystroke"
    ],
    "models": [],
    "flavors": [],
    "description": "M-TK TG7211 durable full-sized wired USB keyboard with standard UK layout and comfortable silent tactile keys."
  },
  {
    "name": "Huawei P30 Pro",
    "category": "Smartphones",
    "brand": "Huawei",
    "price": "Enquire for price",
    "image": "catalogue-images/Huawei P30 Pro.webp",
    "variants": [
      "128GB / 256GB",
      "Unlocked",
      "Leica Quad Camera",
      "Breathing Crystal / Black",
      "OLED Curved Display"
    ],
    "models": [],
    "flavors": [],
    "description": "Huawei P30 Pro flagship smartphone with Leica quad-camera system, 50x periscope zoom, Kirin 980, and SuperCharge."
  },
  {
    "name": "Samsung Galaxy S22 5G",
    "category": "Smartphones",
    "brand": "Samsung",
    "price": "Enquire for price",
    "image": "catalogue-images/Samsung Galaxy S22.webp",
    "variants": [
      "128GB / 256GB",
      "Unlocked",
      "Dynamic AMOLED 2X 120Hz",
      "Phantom Black / Green",
      "Grade A"
    ],
    "models": [],
    "flavors": [],
    "description": "Samsung Galaxy S22 5G with Pro-grade 50MP triple camera, Armor Aluminum frame, Nightography, and fast wireless charging."
  },
  {
    "name": "Samsung Galaxy S22 Ultra 5G",
    "category": "Smartphones",
    "brand": "Samsung",
    "price": "Enquire for price",
    "image": "catalogue-images/Samsung Galaxy S22 Ultra.webp",
    "variants": [
      "128GB / 256GB / 512GB",
      "Unlocked",
      "Embedded S-Pen",
      "108MP Quad Camera",
      "Phantom Black / Burgundy",
      "Grade A"
    ],
    "models": [],
    "flavors": [],
    "description": "Samsung Galaxy S22 Ultra 5G featuring built-in S Pen, 100x Space Zoom camera system, 6.8-inch QHD+ 120Hz AMOLED display, and 5000mAh battery."
  },
  {
    "name": "Galaxy S23 Ultra",
    "category": "Smartphones",
    "brand": "Samsung",
    "price": "Enquire for price",
    "image": "catalogue-images/Samsung Galaxy S23 Ultra transparent png.jpg",
    "variants": [
      "Display unit — no price tag visible",
      "please confirm"
    ],
    "models": [],
    "flavors": [],
    "description": "Samsung Galaxy S23 Ultra — Display unit — no price tag visible, please confirm"
  },
  {
    "name": "iPhone 7 Plus",
    "category": "Smartphones",
    "brand": "Apple",
    "price": "£130 (was £170)",
    "image": "catalogue-images/iPhone 7 Plus black.png",
    "variants": [
      "128GB",
      "Unlocked",
      "Grade A",
      "Black",
      "£130 (was £170)"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple iPhone 7 Plus — 128GB, Unlocked, Grade A"
  },
  {
    "name": "iPhone 8 Plus",
    "category": "Smartphones",
    "brand": "Apple",
    "price": "£150 (was £190)",
    "image": "catalogue-images/Apple iPhone 8 Plus space grey back transparent png.jpg",
    "variants": [
      "64GB",
      "Unlocked",
      "Grade A",
      "Black",
      "£150 (was £190)"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple iPhone 8 Plus — 64GB, Unlocked, Grade A"
  },
  {
    "name": "iPhone 13 Pro Max",
    "category": "Smartphones",
    "brand": "Apple",
    "price": "From £320",
    "image": "catalogue-images/iPhone 13 Pro Max.jpg",
    "variants": [
      "2 Units in Stock",
      "128GB",
      "Unlocked",
      "Grade B",
      "Blue",
      "£410 (was £440)",
      "Gold",
      "£320 (was £390)"
    ],
    "models": [
      "Blue • 128GB, Unlocked, Grade B • £410 (was £440)",
      "Gold • 128GB, Unlocked, Grade B • £320 (was £390)"
    ],
    "flavors": [],
    "description": "Apple iPhone 13 Pro Max. 2 units available in stock with multiple color & condition options: Blue • 128GB, Unlocked, Grade B • £410 (was £440); Gold • 128GB, Unlocked, Grade B • £320 (was £390)."
  },
  {
    "name": "iPhone XS Max",
    "category": "Smartphones",
    "brand": "Apple",
    "price": "£220 (was £290)",
    "image": "catalogue-images/Apple iPhone XS Max gold back transparent png.jpg",
    "variants": [
      "256GB",
      "Unlocked",
      "Grade A",
      "White",
      "£220 (was £290)"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple iPhone XS Max — 256GB, Unlocked, Grade A"
  },
  {
    "name": "Doro 5516",
    "category": "Smartphones",
    "brand": "Doro",
    "price": "£80 (was £99)",
    "image": "catalogue-images/Doro 5516.webp",
    "variants": [
      "3G",
      "Unlocked",
      "Grade A",
      "Black",
      "£80 (was £99)"
    ],
    "models": [],
    "flavors": [],
    "description": "Doro Doro 5516 — 3G, Unlocked, Grade A"
  },
  {
    "name": "Galaxy Z Flip",
    "category": "Smartphones",
    "brand": "Samsung",
    "price": "£199 (was £249)",
    "image": "catalogue-images/Samsung Galaxy Z Flip black.webp",
    "variants": [
      "128GB",
      "Unlocked",
      "Grade A",
      "Battery Health 100%",
      "Black",
      "£199 (was £249)"
    ],
    "models": [],
    "flavors": [],
    "description": "Samsung Galaxy Z Flip — 128GB, Unlocked, Grade A, Battery Health 100%"
  },
  {
    "name": "Galaxy A07",
    "category": "Smartphones",
    "brand": "Samsung",
    "price": "£129 (was £149)",
    "image": "catalogue-images/Samsung Galaxy A07 retail box transparent png.jpg",
    "variants": [
      "Brand New",
      "64GB",
      "Unlocked",
      "Grade A+",
      "Green",
      "£129 (was £149)"
    ],
    "models": [],
    "flavors": [],
    "description": "Samsung Galaxy A07 — Brand New, 64GB, Unlocked, Grade A+"
  },
  {
    "name": "Galaxy A17 5G",
    "category": "Smartphones",
    "brand": "Samsung",
    "price": "£189 (was £219)",
    "image": "catalogue-images/Samsung Galaxy A17 5G retail box transparent png.jpg",
    "variants": [
      "Brand New",
      "128GB",
      "Unlocked",
      "Grade A+",
      "Black",
      "£189 (was £219)"
    ],
    "models": [],
    "flavors": [],
    "description": "Samsung Galaxy A17 5G — Brand New, 128GB, Unlocked, Grade A+"
  },
  {
    "name": "Galaxy A36 5G",
    "category": "Smartphones",
    "brand": "Samsung",
    "price": "£299 (was £359)",
    "image": "catalogue-images/Samsung Galaxy A36 5G retail box transparent png.jpg",
    "variants": [
      "2 Units in Stock",
      "Brand New",
      "128GB",
      "Unlocked",
      "Grade A",
      "Black",
      "£299 (was £359)",
      "Grade A (2nd unit)"
    ],
    "models": [
      "Black • Brand New, 128GB, Unlocked, Grade A • £299 (was £359)",
      "Black • Brand New, 128GB, Unlocked, Grade A (2nd unit) • £299 (was £359)"
    ],
    "flavors": [],
    "description": "Samsung Galaxy A36 5G. 2 units available in stock with multiple color & condition options: Black • Brand New, 128GB, Unlocked, Grade A • £299 (was £359); Black • Brand New, 128GB, Unlocked, Grade A (2nd unit) • £299 (was £359)."
  },
  {
    "name": "Galaxy A56 5G",
    "category": "Smartphones",
    "brand": "Samsung",
    "price": "£379 (was £429)",
    "image": "catalogue-images/Samsung Galaxy A56 5G retail box transparent png.jpg",
    "variants": [
      "Brand New",
      "128GB",
      "Unlocked",
      "Grade A+",
      "White",
      "£379 (was £429)"
    ],
    "models": [],
    "flavors": [],
    "description": "Samsung Galaxy A56 5G — Brand New, 128GB, Unlocked, Grade A+"
  },
  {
    "name": "iPhone 16 Pro",
    "category": "Smartphones",
    "brand": "Apple",
    "price": "£835 (was £900)",
    "image": "catalogue-images/Apple iPhone 16 Pro black titanium back transparent png.jpg",
    "variants": [
      "512GB",
      "Unlocked",
      "Grade A",
      "Battery Health 88%",
      "Titanium",
      "£835 (was £900)"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple iPhone 16 Pro — 512GB, Unlocked, Grade A, Battery Health 88%"
  },
  {
    "name": "iPhone 14 Pro",
    "category": "Smartphones",
    "brand": "Apple",
    "price": "£390 (was £450)",
    "image": "catalogue-images/Iphone 14 pro.jpg",
    "variants": [
      "128GB",
      "Unlocked",
      "Grade B",
      "Battery Health 85%",
      "Purple",
      "£390 (was £450)"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple iPhone 14 Pro — 128GB, Unlocked, Grade B, Battery Health 85%"
  },
  {
    "name": "iPhone 14",
    "category": "Smartphones",
    "brand": "Apple",
    "price": "£450 (was £480)",
    "image": "catalogue-images/iPhone 14 box transparent png.jpg",
    "variants": [
      "128GB",
      "Unlocked",
      "Grade A",
      "Battery Health 90%",
      "Red",
      "£450 (was £480)"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple iPhone 14 — 128GB, Unlocked, Grade A, Battery Health 90%"
  },
  {
    "name": "iPhone 13",
    "category": "Smartphones",
    "brand": "Apple",
    "price": "From £280",
    "image": "catalogue-images/iPhone 13 128GB.jpg",
    "variants": [
      "2 Units in Stock",
      "128GB",
      "Unlocked",
      "Grade A",
      "Battery Health 89%",
      "Green",
      "£295 (was £355)",
      "Battery Health 90%",
      "White",
      "£280 (was £345)"
    ],
    "models": [
      "Green • 128GB, Unlocked, Grade A, Battery Health 89% • £295 (was £355)",
      "White • 128GB, Unlocked, Grade A, Battery Health 90% • £280 (was £345)"
    ],
    "flavors": [],
    "description": "Apple iPhone 13. 2 units available in stock with multiple color & condition options: Green • 128GB, Unlocked, Grade A, Battery Health 89% • £295 (was £355); White • 128GB, Unlocked, Grade A, Battery Health 90% • £280 (was £345)."
  },
  {
    "name": "iPhone 12 Pro",
    "category": "Smartphones",
    "brand": "Apple",
    "price": "£250 (was £300)",
    "image": "catalogue-images/iPhone 12 Pro.jpg",
    "variants": [
      "64GB",
      "Unlocked",
      "Grade A",
      "Blue",
      "£250 (was £300)"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple iPhone 12 Pro — 64GB, Unlocked, Grade A"
  },
  {
    "name": "iPhone 12",
    "category": "Smartphones",
    "brand": "Apple",
    "price": "£260 (was £290)",
    "image": "catalogue-images/Apple iPhone 12 green back transparent png.jpg",
    "variants": [
      "64GB",
      "Unlocked",
      "Grade A",
      "Blue",
      "£260 (was £290)"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple iPhone 12 — 64GB, Unlocked, Grade A"
  },
  {
    "name": "iPhone 11",
    "category": "Smartphones",
    "brand": "Apple",
    "price": "£220 (was £250)",
    "image": "catalogue-images/Apple iPhone 11 black back transparent png.jpg",
    "variants": [
      "128GB",
      "Unlocked",
      "Grade A",
      "Black",
      "£220 (was £250)"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple iPhone 11 — 128GB, Unlocked, Grade A"
  },
  {
    "name": "iPhone 13 Mini",
    "category": "Smartphones",
    "brand": "Apple",
    "price": "£290 (was £350)",
    "image": "catalogue-images/Apple iPhone 13 mini blue back transparent png.jpg",
    "variants": [
      "128GB",
      "Unlocked",
      "Grade B",
      "White",
      "£290 (was £350)"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple iPhone 13 Mini — 128GB, Unlocked, Grade B"
  },
  {
    "name": "iPhone 12 Mini",
    "category": "Smartphones",
    "brand": "Apple",
    "price": "£250 (was £300)",
    "image": "catalogue-images/Apple iPhone 12 mini blue back transparent png.jpg",
    "variants": [
      "128GB",
      "Unlocked",
      "Grade A",
      "Black",
      "£250 (was £300)"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple iPhone 12 Mini — 128GB, Unlocked, Grade A"
  },
  {
    "name": "iPhone SE 3",
    "category": "Smartphones",
    "brand": "Apple",
    "price": "£195 (was £210)",
    "image": "catalogue-images/iPhone SE 3rd generation black.webp",
    "variants": [
      "64GB",
      "Unlocked",
      "Grade A",
      "Black",
      "£195 (was £210)"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple iPhone SE 3 — 64GB, Unlocked, Grade A"
  },
  {
    "name": "iPhone SE 2",
    "category": "Smartphones",
    "brand": "Apple",
    "price": "£145 (was £170)",
    "image": "catalogue-images/Apple iPhone SE 2020 black back transparent png.jpg",
    "variants": [
      "64GB",
      "Unlocked",
      "Grade A",
      "Black",
      "£145 (was £170)"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple iPhone SE 2 — 64GB, Unlocked, Grade A"
  },
  {
    "name": "iPhone 8",
    "category": "Smartphones",
    "brand": "Apple",
    "price": "£130 (was £165)",
    "image": "catalogue-images/Apple iPhone 8 product red back transparent png.jpg",
    "variants": [
      "64GB",
      "Unlocked",
      "Grade A",
      "Silver",
      "£130 (was £165)"
    ],
    "models": [],
    "flavors": [],
    "description": "Apple iPhone 8 — 64GB, Unlocked, Grade A"
  },
  {
    "name": "Galaxy A14 5G",
    "category": "Smartphones",
    "brand": "Samsung",
    "price": "£120 (was £170)",
    "image": "catalogue-images/Samsung Galaxy A14 retail box transparent png.jpg",
    "variants": [
      "128GB",
      "Unlocked",
      "Grade A",
      "Battery Health 100%",
      "Black",
      "£120 (was £170)"
    ],
    "models": [],
    "flavors": [],
    "description": "Samsung Galaxy A14 5G — 128GB, Unlocked, Grade A, Battery Health 100%"
  },
  {
    "name": "Galaxy A32",
    "category": "Smartphones",
    "brand": "Samsung",
    "price": "£125 (was £180)",
    "image": "catalogue-images/Samsung Galaxy A32 black.webp",
    "variants": [
      "128GB",
      "Unlocked",
      "Grade A",
      "Battery Health 100%",
      "Black",
      "£125 (was £180)"
    ],
    "models": [],
    "flavors": [],
    "description": "Samsung Galaxy A32 — 128GB, Unlocked, Grade A, Battery Health 100%"
  },
  {
    "name": "Vivo X60 5G",
    "category": "Smartphones",
    "brand": "Vivo",
    "price": "£135 (was £175)",
    "image": "catalogue-images/Vivo X60 5G black.jpg",
    "variants": [
      "128GB",
      "Unlocked",
      "Grade B",
      "Battery Health 100%",
      "Black",
      "£135 (was £175)"
    ],
    "models": [],
    "flavors": [],
    "description": "Vivo Vivo X60 5G — 128GB, Unlocked, Grade B, Battery Health 100%"
  },
  {
    "name": "Vivo Y72 5G",
    "category": "Smartphones",
    "brand": "Vivo",
    "price": "£165 (was £195)",
    "image": "catalogue-images/Vivo Y72 5G violet.jpg",
    "variants": [
      "128GB",
      "Unlocked",
      "Grade B",
      "Battery Health 88%",
      "Violet",
      "£165 (was £195)"
    ],
    "models": [],
    "flavors": [],
    "description": "Vivo Vivo Y72 5G — 128GB, Unlocked, Grade B, Battery Health 88%"
  },
  {
    "name": "Galaxy Z Flip 4",
    "category": "Smartphones",
    "brand": "Samsung",
    "price": "£290 (was £330)",
    "image": "catalogue-images/Samsung Galaxy Z Flip 4 gold.jpg",
    "variants": [
      "128GB",
      "Unlocked",
      "Grade A",
      "Battery Health 100%",
      "Gold",
      "£290 (was £330)"
    ],
    "models": [],
    "flavors": [],
    "description": "Samsung Galaxy Z Flip 4 — 128GB, Unlocked, Grade A, Battery Health 100%"
  },
  {
    "name": "Pixel 6A",
    "category": "Smartphones",
    "brand": "Google",
    "price": "£190 (was £210)",
    "image": "catalogue-images/Google Pixel 6a sage.webp",
    "variants": [
      "128GB",
      "Unlocked",
      "Grade A+",
      "Battery Health 100%",
      "Green",
      "£190 (was £210)"
    ],
    "models": [],
    "flavors": [],
    "description": "Google Pixel 6A — 128GB, Unlocked, Grade A+, Battery Health 100%"
  },
  {
    "name": "Pixel 7A",
    "category": "Smartphones",
    "brand": "Google",
    "price": "£230 (was £270)",
    "image": "catalogue-images/Google Pixel 7a sea.jpg",
    "variants": [
      "128GB",
      "Unlocked",
      "Grade A+",
      "Battery Health 100%",
      "Blue",
      "£230 (was £270)"
    ],
    "models": [],
    "flavors": [],
    "description": "Google Pixel 7A — 128GB, Unlocked, Grade A+, Battery Health 100%"
  },
  {
    "name": "Galaxy S24",
    "category": "Smartphones",
    "brand": "Samsung",
    "price": "£370 (was £425)",
    "image": "catalogue-images/Samsung Galaxy S24 black.jpg",
    "variants": [
      "128GB",
      "Unlocked",
      "Grade A",
      "Battery Health 100%",
      "Black",
      "£370 (was £425)"
    ],
    "models": [],
    "flavors": [],
    "description": "Samsung Galaxy S24 — 128GB, Unlocked, Grade A, Battery Health 100%"
  },
  {
    "name": "Galaxy S21",
    "category": "Smartphones",
    "brand": "Samsung",
    "price": "£260 (was £290)",
    "image": "catalogue-images/Samsung Galaxy S21 black.jpg",
    "variants": [
      "128GB",
      "Unlocked",
      "Grade A",
      "Battery Health 100% (tag showed 32GB — verify)",
      "Black",
      "£260 (was £290)"
    ],
    "models": [],
    "flavors": [],
    "description": "Samsung Galaxy S21 — 128GB, Unlocked, Grade A, Battery Health 100% (tag showed 32GB — verify)"
  },
  {
    "name": "Galaxy S7",
    "category": "Smartphones",
    "brand": "Samsung",
    "price": "£99 (was £110)",
    "image": "catalogue-images/Samsung Galaxy S7 black.jpg",
    "variants": [
      "32GB",
      "Unlocked",
      "Grade A",
      "Battery Health 100%",
      "Black",
      "£99 (was £110)"
    ],
    "models": [],
    "flavors": [],
    "description": "Samsung Galaxy S7 — 32GB, Unlocked, Grade A, Battery Health 100%"
  },
  {
    "name": "Nokia C01",
    "category": "Smartphones",
    "brand": "Nokia",
    "price": "£80 (was £130)",
    "image": "catalogue-images/Nokia C01 black.jpg",
    "variants": [
      "32GB",
      "Unlocked",
      "Battery Health 100%",
      "Black",
      "£80 (was £130)"
    ],
    "models": [],
    "flavors": [],
    "description": "Nokia Nokia C01 — 32GB, Unlocked, Battery Health 100%"
  },
  {
    "name": "iPhone Leather Wallet Flip Book Case",
    "category": "Protection & Cases",
    "brand": "Apple",
    "price": "Enquire for price",
    "image": "catalogue-images/iPhone 11 black leather wallet magnetic flip case transparent png.jpg",
    "variants": [
      "Fits 32 Models",
      "Book Case",
      "360° Shockproof",
      "In Stock"
    ],
    "models": [
      "iPhone X",
      "iPhone XR",
      "iPhone XS",
      "iPhone XS Max",
      "iPhone 11",
      "iPhone 11 Pro",
      "iPhone 11 Pro Max",
      "iPhone 12",
      "iPhone 12 Mini",
      "iPhone 12 Pro",
      "iPhone 12 Pro Max",
      "iPhone 13",
      "iPhone 13 Mini",
      "iPhone 13 Pro",
      "iPhone 13 Pro Max",
      "iPhone 14",
      "iPhone 14 Plus",
      "iPhone 14 Pro",
      "iPhone 14 Pro Max",
      "iPhone 15",
      "iPhone 15 Plus",
      "iPhone 15 Pro",
      "iPhone 15 Pro Max",
      "iPhone 16",
      "iPhone 16 Plus",
      "iPhone 16 Pro",
      "iPhone 16 Pro Max",
      "iPhone 17e",
      "iPhone 17",
      "iPhone Air",
      "iPhone 17 Pro",
      "iPhone 17 Pro Max"
    ],
    "flavors": [],
    "description": "Premium Book Case available in store for 32 Apple models (iPhone X to iPhone 17 Pro Max). Features high-grade materials, precision port cutouts, and reinforced drop protection."
  },
  {
    "name": "iPhone MagSafe Anti-Shock Clear Case",
    "category": "Protection & Cases",
    "brand": "Apple",
    "price": "Enquire for price",
    "image": "catalogue-images/iMaxx magsafe anti shock clear case iPhone box transparent png.jpg",
    "variants": [
      "Fits 32 Models",
      "MagSafe Case",
      "360° Shockproof",
      "In Stock"
    ],
    "models": [
      "iPhone X",
      "iPhone XR",
      "iPhone XS",
      "iPhone XS Max",
      "iPhone 11",
      "iPhone 11 Pro",
      "iPhone 11 Pro Max",
      "iPhone 12",
      "iPhone 12 Mini",
      "iPhone 12 Pro",
      "iPhone 12 Pro Max",
      "iPhone 13",
      "iPhone 13 Mini",
      "iPhone 13 Pro",
      "iPhone 13 Pro Max",
      "iPhone 14",
      "iPhone 14 Plus",
      "iPhone 14 Pro",
      "iPhone 14 Pro Max",
      "iPhone 15",
      "iPhone 15 Plus",
      "iPhone 15 Pro",
      "iPhone 15 Pro Max",
      "iPhone 16",
      "iPhone 16 Plus",
      "iPhone 16 Pro",
      "iPhone 16 Pro Max",
      "iPhone 17e",
      "iPhone 17",
      "iPhone Air",
      "iPhone 17 Pro",
      "iPhone 17 Pro Max"
    ],
    "flavors": [],
    "description": "Premium MagSafe Case available in store for 32 Apple models (iPhone X to iPhone 17 Pro Max). Features high-grade materials, precision port cutouts, and reinforced drop protection."
  },
  {
    "name": "iPhone Soft Silicone Protective Case (No MagSafe)",
    "category": "Protection & Cases",
    "brand": "Apple",
    "price": "Enquire for price",
    "image": "catalogue-images/iPhone 15 smooth silicone case purple transparent png.jpg",
    "variants": [
      "Fits 32 Models",
      "Silicone Case (No MagSafe)",
      "360° Shockproof",
      "In Stock"
    ],
    "models": [
      "iPhone X",
      "iPhone XR",
      "iPhone XS",
      "iPhone XS Max",
      "iPhone 11",
      "iPhone 11 Pro",
      "iPhone 11 Pro Max",
      "iPhone 12",
      "iPhone 12 Mini",
      "iPhone 12 Pro",
      "iPhone 12 Pro Max",
      "iPhone 13",
      "iPhone 13 Mini",
      "iPhone 13 Pro",
      "iPhone 13 Pro Max",
      "iPhone 14",
      "iPhone 14 Plus",
      "iPhone 14 Pro",
      "iPhone 14 Pro Max",
      "iPhone 15",
      "iPhone 15 Plus",
      "iPhone 15 Pro",
      "iPhone 15 Pro Max",
      "iPhone 16",
      "iPhone 16 Plus",
      "iPhone 16 Pro",
      "iPhone 16 Pro Max",
      "iPhone 17e",
      "iPhone 17",
      "iPhone Air",
      "iPhone 17 Pro",
      "iPhone 17 Pro Max"
    ],
    "flavors": [],
    "description": "Premium Silicone Case (No MagSafe) available in store for 32 Apple models (iPhone X to iPhone 17 Pro Max). Features high-grade materials, precision port cutouts, and reinforced drop protection."
  },
  {
    "name": "iPhone MagSafe Leather Folio Case with Card Holder",
    "category": "Protection & Cases",
    "brand": "Apple",
    "price": "Enquire for price",
    "image": "catalogue-images/iPhone 15 Pro tan brown leather wallet folio case transparent png.jpg",
    "variants": [
      "Fits 32 Models",
      "MagSafe Case with Card Holder",
      "360° Shockproof",
      "In Stock"
    ],
    "models": [
      "iPhone X",
      "iPhone XR",
      "iPhone XS",
      "iPhone XS Max",
      "iPhone 11",
      "iPhone 11 Pro",
      "iPhone 11 Pro Max",
      "iPhone 12",
      "iPhone 12 Mini",
      "iPhone 12 Pro",
      "iPhone 12 Pro Max",
      "iPhone 13",
      "iPhone 13 Mini",
      "iPhone 13 Pro",
      "iPhone 13 Pro Max",
      "iPhone 14",
      "iPhone 14 Plus",
      "iPhone 14 Pro",
      "iPhone 14 Pro Max",
      "iPhone 15",
      "iPhone 15 Plus",
      "iPhone 15 Pro",
      "iPhone 15 Pro Max",
      "iPhone 16",
      "iPhone 16 Plus",
      "iPhone 16 Pro",
      "iPhone 16 Pro Max",
      "iPhone 17e",
      "iPhone 17",
      "iPhone Air",
      "iPhone 17 Pro",
      "iPhone 17 Pro Max"
    ],
    "flavors": [],
    "description": "Premium MagSafe Case with Card Holder available in store for 32 Apple models (iPhone X to iPhone 17 Pro Max). Features high-grade materials, precision port cutouts, and reinforced drop protection."
  },
  {
    "name": "Samsung Galaxy Leather Wallet Flip Book Case",
    "category": "Protection & Cases",
    "brand": "Samsung",
    "price": "Enquire for price",
    "image": "catalogue-images/Samsung Galaxy A05s red flip leather wallet case transparent png.jpg",
    "variants": [
      "Fits 30 Models",
      "Book Case",
      "360° Shockproof",
      "In Stock"
    ],
    "models": [
      "Galaxy S10e",
      "Galaxy S10",
      "Galaxy S10+",
      "Galaxy S20",
      "Galaxy S20+",
      "Galaxy S20 Ultra",
      "Galaxy S20 FE",
      "Galaxy S21",
      "Galaxy S21+",
      "Galaxy S21 Ultra",
      "Galaxy S21 FE",
      "Galaxy S22",
      "Galaxy S22+",
      "Galaxy S22 Ultra",
      "Galaxy S23",
      "Galaxy S23+",
      "Galaxy S23 Ultra",
      "Galaxy S23 FE",
      "Galaxy S24",
      "Galaxy S24+",
      "Galaxy S24 Ultra",
      "Galaxy S24 FE",
      "Galaxy S25",
      "Galaxy S25+",
      "Galaxy S25 Ultra",
      "Galaxy S25 Edge",
      "Galaxy S25 FE",
      "Galaxy S26",
      "Galaxy S26+",
      "Galaxy S26 Ultra"
    ],
    "flavors": [],
    "description": "Premium Book Case available in store for 30 Samsung models (Galaxy S10e to Galaxy S26 Ultra). Features high-grade materials, precision port cutouts, and reinforced drop protection."
  },
  {
    "name": "Samsung Galaxy King Kong Anti-Shock Magnetic Case",
    "category": "Protection & Cases",
    "brand": "Samsung",
    "price": "Enquire for price",
    "image": "catalogue-images/King Kong anti-shock clear phone case transparent png.jpg",
    "variants": [
      "Fits 30 Models",
      "Magnetic Case",
      "360° Shockproof",
      "In Stock"
    ],
    "models": [
      "Galaxy S10e",
      "Galaxy S10",
      "Galaxy S10+",
      "Galaxy S20",
      "Galaxy S20+",
      "Galaxy S20 Ultra",
      "Galaxy S20 FE",
      "Galaxy S21",
      "Galaxy S21+",
      "Galaxy S21 Ultra",
      "Galaxy S21 FE",
      "Galaxy S22",
      "Galaxy S22+",
      "Galaxy S22 Ultra",
      "Galaxy S23",
      "Galaxy S23+",
      "Galaxy S23 Ultra",
      "Galaxy S23 FE",
      "Galaxy S24",
      "Galaxy S24+",
      "Galaxy S24 Ultra",
      "Galaxy S24 FE",
      "Galaxy S25",
      "Galaxy S25+",
      "Galaxy S25 Ultra",
      "Galaxy S25 Edge",
      "Galaxy S25 FE",
      "Galaxy S26",
      "Galaxy S26+",
      "Galaxy S26 Ultra"
    ],
    "flavors": [],
    "description": "Premium Magnetic Case available in store for 30 Samsung models (Galaxy S10e to Galaxy S26 Ultra). Features high-grade materials, precision port cutouts, and reinforced drop protection."
  },
  {
    "name": "Samsung Galaxy Soft Silicone Protective Case (No Magnet)",
    "category": "Protection & Cases",
    "brand": "Samsung",
    "price": "Enquire for price",
    "image": "catalogue-images/Samsung Galaxy A15 black silicone phone case transparent png.jpg",
    "variants": [
      "Fits 30 Models",
      "Silicone Case (No Magnet)",
      "360° Shockproof",
      "In Stock"
    ],
    "models": [
      "Galaxy S10e",
      "Galaxy S10",
      "Galaxy S10+",
      "Galaxy S20",
      "Galaxy S20+",
      "Galaxy S20 Ultra",
      "Galaxy S20 FE",
      "Galaxy S21",
      "Galaxy S21+",
      "Galaxy S21 Ultra",
      "Galaxy S21 FE",
      "Galaxy S22",
      "Galaxy S22+",
      "Galaxy S22 Ultra",
      "Galaxy S23",
      "Galaxy S23+",
      "Galaxy S23 Ultra",
      "Galaxy S23 FE",
      "Galaxy S24",
      "Galaxy S24+",
      "Galaxy S24 Ultra",
      "Galaxy S24 FE",
      "Galaxy S25",
      "Galaxy S25+",
      "Galaxy S25 Ultra",
      "Galaxy S25 Edge",
      "Galaxy S25 FE",
      "Galaxy S26",
      "Galaxy S26+",
      "Galaxy S26 Ultra"
    ],
    "flavors": [],
    "description": "Premium Silicone Case (No Magnet) available in store for 30 Samsung models (Galaxy S10e to Galaxy S26 Ultra). Features high-grade materials, precision port cutouts, and reinforced drop protection."
  },
  {
    "name": "Samsung Galaxy Matte Shockproof Magnetic Case with Card Holder",
    "category": "Protection & Cases",
    "brand": "Samsung",
    "price": "Enquire for price",
    "image": "catalogue-images/Samsung Galaxy black matte tpu shockproof case transparent png.jpg",
    "variants": [
      "Fits 30 Models",
      "Magnetic Case with Card Holder",
      "360° Shockproof",
      "In Stock"
    ],
    "models": [
      "Galaxy S10e",
      "Galaxy S10",
      "Galaxy S10+",
      "Galaxy S20",
      "Galaxy S20+",
      "Galaxy S20 Ultra",
      "Galaxy S20 FE",
      "Galaxy S21",
      "Galaxy S21+",
      "Galaxy S21 Ultra",
      "Galaxy S21 FE",
      "Galaxy S22",
      "Galaxy S22+",
      "Galaxy S22 Ultra",
      "Galaxy S23",
      "Galaxy S23+",
      "Galaxy S23 Ultra",
      "Galaxy S23 FE",
      "Galaxy S24",
      "Galaxy S24+",
      "Galaxy S24 Ultra",
      "Galaxy S24 FE",
      "Galaxy S25",
      "Galaxy S25+",
      "Galaxy S25 Ultra",
      "Galaxy S25 Edge",
      "Galaxy S25 FE",
      "Galaxy S26",
      "Galaxy S26+",
      "Galaxy S26 Ultra"
    ],
    "flavors": [],
    "description": "Premium Magnetic Case with Card Holder available in store for 30 Samsung models (Galaxy S10e to Galaxy S26 Ultra). Features high-grade materials, precision port cutouts, and reinforced drop protection."
  },
  {
    "name": "Ven-Dens Travel Charger 5W",
    "category": "Tech Accessories",
    "brand": "Ven-Dens",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens 5W travel charger.jpg",
    "variants": [
      "Ven-Dens"
    ],
    "flavors": [],
    "description": "Travel Charger 5W by Ven-Dens."
  },
  {
    "name": "Ven-Dens (SP-TC78AC) Travel Charger QC3.0/PD 20W",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (SP-TC78AC)",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens SP-TC78AC 20W QC3 PD charger.webp",
    "variants": [
      "Ven-Dens (SP-TC78AC)"
    ],
    "flavors": [],
    "description": "Travel Charger QC3.0/PD 20W by Ven-Dens (SP-TC78AC)."
  },
  {
    "name": "Ven-Dens (SP-TC7) Travel Charger PD 20W",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (SP-TC7)",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens SP-TC7 20W PD travel charger.webp",
    "variants": [
      "Ven-Dens (SP-TC7)"
    ],
    "flavors": [],
    "description": "Travel Charger PD 20W by Ven-Dens (SP-TC7)."
  },
  {
    "name": "Ven-Dens (SP-TC80AG) 3-in-1 Budget Charger PD Fast Charger 20W",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (SP-TC80AG)",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens SP-TC80AG 3 in 1 20W charger.jpg",
    "variants": [
      "Ven-Dens (SP-TC80AG)"
    ],
    "flavors": [],
    "description": "3-in-1 Budget Charger PD Fast Charger 20W by Ven-Dens (SP-TC80AG)."
  },
  {
    "name": "BWOO GaN Wall Charger 65W",
    "category": "Tech Accessories",
    "brand": "BWOO",
    "price": "Enquire for price",
    "image": "catalogue-images/BWOO 65W GaN wall charger.webp",
    "variants": [
      "BWOO",
      "GaN Technology"
    ],
    "flavors": [],
    "description": "GaN Wall Charger 65W by BWOO. GaN Technology"
  },
  {
    "name": "WyeFlux AnyPort Universal Travel Adapter 70W",
    "category": "Tech Accessories",
    "brand": "WyeFlux",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeFlux AnyPort 70W universal travel adapter.jpg",
    "variants": [
      "WyeFlux"
    ],
    "flavors": [],
    "description": "AnyPort Universal Travel Adapter 70W by WyeFlux."
  },
  {
    "name": "Ven-Dens (VD-DCP01) Silicone Cable (Lightning)",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (VD-DCP01)",
    "price": "£9.99",
    "image": "catalogue-images/Ven-Dens VD-DCP01 silicone lightning cable.jpg",
    "variants": [
      "£9.99",
      "Ven-Dens (VD-DCP01)",
      "2.4A",
      "100cm"
    ],
    "flavors": [],
    "description": "Silicone Cable (Lightning) by Ven-Dens (VD-DCP01). 2.4A, 100cm"
  },
  {
    "name": "Ven-Dens Silicone Cable (Type-C)",
    "category": "Tech Accessories",
    "brand": "Ven-Dens",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens silicone USB-C cable 1m.jpg",
    "variants": [
      "Ven-Dens",
      "2.4A",
      "100cm"
    ],
    "flavors": [],
    "description": "Silicone Cable (Type-C) by Ven-Dens. 2.4A, 100cm"
  },
  {
    "name": "Ven-Dens USB to Type-C Fast Charging Cable",
    "category": "Tech Accessories",
    "brand": "Ven-Dens",
    "price": "£9.99",
    "image": "catalogue-images/Ven-Dens USB-A to USB-C cable 1m.jpg",
    "variants": [
      "£9.99",
      "Ven-Dens",
      "1m"
    ],
    "flavors": [],
    "description": "USB to Type-C Fast Charging Cable by Ven-Dens. 1m"
  },
  {
    "name": "Ven-Dens (VD-DCA10) Type-C to Type-C Mag3 Cable",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (VD-DCA10)",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens VD-DCA10 240W Mag3 USB-C cable.jpg",
    "variants": [
      "Ven-Dens (VD-DCA10)",
      "240W"
    ],
    "flavors": [],
    "description": "Type-C to Type-C Mag3 Cable by Ven-Dens (VD-DCA10). 240W"
  },
  {
    "name": "Core 8-Pin to Type-C Cable",
    "category": "Tech Accessories",
    "brand": "Core",
    "price": "Enquire for price",
    "image": "catalogue-images/Core MX0013 data cable.jpg",
    "variants": [
      "Core",
      "2m",
      "3A 27W PD Fast Charge",
      "for iPhone"
    ],
    "flavors": [],
    "description": "8-Pin to Type-C Cable by Core. 2m, 3A 27W PD Fast Charge, for iPhone"
  },
  {
    "name": "Core 8-Pin Cable",
    "category": "Tech Accessories",
    "brand": "Core",
    "price": "Enquire for price",
    "image": "catalogue-images/Core MX0013 data cable.jpg",
    "variants": [
      "Core",
      "2m",
      "2.1A 10.5W Power & Data"
    ],
    "flavors": [],
    "description": "8-Pin Cable by Core. 2m, 2.1A 10.5W Power & Data"
  },
  {
    "name": "Core (MX0013) Data Cable",
    "category": "Tech Accessories",
    "brand": "Core (MX0013)",
    "price": "Enquire for price",
    "image": "catalogue-images/Core MX0013 data cable.jpg",
    "variants": [
      "Core (MX0013)",
      "15W",
      "3A Max"
    ],
    "flavors": [],
    "description": "Data Cable by Core (MX0013). 15W, 3A Max"
  },
  {
    "name": "BWOO USB-A to Type-C Soft Silicone Data Cable",
    "category": "Tech Accessories",
    "brand": "BWOO",
    "price": "Enquire for price",
    "image": "catalogue-images/BWOO USB-A to USB-C silicone cable 1m.jpg",
    "variants": [
      "BWOO",
      "3.0A",
      "1m"
    ],
    "flavors": [],
    "description": "USB-A to Type-C Soft Silicone Data Cable by BWOO. 3.0A, 1m"
  },
  {
    "name": "BWOO Type-C to Type-C Soft Silicone Data Cable",
    "category": "Tech Accessories",
    "brand": "BWOO",
    "price": "Enquire for price",
    "image": "catalogue-images/BWOO Type-C to Type-C Soft Silicone Cable.webp",
    "variants": [
      "BWOO",
      "3.0A",
      "1m"
    ],
    "flavors": [],
    "description": "Type-C to Type-C Soft Silicone Data Cable by BWOO. 3.0A, 1m"
  },
  {
    "name": "Mobitel PD 20W Data Cable",
    "category": "Tech Accessories",
    "brand": "Mobitel",
    "price": "Enquire for price",
    "image": "catalogue-images/Mobitel PD 20W Data Cable.jpg",
    "variants": [
      "Mobitel",
      "Lightning"
    ],
    "flavors": [],
    "description": "PD 20W Data Cable by Mobitel. Lightning"
  },
  {
    "name": "WyeFlow USB-C to USB-C Fast Charging & Data Cable",
    "category": "Tech Accessories",
    "brand": "WyeFlow",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeFlow USB-C to USB-C cable 1m.jpg",
    "variants": [
      "WyeFlow",
      "1m"
    ],
    "flavors": [],
    "description": "USB-C to USB-C Fast Charging & Data Cable by WyeFlow. 1m"
  },
  {
    "name": "WyeFlow USB-C to 8-Pin Magnetic Fast Charging & Data Cable",
    "category": "Tech Accessories",
    "brand": "WyeFlow",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeFlow USB-C to lightning magnetic cable 1m.jpg",
    "variants": [
      "WyeFlow",
      "1m"
    ],
    "flavors": [],
    "description": "USB-C to 8-Pin Magnetic Fast Charging & Data Cable by WyeFlow. 1m"
  },
  {
    "name": "WyeFlux 20W USB-C Charging Plug with USB-C to 8-Pin Cable",
    "category": "Tech Accessories",
    "brand": "WyeFlux",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeFlux 20W USB-C plug with lightning cable.webp",
    "variants": [
      "WyeFlux",
      "2-in-1"
    ],
    "flavors": [],
    "description": "20W USB-C Charging Plug with USB-C to 8-Pin Cable by WyeFlux. 2-in-1"
  },
  {
    "name": "WyeFlux PA21 65W USB-C & USB-A Power Adapter with Retractable Cable",
    "category": "Tech Accessories",
    "brand": "WyeFlux",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeFlux PA21 65W retractable cable charger.webp",
    "variants": [
      "WyeFlux"
    ],
    "flavors": [],
    "description": "PA21 65W USB-C & USB-A Power Adapter with Retractable Cable by WyeFlux."
  },
  {
    "name": "WyeFlow 4-in-1 Fast Charging Data Cable",
    "category": "Tech Accessories",
    "brand": "WyeFlow",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeFlow 4 in 1 fast charging data cable.webp",
    "variants": [
      "WyeFlow",
      "For charging two devices at once"
    ],
    "flavors": [],
    "description": "4-in-1 Fast Charging Data Cable by WyeFlow. For charging two devices at once"
  },
  {
    "name": "Mobitel (M-DC4in1-04) Power Loop 4-in-1 Lanyard",
    "category": "Tech Accessories",
    "brand": "Mobitel (M-DC4in1-04)",
    "price": "Enquire for price",
    "image": "catalogue-images/Mobitel M-DC4in1-04 power loop 4 in 1 lanyard.webp",
    "variants": [
      "Mobitel (M-DC4in1-04)",
      "27W/65W",
      "1.2m"
    ],
    "flavors": [],
    "description": "Power Loop 4-in-1 Lanyard by Mobitel (M-DC4in1-04). 27W/65W, 1.2m"
  },
  {
    "name": "WyeWave USB-C Stereo Wired SoftBuds Earphones",
    "category": "Tech Accessories",
    "brand": "WyeWave",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeWave USB-C SoftBuds earphones.jpg",
    "variants": [
      "WyeWave"
    ],
    "flavors": [],
    "description": "USB-C Stereo Wired SoftBuds Earphones by WyeWave."
  },
  {
    "name": "WyeWave USB-C Stereo Wired EP24 Earphones",
    "category": "Tech Accessories",
    "brand": "WyeWave",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeWave EP24 USB-C earphones.jpg",
    "variants": [
      "WyeWave"
    ],
    "flavors": [],
    "description": "USB-C Stereo Wired EP24 Earphones by WyeWave."
  },
  {
    "name": "WyeWave 8-Pin Stereo Wired Earphones",
    "category": "Tech Accessories",
    "brand": "WyeWave",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeWave lightning 8 pin wired earphones.jpg",
    "variants": [
      "WyeWave"
    ],
    "flavors": [],
    "description": "8-Pin Stereo Wired Earphones by WyeWave."
  },
  {
    "name": "WyeWave 8-Pin Stereo Wired SoftBuds Earphones",
    "category": "Tech Accessories",
    "brand": "WyeWave",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeWave lightning SoftBuds earphones.jpg",
    "variants": [
      "WyeWave"
    ],
    "flavors": [],
    "description": "8-Pin Stereo Wired SoftBuds Earphones by WyeWave."
  },
  {
    "name": "Ven-Dens (VD-EAR032) Wired Earphones (Lightning)",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (VD-EAR032)",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens VD-EAR032 lightning earphones.jpg",
    "variants": [
      "Ven-Dens (VD-EAR032)",
      "120cm",
      "Microphone"
    ],
    "flavors": [],
    "description": "Wired Earphones (Lightning) by Ven-Dens (VD-EAR032). 120cm, Microphone"
  },
  {
    "name": "Ven-Dens (VD-EAR022) Wired Earphones (Type-C)",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (VD-EAR022)",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens VD-EAR022 USB-C earphones.jpg",
    "variants": [
      "Ven-Dens (VD-EAR022)",
      "150cm",
      "Microphone"
    ],
    "flavors": [],
    "description": "Wired Earphones (Type-C) by Ven-Dens (VD-EAR022). 150cm, Microphone"
  },
  {
    "name": "Ven-Dens Wired Earphones (Type-C, metal housing)",
    "category": "Tech Accessories",
    "brand": "Ven-Dens",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens metal USB-C earphones.jpg",
    "variants": [
      "Ven-Dens",
      "Microphone"
    ],
    "flavors": [],
    "description": "Wired Earphones (Type-C, metal housing) by Ven-Dens. Microphone"
  },
  {
    "name": "Ven-Dens Wired Earphones (3.5mm)",
    "category": "Tech Accessories",
    "brand": "Ven-Dens",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens 3.5mm wired earphones.webp",
    "variants": [
      "Ven-Dens",
      "Microphone"
    ],
    "flavors": [],
    "description": "Wired Earphones (3.5mm) by Ven-Dens. Microphone"
  },
  {
    "name": "Ven-Dens (VD-MS002) Wireless Earbuds Pods 2",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (VD-MS002)",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens VD-MS002 wireless earbuds pods 2.jpg",
    "variants": [
      "Ven-Dens (VD-MS002)"
    ],
    "flavors": [],
    "description": "Wireless Earbuds Pods 2 by Ven-Dens (VD-MS002)."
  },
  {
    "name": "Ven-Dens Wireless Earbuds",
    "category": "Tech Accessories",
    "brand": "Ven-Dens",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens wireless earbuds.jpg",
    "variants": [
      "Ven-Dens"
    ],
    "flavors": [],
    "description": "Wireless Earbuds by Ven-Dens."
  },
  {
    "name": "BWOO True Stereo Wireless Earphone",
    "category": "Tech Accessories",
    "brand": "BWOO",
    "price": "Enquire for price",
    "image": "catalogue-images/BWOO true stereo wireless earbuds.jpg",
    "variants": [
      "BWOO"
    ],
    "flavors": [],
    "description": "True Stereo Wireless Earphone by BWOO."
  },
  {
    "name": "Soundcore (Anker) R50i NC True Wireless",
    "category": "Tech Accessories",
    "brand": "Soundcore (Anker)",
    "price": "Enquire for price",
    "image": "catalogue-images/Soundcore R50i NC earbuds.webp",
    "variants": [
      "Soundcore (Anker)",
      "Bluetooth 5.4",
      "adaptive ANC up to 42dB",
      "10mm drivers with BassUp",
      "transparency mode",
      "10hrs/45hrs total with case",
      "IPX5"
    ],
    "flavors": [],
    "description": "R50i NC True Wireless by Soundcore (Anker). Bluetooth 5.4, adaptive ANC up to 42dB, 10mm drivers with BassUp, transparency mode, 10hrs/45hrs total with case, IPX5"
  },
  {
    "name": "WyeWave (OT4650X) Over-Ear Wireless Earbuds",
    "category": "Tech Accessories",
    "brand": "WyeWave (OT4650X)",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeWave OT4650X over ear wireless headphones.jpg",
    "variants": [
      "WyeWave (OT4650X)"
    ],
    "flavors": [],
    "description": "Over-Ear Wireless Earbuds by WyeWave (OT4650X)."
  },
  {
    "name": "Belkin Soundform Move True Wireless Earbuds",
    "category": "Tech Accessories",
    "brand": "Belkin",
    "price": "Enquire for price",
    "image": "catalogue-images/Belkin Soundform Move true wireless earbuds.jpg",
    "variants": [
      "Belkin",
      "Bluetooth 5.0",
      "IPX5",
      "5hrs/24hrs total with case",
      "touch controls",
      "mic in each bud",
      "~30ft range"
    ],
    "flavors": [],
    "description": "Soundform Move True Wireless Earbuds by Belkin. Bluetooth 5.0, IPX5, 5hrs/24hrs total with case, touch controls, mic in each bud, ~30ft range"
  },
  {
    "name": "WyeFlux (PB53) 5K Wireless Power Bank",
    "category": "Tech Accessories",
    "brand": "WyeFlux (PB53)",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeFlux PB53 5000mAh wireless power bank.jpg",
    "variants": [
      "WyeFlux (PB53)"
    ],
    "flavors": [],
    "description": "5K Wireless Power Bank by WyeFlux (PB53)."
  },
  {
    "name": "WyeFlux Slim Magnetic Wireless Power Bank",
    "category": "Tech Accessories",
    "brand": "WyeFlux",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeFlux slim magnetic wireless power bank.webp",
    "variants": [
      "WyeFlux"
    ],
    "flavors": [],
    "description": "Slim Magnetic Wireless Power Bank by WyeFlux."
  },
  {
    "name": "WyeFlux Fast Charging Power Bank with Built-in Cables",
    "category": "Tech Accessories",
    "brand": "WyeFlux",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeFlux power bank built in cables.webp",
    "variants": [
      "WyeFlux"
    ],
    "flavors": [],
    "description": "Fast Charging Power Bank with Built-in Cables by WyeFlux."
  },
  {
    "name": "WyeFlux (PB73) 10K Power Bank with Detachable Cable",
    "category": "Tech Accessories",
    "brand": "WyeFlux (PB73)",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeFlux PB73 10000mAh 20W power bank.jpg",
    "variants": [
      "WyeFlux (PB73)",
      "20W"
    ],
    "flavors": [],
    "description": "10K Power Bank with Detachable Cable by WyeFlux (PB73). 20W"
  },
  {
    "name": "WYE 10500mAh Portable Power Bank with USB-C Cable",
    "category": "Tech Accessories",
    "brand": "WYE",
    "price": "Enquire for price",
    "image": "catalogue-images/WYE 10500mAh power bank USB-C.jpg",
    "variants": [
      "WYE"
    ],
    "flavors": [],
    "description": "10500mAh Portable Power Bank with USB-C Cable by WYE."
  },
  {
    "name": "WYE 20000mAh Power Bank",
    "category": "Tech Accessories",
    "brand": "WYE",
    "price": "Enquire for price",
    "image": "catalogue-images/slim 20000mah power bank white box transparent png.jpg",
    "variants": [
      "WYE"
    ],
    "flavors": [],
    "description": "20000mAh Power Bank by WYE."
  },
  {
    "name": "WyeFlux Dual Ports Fast Charging Power Bank",
    "category": "Tech Accessories",
    "brand": "WyeFlux",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeFlux 22.5W dual port power bank.jpg",
    "variants": [
      "WyeFlux",
      "22.5W"
    ],
    "flavors": [],
    "description": "Dual Ports Fast Charging Power Bank by WyeFlux. 22.5W"
  },
  {
    "name": "WyeFlux Portable Fast Charging Power Bank, Suction Cup",
    "category": "Tech Accessories",
    "brand": "WyeFlux",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeFlux 10000mAh suction cup power bank.jpg",
    "variants": [
      "WyeFlux",
      "20W",
      "10000mAh"
    ],
    "flavors": [],
    "description": "Portable Fast Charging Power Bank, Suction Cup by WyeFlux. 20W, 10000mAh"
  },
  {
    "name": "WYE 3000mAh Portable Power Bank",
    "category": "Tech Accessories",
    "brand": "WYE",
    "price": "Enquire for price",
    "image": "catalogue-images/WYE 3000mAh Portable Power Bank.webp",
    "variants": [
      "WYE"
    ],
    "flavors": [],
    "description": "3000mAh Portable Power Bank by WYE."
  },
  {
    "name": "Ven-Dens (VD-PB032) PowerBank, Built-in Smart Chips",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (VD-PB032)",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens VD-PB032 5000mAh MagSafe power bank.jpg",
    "variants": [
      "Ven-Dens (VD-PB032)",
      "5000mAh (18.5Wh)",
      "MagSafe-style wireless stand",
      "15W wireless charging",
      "smart charging IC overheat/overcharge protection"
    ],
    "flavors": [],
    "description": "PowerBank, Built-in Smart Chips by Ven-Dens (VD-PB032). 5000mAh (18.5Wh), MagSafe-style wireless stand, 15W wireless charging, smart charging IC overheat/overcharge protection"
  },
  {
    "name": "Ven-Dens (VD-PB055) PowerBank, High Quality",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (VD-PB055)",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens VD-PB055 10000mAh 100W power bank.jpg",
    "variants": [
      "Ven-Dens (VD-PB055)",
      "10000mAh (38.5Wh)",
      "100W total output",
      "smart charging IC protection"
    ],
    "flavors": [],
    "description": "PowerBank, High Quality by Ven-Dens (VD-PB055). 10000mAh (38.5Wh), 100W total output, smart charging IC protection"
  },
  {
    "name": "Ven-Dens (VD-OTG002) OTG+USB Adapter (Type-C)",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (VD-OTG002)",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens VD-OTG002 USB-C OTG adapter.webp",
    "variants": [
      "Ven-Dens (VD-OTG002)",
      "For phone/computer data transmission"
    ],
    "flavors": [],
    "description": "OTG+USB Adapter (Type-C) by Ven-Dens (VD-OTG002). For phone/computer data transmission"
  },
  {
    "name": "Ven-Dens (VD-OTG004) OTG Connector",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (VD-OTG004)",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens VD-OTG004 USB-C male to USB female.jpg",
    "variants": [
      "Ven-Dens (VD-OTG004)",
      "Type-C Male to USB Female"
    ],
    "flavors": [],
    "description": "OTG Connector by Ven-Dens (VD-OTG004). Type-C Male to USB Female"
  },
  {
    "name": "Ven-Dens (VD-AUX002) Audio Cable",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (VD-AUX002)",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens VD-AUX002 aux cable.webp",
    "variants": [
      "Ven-Dens (VD-AUX002)",
      "100cm"
    ],
    "flavors": [],
    "description": "Audio Cable by Ven-Dens (VD-AUX002). 100cm"
  },
  {
    "name": "Mobitel (M-AUXL-001) Audio Cable, Lightning to 3.5mm",
    "category": "Tech Accessories",
    "brand": "Mobitel (M-AUXL-001)",
    "price": "Enquire for price",
    "image": "catalogue-images/lightning to 3.5mm headphone adapter short cable transparent png.jpg",
    "variants": [
      "Mobitel (M-AUXL-001)",
      "Nylon",
      "100cm"
    ],
    "flavors": [],
    "description": "Audio Cable, Lightning to 3.5mm by Mobitel (M-AUXL-001). Nylon, 100cm"
  },
  {
    "name": "WyeFlow USB-C to 3.5mm Adapter",
    "category": "Tech Accessories",
    "brand": "WyeFlow",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeFlow USB-C to 3.5mm adapter.webp",
    "variants": [
      "WyeFlow"
    ],
    "flavors": [],
    "description": "USB-C to 3.5mm Adapter by WyeFlow."
  },
  {
    "name": "WyeFlow 8-Pin to 3.5mm Silicone Adapter",
    "category": "Tech Accessories",
    "brand": "WyeFlow",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeFlow lightning to 3.5mm silicone adapter.jpg",
    "variants": [
      "WyeFlow"
    ],
    "flavors": [],
    "description": "8-Pin to 3.5mm Silicone Adapter by WyeFlow."
  },
  {
    "name": "Toocaps USB-C to 3.5mm Adapter",
    "category": "Tech Accessories",
    "brand": "Toocaps",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeFlow USB-C to 3.5mm adapter.webp",
    "variants": [
      "Toocaps"
    ],
    "flavors": [],
    "description": "USB-C to 3.5mm Adapter by Toocaps."
  },
  {
    "name": "Ven-Dens (ADP011) Type-C to HDMI Adapter",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (ADP011)",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens ADP011 USB-C to HDMI 3 in 1 adapter.webp",
    "variants": [
      "Ven-Dens (ADP011)",
      "3-in-1"
    ],
    "flavors": [],
    "description": "Type-C to HDMI Adapter by Ven-Dens (ADP011). 3-in-1"
  },
  {
    "name": "Ven-Dens (VD-ADP050) USB 3.0 Ports Hub",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (VD-ADP050)",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens VD-ADP050 USB 3.0 hub.webp",
    "variants": [
      "Ven-Dens (VD-ADP050)",
      "Plug and play"
    ],
    "flavors": [],
    "description": "USB 3.0 Ports Hub by Ven-Dens (VD-ADP050). Plug and play"
  },
  {
    "name": "Ven-Dens 4-in-1 Docking Station",
    "category": "Tech Accessories",
    "brand": "Ven-Dens",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens 4 in 1 docking station.jpg",
    "variants": [
      "Ven-Dens"
    ],
    "flavors": [],
    "description": "4-in-1 Docking Station by Ven-Dens."
  },
  {
    "name": "Wireless-N USB Adapter",
    "category": "Tech Accessories",
    "brand": "",
    "price": "Enquire for price",
    "image": "catalogue-images/wireless-n wifi repeater 300mbps wr03t transparent png.jpg",
    "variants": [
      "150Mbps — no brand visible on packaging",
      "generic USB WiFi dongle"
    ],
    "flavors": [],
    "description": "Wireless-N USB Adapter by . 150Mbps — no brand visible on packaging, generic USB WiFi dongle"
  },
  {
    "name": "WyeFlow AX900 Dual Band Wireless Dongle",
    "category": "Tech Accessories",
    "brand": "WyeFlow",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeFlow AX900 dual band USB wifi dongle.jpg",
    "variants": [
      "WyeFlow"
    ],
    "flavors": [],
    "description": "AX900 Dual Band Wireless Dongle by WyeFlow."
  },
  {
    "name": "Card Reader",
    "category": "Tech Accessories",
    "brand": "",
    "price": "Enquire for price",
    "image": "catalogue-images/4 in 1 OTG micro SD TF card reader USB C lightning transparent png.webp",
    "variants": [
      "SD/microSD — no brand visible on shelf tag"
    ],
    "flavors": [],
    "description": "Card Reader by . SD/microSD — no brand visible on shelf tag"
  },
  {
    "name": "Ven-Dens Optical Mouse",
    "category": "Tech Accessories",
    "brand": "Ven-Dens",
    "price": "Enquire for price",
    "image": "catalogue-images/AZ wired optical office mouse comfort feel transparent png.jpg",
    "variants": [
      "Ven-Dens",
      "Wired"
    ],
    "flavors": [],
    "description": "Optical Mouse by Ven-Dens. Wired"
  },
  {
    "name": "2.4GHz Wireless Mouse",
    "category": "Tech Accessories",
    "brand": "",
    "price": "Enquire for price",
    "image": "catalogue-images/GW-600 rechargeable wireless mouse black transparent png.webp",
    "variants": [
      "No brand visible on packaging"
    ],
    "flavors": [],
    "description": "2.4GHz Wireless Mouse by . No brand visible on packaging"
  },
  {
    "name": "Sony PS5 Controller",
    "category": "Gaming",
    "brand": "Sony",
    "price": "Enquire for price",
    "image": "catalogue-images/Sony PS5 DualSense Controller.webp",
    "variants": [
      "Sony",
      "DualSense"
    ],
    "flavors": [],
    "description": "PS5 Controller by Sony. DualSense"
  },
  {
    "name": "Sony PS4 Controller",
    "category": "Gaming",
    "brand": "Sony",
    "price": "Enquire for price",
    "image": "catalogue-images/PS4 Controller.jpg",
    "variants": [
      "Sony",
      "DualShock 4"
    ],
    "flavors": [],
    "description": "PS4 Controller by Sony. DualShock 4"
  },
  {
    "name": "Microsoft Xbox 360 Controller",
    "category": "Gaming",
    "brand": "Microsoft",
    "price": "Enquire for price",
    "image": "catalogue-images/Xbox 360 wired controller.jpg",
    "variants": [
      "Microsoft"
    ],
    "flavors": [],
    "description": "Xbox 360 Controller by Microsoft."
  },
  {
    "name": "Microsoft Xbox Wireless Controller",
    "category": "Gaming",
    "brand": "Microsoft",
    "price": "Enquire for price",
    "image": "catalogue-images/Xbox Series X wireless controller.jpg",
    "variants": [
      "Microsoft",
      "Xbox Series X/S"
    ],
    "flavors": [],
    "description": "Xbox Wireless Controller by Microsoft. Xbox Series X/S"
  },
  {
    "name": "Camera & Phone Tripod",
    "category": "Tech Accessories",
    "brand": "",
    "price": "£12.99",
    "image": "catalogue-images/tripod support phone stand box transparent png.jpg",
    "variants": [
      "£12.99",
      "No brand visible on packaging"
    ],
    "flavors": [],
    "description": "Camera & Phone Tripod by . No brand visible on packaging"
  },
  {
    "name": "Ven-Dens (VD-HD054) Phone Stand, 360° Rotation",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (VD-HD054)",
    "price": "Enquire for price",
    "image": "catalogue-images/Ven-Dens VD-HD054 360 phone stand.jpg",
    "variants": [
      "Ven-Dens (VD-HD054)"
    ],
    "flavors": [],
    "description": "Phone Stand, 360° Rotation by Ven-Dens (VD-HD054)."
  },
  {
    "name": "Ven-Dens Samsung Watch Fast Charger",
    "category": "Tech Accessories",
    "brand": "Ven-Dens",
    "price": "£24.99",
    "image": "catalogue-images/Earldom Samsung Galaxy watch magnetic wireless charger box transparent png.jpg",
    "variants": [
      "£24.99",
      "Ven-Dens",
      "1m"
    ],
    "flavors": [],
    "description": "Samsung Watch Fast Charger by Ven-Dens. 1m"
  },
  {
    "name": "Watch Band",
    "category": "Tech Accessories",
    "brand": "",
    "price": "Enquire for price",
    "image": "catalogue-images/Apple Watch black silicone sport band 42mm transparent png.jpg",
    "variants": [
      "42/44/45/49mm — no brand visible on shelf tag"
    ],
    "flavors": [],
    "description": "Watch Band by . 42/44/45/49mm — no brand visible on shelf tag"
  },
  {
    "name": "Watch Band",
    "category": "Tech Accessories",
    "brand": "",
    "price": "Enquire for price",
    "image": "catalogue-images/Apple Watch black silicone sport band 42mm transparent png.jpg",
    "variants": [
      "Silicone — no brand visible on shelf tag"
    ],
    "flavors": [],
    "description": "Watch Band by . Silicone — no brand visible on shelf tag"
  },
  {
    "name": "High Quality Protective Watch Band, Stylish",
    "category": "Tech Accessories",
    "brand": "",
    "price": "Enquire for price",
    "image": "catalogue-images/Apple Watch milanese loop strap with bumper frame transparent png.jpg",
    "variants": [
      "42mm — no brand visible on shelf tag"
    ],
    "flavors": [],
    "description": "High Quality Protective Watch Band, Stylish by . 42mm — no brand visible on shelf tag"
  },
  {
    "name": "WyeSafe Silicone Magnetic Watch Strap",
    "category": "Tech Accessories",
    "brand": "WyeSafe",
    "price": "Enquire for price",
    "image": "catalogue-images/WyeSafe silicone magnetic watch strap.jpg",
    "variants": [
      "WyeSafe",
      "38/40/41/45mm"
    ],
    "flavors": [],
    "description": "Silicone Magnetic Watch Strap by WyeSafe. 38/40/41/45mm"
  },
  {
    "name": "Ven-Dens (VD-MIC010) Lavalier Dual Microphone",
    "category": "Tech Accessories",
    "brand": "Ven-Dens (VD-MIC010)",
    "price": "Enquire for price",
    "image": "catalogue-images/Earldom wireless lavalier microphone box transparent png.jpg",
    "variants": [
      "Ven-Dens (VD-MIC010)",
      "Wireless live streaming",
      "sing/outdoor"
    ],
    "flavors": [],
    "description": "Lavalier Dual Microphone by Ven-Dens (VD-MIC010). Wireless live streaming, sing/outdoor"
  },
  {
    "name": "Philips (FM16FD70) USB 2.0 Flash Drive",
    "category": "Tech Accessories",
    "brand": "Philips (FM16FD70)",
    "price": "Enquire for price",
    "image": "catalogue-images/Philips FM16FD70 16GB snow USB flash drive.jpg",
    "variants": [
      "Philips (FM16FD70)",
      "16GB",
      "Snow Edition",
      "write speed up to 12MB/s",
      "USB-A",
      "protective cap"
    ],
    "flavors": [],
    "description": "USB 2.0 Flash Drive by Philips (FM16FD70). 16GB, Snow Edition, write speed up to 12MB/s, USB-A, protective cap"
  },
  {
    "name": "Intenso microSDHC Class 10",
    "category": "Tech Accessories",
    "brand": "Intenso",
    "price": "Enquire for price",
    "image": "catalogue-images/speed-flash-microsd-memory-card-with-adapter-32gb.webp",
    "variants": [
      "Intenso",
      "8GB",
      "up to 25MB/s read",
      "includes SD adapter"
    ],
    "flavors": [],
    "description": "microSDHC Class 10 by Intenso. 8GB, up to 25MB/s read, includes SD adapter"
  },
  {
    "name": "Kingston DataTraveler Exodia",
    "category": "Tech Accessories",
    "brand": "Kingston",
    "price": "Enquire for price",
    "image": "catalogue-images/kingston-datatraveler-exodia-usb-3-2-flash-drive-128gb.webp",
    "variants": [
      "Kingston",
      "256GB",
      "USB 3.2 Gen 1 (5Gb/s)",
      "USB-A",
      "keyring loop",
      "5-year warranty"
    ],
    "flavors": [],
    "description": "DataTraveler Exodia by Kingston. 256GB, USB 3.2 Gen 1 (5Gb/s), USB-A, keyring loop, 5-year warranty"
  }
];
