// src/data/products.js
export const products = [
    {
        id: 'p1',
        name: 'Classic White Tee',
        description: 'A comfortable and stylish classic white t-shirt, perfect for everyday wear. Made from 100% organic cotton.',
        price: 24.99,
        category: 'T-Shirts',
        imageUrls: [
            'https://picsum.photos/id/1018/800/600', // Example placeholder image
            'https://picsum.photos/id/1015/800/600',
            'https://picsum.photos/id/1019/800/600'
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['White', 'Black', 'Grey'],
        inStock: 50
    },
    {
        id: 'p2',
        name: 'Denim Jeans - Slim Fit',
        description: 'Premium quality slim fit denim jeans for a modern look. Features a comfortable stretch fabric.',
        price: 59.99,
        category: 'Jeans',
        imageUrls: [
            'https://picsum.photos/id/1020/800/600',
            'https://picsum.photos/id/1021/800/600',
            'https://picsum.photos/id/1022/800/600'
        ],
        sizes: ['28', '30', '32', '34', '36'],
        colors: ['Blue', 'Black Denim', 'Light Wash'],
        inStock: 30
    },
    {
        id: 'p3',
        name: 'Cozy Knit Sweater',
        description: 'Stay warm and stylish with this soft, cozy knit sweater. Perfect for cooler evenings.',
        price: 79.99,
        category: 'Sweaters',
        imageUrls: [
            'https://picsum.photos/id/1025/800/600',
            'https://picsum.photos/id/1027/800/600'
        ],
        sizes: ['S', 'M', 'L'],
        colors: ['Cream', 'Navy', 'Burgundy'],
        inStock: 20
    },
    {
        id: 'p4',
        name: 'Summer Floral Dress',
        description: 'Light and airy floral dress, ideal for summer days. Features an elegant flowing design.',
        price: 45.00,
        category: 'Dresses',
        imageUrls: [
            'https://picsum.photos/id/1033/800/600',
            'https://picsum.photos/id/1034/800/600'
        ],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Multi-color', 'Yellow', 'Blue'],
        inStock: 15
    },
    {
        id: 'p5',
        name: 'Athletic Running Shoes',
        description: 'High-performance running shoes designed for comfort and speed. Lightweight and breathable.',
        price: 99.99,
        category: 'Shoes',
        imageUrls: [
            'https://picsum.photos/id/1036/800/600',
            'https://picsum.photos/id/1037/800/600'
        ],
        sizes: ['6', '7', '8', '9', '10', '11'],
        colors: ['Black/White', 'Red/Grey'],
        inStock: 40
    },
];