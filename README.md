# TechStore - Shopify Theme for Technology & Gadgets

A modern, responsive Shopify theme designed specifically for technology and gadget stores. Built with performance and user experience in mind.

## 🚀 Features

- **Modern Design**: Clean, tech-focused aesthetic with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Fast loading times with lazy loading and efficient code
- **SEO Friendly**: Built-in meta tags and structured data
- **Customizable**: Extensive theme settings for colors, fonts, and layout options
- **Product Features**:
  - Image gallery with thumbnails
  - Variant selection
  - Quantity selector
  - Quick add to cart
  - Product specifications display
  - Social sharing buttons
- **Shopping Features**:
  - Drawer or page cart options
  - Real-time cart updates
  - Collection filtering and sorting
  - Search functionality
- **Multi-language Support**: Includes English and Spanish translations

## 📁 Theme Structure

```
tienda/
├── assets/           # CSS, JavaScript, and image files
│   ├── theme.css    # Main stylesheet
│   ├── theme.js     # Main JavaScript
│   └── vendor.js    # Third-party dependencies
├── config/          # Theme configuration
│   ├── settings_data.json
│   └── settings_schema.json
├── layout/          # Theme layouts
│   └── theme.liquid
├── locales/         # Language translations
│   ├── en.default.json
│   └── es.json
├── sections/        # Reusable sections
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero-banner.liquid
│   └── featured-products.liquid
├── snippets/        # Reusable code snippets
│   └── meta-tags.liquid
└── templates/       # Page templates
    ├── index.liquid
    ├── product.liquid
    ├── collection.liquid
    └── cart.liquid
```

## 🛠️ Installation

### Method 1: Upload to Shopify

1. **Prepare the theme files**:
   - Download or clone this repository
   - Compress all files into a ZIP file (ensure the folders are at the root level, not nested)

2. **Upload to Shopify**:
   - Log in to your Shopify admin panel
   - Go to **Online Store > Themes**
   - Click **Add theme** > **Upload zip file**
   - Select your theme ZIP file and upload

3. **Activate the theme**:
   - Once uploaded, click **Actions** > **Publish**

### Method 2: Using Shopify CLI

1. **Install Shopify CLI**:
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Navigate to theme directory**:
   ```bash
   cd tienda
   ```

3. **Connect to your store**:
   ```bash
   shopify theme dev --store your-store.myshopify.com
   ```

4. **Push to live store**:
   ```bash
   shopify theme push
   ```

## ⚙️ Configuration

### Theme Settings

Access theme settings from **Online Store > Themes > Customize**:

1. **Colors**:
   - Primary Color (default: #0066ff)
   - Secondary Color (default: #00d4ff)
   - Accent Color (default: #ff6b35)
   - Text Color (default: #333333)
   - Background Color (default: #ffffff)
   - Border Color (default: #e0e0e0)

2. **Typography**:
   - Heading Font
   - Body Font
   - Base Font Size (14-20px)

3. **Product Pages**:
   - Show/hide vendor
   - Show/hide SKU
   - Show/hide quantity selector
   - Show/hide share buttons

4. **Cart Settings**:
   - Cart Type (drawer or page)
   - Enable cart notes

5. **Social Media**:
   - Facebook URL
   - Twitter URL
   - Instagram URL
   - YouTube URL

### Homepage Sections

The homepage includes customizable sections:

- **Hero Banner**: Large banner with image, text, and call-to-action button
- **Featured Products**: Display products from a selected collection

Add more sections using the theme customizer.

## 🎨 Customization

### Modifying Colors

Edit the color variables in `config/settings_data.json` or use the theme customizer.

### Adding Custom CSS

Add custom styles to `assets/theme.css` or create a new CSS file.

### Adding Custom JavaScript

Add custom scripts to `assets/theme.js` or create a new JS file and reference it in `layout/theme.liquid`.

## 📱 Responsive Design

The theme is fully responsive with breakpoints at:
- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: ≤ 480px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Requirements

- Shopify account (any plan)
- Modern web browser for customization
- No special server requirements (hosted by Shopify)

## 📝 Best Practices

1. **Product Images**: Use high-quality images (at least 1000x1000px) for best display
2. **Product Descriptions**: Include detailed specifications for tech products
3. **Collections**: Organize products into logical categories (Smartphones, Laptops, Accessories, etc.)
4. **SEO**: Fill in product meta descriptions and use descriptive titles
5. **Navigation**: Keep main menu items to 5-7 for best UX

## 🆘 Support

For issues or questions:
1. Check the [Shopify Theme Documentation](https://shopify.dev/themes)
2. Review this README
3. Open an issue on the GitHub repository

## 📄 License

This theme is available for use with Shopify stores. Please review the license terms before use.

## 🙏 Credits

Developed by Script32 for modern technology and gadget stores.

## 📈 Version History

- **v1.0.0** (2024): Initial release
  - Basic theme structure
  - Homepage with hero and featured products
  - Product, collection, and cart pages
  - Responsive design
  - Multi-language support (EN/ES)
