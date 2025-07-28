# How to Add Your Custom Images

I've just replaced the hero section image with a custom engineering-themed image. Here's exactly how you can add your own images:

## ✅ What I Just Did
1. **Created a custom SVG image**: `attached_assets/hero-engineering.svg`
2. **Updated the hero component**: `client/src/components/sections/hero.tsx`
3. **Added import statement**: `import heroImage from "@assets/hero-engineering.svg";`
4. **Replaced image source**: Changed from Unsplash URL to `src={heroImage}`

## 📁 Step-by-Step: Add Your Own Image

### Step 1: Add Your Image File
1. **Upload your image** to the `attached_assets/` folder
2. **Supported formats**: JPG, PNG, SVG, WebP
3. **Recommended naming**: Use descriptive names like `my-hero-image.jpg`

### Step 2: Import the Image
In the component file (e.g., `hero.tsx`), add this line at the top:
```javascript
import myImage from "@assets/my-hero-image.jpg";
```

### Step 3: Use the Image
Replace the `src` attribute:
```javascript
<img src={myImage} alt="Your description" />
```

## 🖼️ Common Image Locations to Replace

### 1. Hero Section Image
**File**: `client/src/components/sections/hero.tsx`
**Current**: Custom engineering SVG
**To replace**: Follow steps above

### 2. About Page Images
**File**: `client/src/pages/about.tsx`
**Look for**: Any `<img>` tags or background images

### 3. Service Section Images
**File**: `client/src/components/sections/services.tsx`
**Purpose**: Service illustrations or icons

### 4. Case Study Images
**File**: `client/src/pages/case-studies.tsx`
**Purpose**: Project screenshots or results

## 🔧 Complete Example

Let's say you want to add `my-company-photo.jpg`:

### 1. Add file to folder:
```
attached_assets/
  └── my-company-photo.jpg
```

### 2. In your component file:
```javascript
import { Button } from "@/components/ui/button";
import myPhoto from "@assets/my-company-photo.jpg";  // Add this line

export function MyComponent() {
  return (
    <div>
      <img 
        src={myPhoto}                    // Use your image
        alt="Our company team" 
        className="w-full h-auto rounded-lg" 
      />
    </div>
  );
}
```

## 📝 Image Best Practices

### File Naming:
- ✅ `hero-image.jpg`
- ✅ `team-photo.png`
- ✅ `service-illustration.svg`
- ❌ `IMG_001.jpg`
- ❌ `photo (1).png`

### File Sizes:
- **Hero images**: 800x600px or larger
- **Service icons**: 200x200px
- **Team photos**: 400x400px
- **Keep file sizes under 2MB**

### Alt Text:
Always add descriptive alt text for accessibility:
```javascript
<img src={myImage} alt="Engineering team working on CAD models" />
```

## 🚀 Quick Reference

### To replace the hero image:
1. Add your image to `attached_assets/`
2. Open `client/src/components/sections/hero.tsx`
3. Change the import: `import heroImage from "@assets/your-image.jpg";`
4. The image will automatically update!

### To add images elsewhere:
1. Find the page/component file
2. Add import statement
3. Replace or add `<img src={yourImage} alt="description" />`

## 💡 Pro Tips

1. **SVG files**: Best for icons and simple graphics (scalable)
2. **JPG files**: Best for photos (smaller file size)
3. **PNG files**: Best for images with transparency
4. **WebP files**: Best overall quality/size ratio (modern format)

The website automatically refreshes when you save files, so you'll see changes immediately!